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


1. Display general CLI information and details of all the commands in the CLI by typing

```
./gccli
```


<cliWindow>

```text {1}
$ gccli
NAME:
   gccli - the future of clean, ethical cloud computing....

USAGE:
   gccli [global options] command [command options]

VERSION:
   24.05.15

COMMANDS:
   login         you must login to start using GreenCloud
   logout        to stop using GreenCloud simply logout
   node          manage node settings
   info          get info from user
   status        get all running function
   function, fx  manage functions
   update        check if a newer version is available

GLOBAL OPTIONS:
   --help, -h     show help
   --version, -v  print the version
```

</cliWindow>

---

2. Get command specific help by adding --help after the command name. This will display all the parameters for that particular command and often an example usage of it as well.

```
./gccli 'a command' --help
```

&nbsp&nbspe.g.

```
./gccli function --help
```

<cliWindow>

```text {1}
gccli function --help
NAME:
   gccli function - manage functions

USAGE:
   gccli function command [command options]

COMMANDS:
   init          generates a new function with the data provided
   info          show information of current function
   lang          list all available languages for function
   start         starts function image to test locally
   logs          display logs of local function
   stop          stop function container running
   edit          change name/description of current function
   invoke        invoke a remote function
   result        gets result of task
   deploy        builds and pushes multi-arch container images
   public        create public endpoint to invoke directly
   list          list all functions
   delete        delete function
   restore       restore function by ID
   sync          sync function from server
   tasks         list all tasks
   builds        list all builds
   metrics       get metrics of function
   capabilities  change capabilities of function

OPTIONS:
   --help, -h  show help

```

</cliWindow>

---
#### If you are not working in the directory where gccli.exe is located -

1. Display general CLI information and details of all the commands in the CLI by typing

```
./gccli
```


<cliWindow>

```text {1}
$ gccli
NAME:
   gccli - the future of clean, ethical cloud computing....

USAGE:
   gccli [global options] command [command options]

VERSION:
   24.05.15

COMMANDS:
   login         you must login to start using GreenCloud
   logout        to stop using GreenCloud simply logout
   node          manage node settings
   info          get info from user
   status        get all running function
   function, fx  manage functions
   update        check if a newer version is available

GLOBAL OPTIONS:
   --help, -h     show help
   --version, -v  print the version
```

</cliWindow>

---

2. Get command specific help by adding --help after the command name. This will display all the parameters for that particular command and often an example usage of it as well.

```
./gccli 'a command' --help
```

&nbsp&nbspe.g.

```
./gccli function --help
```

<cliWindow>

```text {1}
gccli function --help
NAME:
   gccli function - manage functions

USAGE:
   gccli function command [command options]

COMMANDS:
   init          generates a new function with the data provided
   info          show information of current function
   lang          list all available languages for function
   start         starts function image to test locally
   logs          display logs of local function
   stop          stop function container running
   edit          change name/description of current function
   invoke        invoke a remote function
   result        gets result of task
   deploy        builds and pushes multi-arch container images
   public        create public endpoint to invoke directly
   list          list all functions
   delete        delete function
   restore       restore function by ID
   sync          sync function from server
   tasks         list all tasks
   builds        list all builds
   metrics       get metrics of function
   capabilities  change capabilities of function

OPTIONS:
   --help, -h  show help

```

</cliWindow>