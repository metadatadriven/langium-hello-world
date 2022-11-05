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

To use the dockerfile for development and avoid running command as root (and so
hitting permission problems) we create a non-root user.

