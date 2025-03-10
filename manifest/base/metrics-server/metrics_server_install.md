
Deploy latest metric-server release.
```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/download/v0.5.0/components.yaml
```

```yaml
spec:
  template:
    spec:
      containers:
      - args:
        - --cert-dir=/tmp
        - --secure-port=443
        - --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname
        - --kubelet-use-node-status-port
        - --metric-resolution=15s
        - --kubelet-insecure-tls
        name: metrics-server
```

Patch metric-server deployment,

```bash
kubectl patch deployment metrics-server -n kube-system --patch "$(cat metric-server-patch.yaml)"
```