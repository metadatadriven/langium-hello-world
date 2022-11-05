# langium-hello-world
DSL hello world example using Langium running on GitPod

## Getting started with node and gitpod

Following this article to get started with node.js:

https://www.gitpod.io/blog/node-js-development

- setup debugger for the app, creating a launch config in `launch.json`
- use `gp init` to init the gitpod workspace with `gitpod.yml` file
- Edit the yml file.. `gp init` does not seem to be working as per blog article!
- Add `Dockerfile` FROM node:16

## node dockerfile with user permissions

See the following article:
https://www.octobot.io/blog/running-yeoman-in-a-development-instance-in-docker/

HOWEVER gitpod takes care of this for you.. so solution is to follow the
gitpod instructions and setup a `.gitpod.Dockerfile`

https://www.gitpod.io/docs/configure/workspaces/workspace-image



## Langium setup

Following the [Langium getting started](https://langium.org/docs/getting-started/) documentation, first thing we do is add the following to the gitpod docker file 
```
install Yeoman and Langium scaffold
```

