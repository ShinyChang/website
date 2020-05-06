---
path: React-render-props-type-check
date: 2020-05-06T23:41:16Z
title: React render props 的 type check
description:
tags: ["React"]
---

React 的 prop type 定義一直以來都很重要，可以減少很多 debug 要花的時間，而對於最常用的 render props 的定義通常就會用 `PropTypes.func` 來作為 prop type 的定義

```js
const Select = ({ renderOption, options, ...rest }) => {
  return <select {...rest}>{renderOption(options)}</select>
}
Select.propTypes = {
  options: PropTypes.array.isRequired,
  renderOption: PropTypes.func.isRequired,
}
```

如果是用 children 的話，通常會使用 `PropTypes.node` (可以是任意個) 或是 `PropTypes.element` (限定一個 child) 來表示任何可以被 render 出來的東西

```js
const Select = ({ children, ...rest }) => {
  return <select {...rest}>{children}</select>
}
Select.propTypes = {
  children: PropTypes.node,
}
```

又如果限定 Component 來 render 呢？那樣可能就要用 `PropTypes.instanceOf`（如果有多種 instances 可能的話，就要在搭配 `PropTypes.oneOfType`）

```js
const Select = ({ children, ...rest }) => {
  return <select {...rest}>{children}</select>
}
Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(Option),
    PropTypes.instanceOf(OptionGroup),
  ]),
}
```

最後如果要傳額外的 prop 給 children，並且由 children 自己 render 的話就會像是以下這樣

```js
const Select = ({ children, options, ...rest }) => {
  return <select {...rest}>{options.map((opt) => children(opt))}</select>
}
Select.propTypes = {
  options: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
}

const Option = ({ name, value }) => {
  return <option value={value}>{name}</option>
}
Option.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
const App = () => {
  return <Select>{Option}</Select>
}
```

問題來了，如果要避免 re-render 可能需要上 `React.memo` 或是用 `PureComponent` 來優化 `Option`，而出來的 Option 將不會是一個 function 會是一個 React element 的 struct，所以 propTypes 的定義就會變成

```js
Select.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.func,
    PropTypes.shape({
      $$typeof: PropTypes.symbol,
    }),
  ]),
}
```

而這很煩人要寫很多，所以在 `prop-types^15.7.0` 就提供了新的寫法

```js
Select.propTypes = {
  children: PropTypes.elementType,
}
```

最後總結一下

```js
PropTypes.func // () => {}
PropTypes.element // <Component />
PropTypes.node // <Component /> * 0 ~ N
PropTypes.elementType // Component
```

#### References

1. https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
2. https://github.com/facebook/prop-types/pull/211
3. https://overreacted.io/why-do-react-elements-have-typeof-property/
