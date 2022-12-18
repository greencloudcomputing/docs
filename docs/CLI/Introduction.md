---
sidebar_position: 1
---

# Introduction

Where to start! The CLI is one of the earliest tools that we created with Green Cloud and it really is where a lot of the 'power' lies with Green Cloud and a software developer. 

There are some pre-requisites to getting going with the CLI tool -: 

- You will need to install [Docker](https://www.docker.com/) for your device as we use it extensively.

- You will also need a valid Green Cloud account (create one here) [Green Cloud - Sign Up](https://app.greencloudcomputing.io/signup)

- You can download the CLI from -: [Green Cloud CLI Tool](https://dl.greencloudcomputing.io/gccli) -  Make sure you select the correct version to download for your computer.

See the next section for details about installing the CLI. What follows are some basic rules for using the CLI Tool.

The format of commands in the CLI are as follows -:

1. Display general CLI information by typing -: 

```console
    ./gccli 
```

and pressing enter will display details of all the commands in the CLI

2. Getting command specific help by adding --help after the command name.

```console
    ./gccli 'a command' --help
```

Here is an example 

```console
    ./gccli lambda --help
```

This will display all the parameters for that particular command and often an example usage of it as well.
