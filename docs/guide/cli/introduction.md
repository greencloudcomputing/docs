---
sidebar_position: 1
---

# 🧩 Introduction

Where to start! The CLI is one of the earliest tools that we created with GreenCloud and it really is where a lot of the 'power' lies with GreenCloud and a software developer.

There are some pre-requisites to getting going with the CLI tool :-

-   You will need to install [Docker](https://www.docker.com/) for your device as we use it extensively.

-   You will also need a valid GreenCloud account (create one here) [GreenCloud - Sign Up](https://app.greencloudcomputing.io/signup)

-   You can download the CLI from -: [GreenCloud CLI Tool](https://app.greencloudcomputing.io/downloads) - Make sure you select the correct version to download for your computer.

See the next section for details about installing the CLI. What follows are some basic rules for using the CLI Tool.

### The format of commands in the CLI are as follows :-

#### If you are working in the directory where gccli.exe is located -

1. Display general CLI information by typing

```
./gccli
```

and pressing enter will display details of all the commands in the CLI

2. Getting command specific help by adding --help after the command name.

```
./gccli 'a command' --help
```

Here is an example

```
./gccli function --help
```

This will display all the parameters for that particular command and often an example usage of it as well.


#### If you are not working in the directory where gccli.exe is located -

1. Display general CLI information by typing

```
gccli
```

and pressing enter will display details of all the commands in the CLI

2. Getting command specific help by adding --help after the command name.

```
gccli 'a command' --help
```

Here is an example

```
gccli function --help
```

This will display all the parameters for the function command and often an example usage of it as well.