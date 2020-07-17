# kube-toolbox

**kube-toolbox** is available on: [GitHub](https://github.com/qbituniverse/kube-toolbox) - [DockerHub](https://hub.docker.com/repository/docker/qbituniverse/kube-toolbox) - [Web](https://qbituniverse.com)

## Description

**kube-toolbox** is full of useful tools which can be used to work with **Kubernetes** via *kubectl* command.

All resources in **kube-toolbox** are free, public and constantly updated with functionality.

## Base Image

**kube-toolbox** is based on *alpine* base image. More info here on [DockerHub](https://hub.docker.com/_/alpine).

## Additional Tools Installed

### api
This is NodeJS Api running inside the Pod.
|Port|Endpoint|Response|
|---|---|---
|80|/api/ping|Pong|
|80|/api/ip|IP Address|
|80|/api/timestamp|Local Date+Time in GMT|

### curl
Facility to make HTTP calls from within the Pod.

## Usage Scenarios

### Run *kube-toolbox* Pod
```
kubectl run kube-toolbox --image=qbituniverse/kube-toolbox --generator=run-pod/v1
```

### Exec into a running instance of *kube-toolbox* Pod
```
kubectl exec -it kube-toolbox -- /bin/ash
```

## Links

**kube-toolbox** is available on: [GitHub](https://github.com/qbituniverse/kube-toolbox) - [DockerHub](https://hub.docker.com/repository/docker/qbituniverse/kube-toolbox) - [Web](https://qbituniverse.com)
