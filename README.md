# kube-toolbox

**kube-toolbox** is available on: [GitHub](https://github.com/qbituniverse/kube-toolbox) - [DockerHub](https://hub.docker.com/repository/docker/qbituniverse/kube-toolbox) - [Web](https://qbituniverse.com)

## Description

**kube-toolbox** is full of useful tools which can be used to work with **Kubernetes** via *kubectl* command.

All resources in **kube-toolbox** are free, public and constantly updated with functionality.

## Base Image

**kube-toolbox** is based on *alpine* base image. More info here on [DockerHub](https://hub.docker.com/_/alpine).

## Additional Tools Installed

- curl

## Usage Scenarios

### Run **kube-toolbox** and enter into it
```
kubectl run -it --rm kube-toolbox --image=qbituniverse/kube-toolbox --generator=run-pod/v1
```

### Run **kube-toolbox** in the background
```
kubectl run kube-toolbox --image=qbituniverse/kube-toolbox --generator=run-pod/v1
```

### Exec into a running instance of **kube-toolbox**
```
kubectl exec -it kube-toolbox -n default -- /bin/bash
```

## Links

**kube-toolbox** is available on: [GitHub](https://github.com/qbituniverse/kube-toolbox) - [DockerHub](https://hub.docker.com/repository/docker/qbituniverse/kube-toolbox) - [Web](https://qbituniverse.com)
