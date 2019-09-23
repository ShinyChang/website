---
path: ipsec-vpn-sesrver-on-kubernetes
date: 2019-09-23T06:19:12.500Z
title: Deploy IPsec VPN server on Kubernetes
description: Deploy IPsec VPN server on Kubernetes
---
**NOTE:** In general case, you should not setup the VPN server on the kubernetes. If you need the VPN services, you should create an independent instance of it or use cloud platform's VPN service. Otherwise, you may have some security risk.



## Steps

1. Create `vpn.yaml` and replace `vpn_ipsec_psk`, `vpn_user` and `vpn_password` by your secret
   ```yaml
   apiVersion: apps/v1beta2
   kind: StatefulSet
   metadata:
   name: vpn
   spec:
   selector:
    matchLabels:
      app: vpn
   serviceName: vpn
   replicas: 1
   template:
    metadata:
      labels:
        app: vpn
    spec:
      containers:
        - name: vpn
          image: hwdsl2/ipsec-vpn-server
          imagePullPolicy: Always
          securityContext:
            privileged: true
          ports:
            - containerPort: 500
              hostPort: 500
              name: vpn-isakmp
              protocol: UDP
            - containerPort: 4500
              hostPort: 4500
              name: vpn-ike
              protocol: UDP
          env:
          - name: "VPN_IPSEC_PSK"
            value: "vpn_ipsec_psk"
          - name: "VPN_USER"
            value: "vpn_user"
          - name: "VPN_PASSWORD"
            value: "vpn_password"
   ```
2. Deploy to your cluster
   ```
   kubectl apply -f vpn.yaml
   ```
3. Check your public IP of VPN server
   ```
   kubectl logs vpn-0
   ```
   And your will see below information
   ![](/assets/cleanshot-2019-09-23-at-14.35.42-2x.jpg)
4. Open your VPN client and connect to VPN to check it



#### References

1. [https://github.com/hwdsl2/docker-ipsec-vpn-server](https://github.com/hwdsl2/docker-ipsec-vpn-server)
1. [https://kubernetes.io/docs/concepts/configuration/overview/](https://kubernetes.io/docs/concepts/configuration/overview/)
