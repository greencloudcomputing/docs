---
sidebar_position: 2
---

# 🧑‍💻 Installing the CLI !

You can download the CLI from this link -:

[Green Cloud CLI Tool](https://dl.greencloudcomputing.io/gccli)

On Linux and OSX machines you will need to convert the file into a executable. Use the CHMOD command to achieve this -:

```console
    chmod +x gccli-0.5.2-darwin-amd64
```

This tells the operation system that the file is an executable. On a MAC machines, if you get a message like this,

![Unknown Developer](../../img/dev-verified.png)

then open the System Settings window (top left Apple icon) and select Security Settings. ( Specific namings may vary due to OS updates / versions ). You should see a screen that is similar to this -:

![Unknown Developer](../../img/allowapp.png)

Click the button "Allow Anyway". The computer will ask you to authenticate with your user name or password.You should then be able to allow the CLI tool to be enabled on your machine!

<cliWindow>

```text {1}
$ ./gccli
NAME:
   gccli - the future of clean, ethical cloud computing....

USAGE:
   gccli [global options] command [command options] [arguments...]

VERSION:
   23.03.08

COMMANDS:
   login   you must login to start using GreenCloud
   logout  to stop using GreenCloud simply logout
   node    manage node settings
   info    get info from user
   status  get all running lambdas
   lambda  manage lambda functions
   update  check if a newer version is available

GLOBAL OPTIONS:
   --help, -h     show help
   --version, -v  print the version
$ █
```

</cliWindow>

The rest of the pages in this section will be spent detailing the various niche calls in the CLI and how they work and inter-operate.
