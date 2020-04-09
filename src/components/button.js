import React from "react"
import styled from "styled-components"

const Button = ({ children, ...props }) => (
  <ButtonWrapper {...props}>{children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  display: block;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 12px 24px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: black;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
`

export default Button
