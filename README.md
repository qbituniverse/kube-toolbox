# kube-toolbox

**kube-toolbox** is available on: <a href="https://github.com/qbituniverse/kube-toolbox" target="_blank">GitHub</a> - <a href="https://hub.docker.com/repository/docker/qbituniverse/kube-toolbox" target="_blank">DockerHub</a> - <a href="https://qbituniverse.com" target="_blank">QbitUniverse</a>

# Description

**kube-toolbox** is full of useful tools which can be used to work with **Kubernetes** via *kubectl* command.

All resources in **kube-toolbox** are free, public and constantly updated with new functionality.

# How to use it?

## Run *kube-toolbox* Pod
```
kubectl run kube-toolbox --image=qbituniverse/kube-toolbox --generator=run-pod/v1
```

## Exec into a running instance of *kube-toolbox* Pod
```
kubectl exec -it kube-toolbox -- /bin/ash
```

# What's inside?

**kube-toolbox** is based on *alpine* base image. More info here on [DockerHub](https://hub.docker.com/_/alpine){:target="_blank"}.

## api

This is NodeJS Api running inside the Pod.

|Port|Endpoint|Response|
|---|---|---
|80|/api/ping|Pong|
|80|/api/ip|IP Address|
|80|/api/timestamp|Local Date+Time in GMT|

### Usage
```
curl http://<POD NAME>/api/ping
curl http://<POD IP>/api/ping
```

### Examples
```
curl http://kube-toolbox/api/ping
curl http://10.1.1.188/api/timestamp
```

## curl
Facility to make HTTP calls from within the Pod.

### Usage
```
curl http://URL
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
**kube-toolbox** is available on: <a href="https://github.com/qbituniverse/kube-toolbox" target="_blank">GitHub</a> - <a href="https://hub.docker.com/repository/docker/qbituniverse/kube-toolbox" target="_blank">DockerHub</a> - <a href="https://qbituniverse.com" target="_blank">QbitUniverse</a>
