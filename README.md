# kube-toolbox

**kube-toolbox** is available on: [GitHub](https://github.com/qbituniverse/kube-toolbox) - [DockerHub](https://hub.docker.com/repository/docker/qbituniverse/kube-toolbox) - [QbitUniverse](https://qbituniverse.com)

# Description

**kube-toolbox** is full of useful tools which can be used to work with **Kubernetes** via *kubectl* command.

All resources in **kube-toolbox** are free, public and constantly updated with new functionality.

# How to use it?

## Run *kube-toolbox* as Pod
```
kubectl run kube-toolbox --image=qbituniverse/kube-toolbox --generator=run-pod/v1
```

## Exec into a running instance of *kube-toolbox* Pod
```
kubectl exec -it kube-toolbox -- /bin/ash
```

## Expose *kube-toolbox* Pod as Service
```
kubectl expose pod kube-toolbox --port=80 --name=kube-toolbox
```

## Delete *kube-toolbox* Pod
```
kubectl delete pod kube-toolbox
```

## Delete *kube-toolbox* Service
```
kubectl delete svc kube-toolbox
```

# What's inside?

**kube-toolbox** is based on *node alpine* base image.

## api

This is NodeJS Api running inside the Pod.

|Port|Endpoint|Response|
|---|---|---
|80|/api/ping|"pong"|
|80|/api/client|Client Information|
|80|/api/server|Server Information|
|80|/api/timestamp|Local Date+Time in GMT Format|

### Usage
```
curl http://<DNS>/api/ping
curl http://<IP>/api/ping
```

### Examples
```
curl http://kube-toolbox/api/ping
curl http://10.1.1.188/api/timestamp
```

## nslookup
Facility to check DNS entry.

### Usage
```
nslookup <DNS>
```

### Examples
```
nslookup kube-toolbox
```

## curl
Facility to make HTTP calls from within the Pod.

### Usage
```
curl http://<URL>
```

### Examples
```
curl http://www.google.com
```

## hostname
Facility to request host information.

### Usage
```
hostname
hostname -i
```

## whoami
Facility to find your user status.

### Usage
```
whoami
```

# Links

**kube-toolbox** is available on: [GitHub](https://github.com/qbituniverse/kube-toolbox) - [DockerHub](https://hub.docker.com/repository/docker/qbituniverse/kube-toolbox) - [QbitUniverse](https://qbituniverse.com)
