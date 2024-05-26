---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## `function, fx`


This command will return all the function subcommands that are available in the GreenCloud CLI. 

```
$ gccli function --help
```

```
NAME:
  gccli function - manages functions

USAGE:
  gccli function command [command options] [arguments...]

COMMANDS:
  init     generates a new function with the data provided
  info     shows information about current function
  lang     lists all available languages for function
  start    starts function image to test locally
  logs     displays logs of local function
  stop     stops function container running
  edit     changes name/description of current function
  invoke   invokes a remote function
  result   gets result of task
  deploy   builds and pushes multi-arch container images
  public   creates public endpoint to invoke directly
  list     lists all functions
  delete   deletes function
  restore  restores function by ID
  sync     syncs function from server
  tasks    lists all tasks

OPTIONS:
  --help, -h  show help
```

### `function init`

This subcommand of the function command initiates the configuration process of creating a new function.

```
$ gccli function init --help
```

```
NAME:
  gccli function init - generates a new function with the data provided

USAGE:
  gccli function init -n NAME -l LANG -d 'DESCRIPTION'

OPTIONS:
  --lang value, -l value         sets language or template to use
  --name value, -n value         sets name to be used in function
  --description value, -d value  sets description of function
  --offline, -o                  creates function in offline mode (default: false)
  --no-folder, --nf              uses current folder (default: false)
  --help, -h                     show help
```

#### Example
<cliWindow>

```text {1}
$ gccli function init  
🔑 Obtaining accessToken...
👷 Validating inputs...
🥼 Name → functionTests
🔖 Language → go
👔 Description → Creating a test function
⌚ Timeout → 10
📡 Sharing information...
📄 Copying template...
📝 Saving configuration...
🌱 Function created successfully!
```

</cliWindow>



### `function info`

This subcommand of the function command shows information about the current function: ID, Name, Description, Language and Capabilities.

```
$ gccli function info --help
```

```
NAME:
  gccli function info - shows information about current function

USAGE:
  gccli function info

OPTIONS:
  --quiet -q  only print function ID
  --help, happy             shows help
```



### `function lang`

This subcommand of the function command lists all the available languages that can be used for your function.

```
$ gccli function lang --help
```

```
NAME:
  gccli function lang - lists all available languages for function

USAGE:
  gccli function lang

OPTIONS:
  --help, happy             shows help
```



### `function start`

This subcommand will attempt to start your function locally on your machine. You must make sure that you have docker installed and running. If the function is already running, GreenCloud will stop the function, rebuild it and start it again.

```
$ gccli function start --help
```

```
NAME:
  gccli function start - starts function image to test locally

USAGE:
  gccli function start -p 8080 -t 10 -l

OPTIONS:
  --port value, -p value     sets port to expose the function (default: 8080)
  --timeout value, -t value  sets maximum execution time in seconds (default: 10)
  --logs, -l                 sets displays logs (default: false)
  --cpu, -c                  sets number of cpu cores used for function (default: 1)
  --memory, -machine         sets megabytes of memory used for function (default: 256)
  --help, -h                 shows help
```

#### Example
<cliWindow>

```text {1}
$ gccli function start  
👷 Validating inputs...
🧭 Port → 8080
⌚ Timeout → 10
✋ Stopping existing container...
😎 Function successfully stopped!
🧩 Compiling image [OK]                              
🔗 Running → http://localhost:8080
```

</cliWindow>

### `function edit`

```
$ gccli function edit --help
```

This command will allow you to change the name and description of the function.

```
NAME:
  gccli function edit - changes name/description of current function

USAGE:
  gccli function edit -n NAME

OPTIONS:
  --name value, -n value         sets name to be used in function
  --description value, -d value  sets description of function
  --help, -h                     shows help
```

#### Example
<cliWindow>

```text {1}
$ gccli function edit  
👷 Validating inputs...
🥼 Name → rebootTest
👔 Description → A new description
⌚ Timeout → 10
💾 Saving configuration...
🥼 Function edited successfully!
```

</cliWindow>

### `function invoke`

The invoke subcommand allows you to call your function (once it has been deployed into GreenCloud - see the deploy subcommand for more information) and pass Body and Query Parameters to your function.

```
$ gccli function invoke --help
```

```
NAME:
  gccli function invoke - invokes a remote function

USAGE:
  gccli function invoke -i ID -b '{"key":"value"}'

OPTIONS:
  --id value, -i value     ID of function to invoke
  --body value, -b value   sets body to be sent to function
  --query value, -q value  sets query params to be sent to function
  --no-body   	           do not send body to function (default: false)
  --no-query               do not send query params to function (default: false)
  --help, -h               show help
```

#### Example
<cliWindow>

```text {1}
$ gccli function invoke  
👷 Validating inputs...
📄 Obtaining local information...
📚 Body → 
🔍 Query → 
⌚ Timeout → 10
🚀 Invoking function...
📌 ID: 647732f56aa774b668102963
📻 Waiting for task to output...
🧾 200 → Hello from GO by GreenCloud!
```

</cliWindow>

### `function result`

Use this function subcommand to obtain the results from a particular call. Every call in GreenCloud is assigned an ID. You can find the ID in the invoke response (See above). Use this ID to get the results from your function.

```
$ gccli function result --help
```


```
NAME:
  gccli function result - gets result of a task using it's ID

USAGE:
  gccli function result -i ID

OPTIONS:
  --id value, -i value  ID of task
  --help, -h            show help
```

#### Example
<cliWindow>

```text {1}
$ gccli function result -i 647733866aa774b558101974
👷 Validating inputs...
🔖 ID → 647733866aa774b558102969
📻 Waiting for task to output...
🧾 200 → Hello from GO by GreenCloud!
```

</cliWindow>

### `function deploy`

When you are happy with your function and ready to register it into GreenCloud - you use this command to build the container again and then publish it into the GreenCloud registry.

```
$ gccli function deploy --help
```

```
NAME:
  gccli function deploy - builds and pushes multi-arch container images

USAGE:
  gccli function deploy [command options] [arguments...]

OPTIONS:
  --arch value, -c value  arch to build function
  --help, -h              show help
```

#### Example
<cliWindow>

```text {1}
$ gccli function deploy
👷 Verifying configuration...
📦️ Archs: AMD64,ARM64,ARM
🧩 Compiling multi-arch image [OK] (22mb)                       
🚚 Pushing image to registry... [f242784c9c0d]
🔥 Function successfully uploaded!
```

</cliWindow>

### `function public`

Use this command carefully! This where GreenCloud starts to get cool! Using this command you generate a public URL that you can call and pass Query Parameters and Body Payloads into.

```
$ gccli function public --help
```

```
NAME:
  gccli function public - create public endpoint to invoke to directly

USAGE:
  gccli function public [command options] [arguments...]

OPTIONS:
  --id value, -i value  ID of function
  --delete, -d          deletes existing endpoint (default: false)
  --help, -h            shows help
```

#### Example
<cliWindow>

```text {1}
$ gccli function public
👷 Validating inputs...
🚨 You must keep the public endpoint safe!
🔗 Any existing endpoint will be revoked
✋ Do you wish to continue? (y/n) → y
🤖 Public endpoint created successfully!
🔗 https://api.greencloud.dev/gc/e1179ceba33144b7a214f92344590123
```

</cliWindow>



### `function public list`

This command lists all the function's public endpoints.

```
$ gccli function public list --help
```

```
NAME:
  gccli function public list - lists all a given function's public endpoints

USAGE:
  gccli function public list [command options]

OPTIONS:
  --id value, -i value  ID of function
  --help, -h            shows help
```


### `function list`

This subcommand of the function command lists all the functions.

```
$ gccli function list --help
```

```
NAME:
  gccli function list - lists all functions

USAGE:
  gccli function list

OPTIONS:
  --help, happy             shows help
```

### `function delete`

This command will delete the function from the list of functions in your account. You will be prompted to confirm that this is what you want to do. Remember - this will NOT delete your source code but simply the GreenCloud configuration that enables you to run that function on the internet. You must be in same directory as the function you wish to delete AND the .gcfunction file must be present. It is also possible to delete the function with an ID and passing the -i parameter.

```
$ gccli function delete --help
```

```
NAME:
  gccli function delete - deletes function

USAGE:
  gccli function delete [command options] [arguments...]

OPTIONS:
  --id value, -i value  ID of function
  --force, -f           deletes current folder (default: false)
  --help, -h            shows help
```

#### Example
<cliWindow>

```text {1}
$ gccli function delete
👷 Verifying configuration...
✋ Stopping existing container...
😎 Function successfully stopped!
🚚 All related data will be deleted
🚨 This action cannot be undone!
✋ Do you wish to continue? (y/n) → y
🔥 Function deleted successfully!
```

</cliWindow>

### `function restore`

This is a VERY powerful and useful command. You can restore your GreenCloud function onto any machine. The command has some extra sub parameters that you can pass to choose whether to create the directory, the template or just the .gcfunction file.

```
$ gccli function restore --help
```

```
NAME:
  gccli function restore - restore function by ID

USAGE:
  gccli function restore -i ID

OPTIONS:
  --id value, -i value  ID of function
  --quiet, -q           choose to only restore config file (default: false)
  --help, -h            shows help
```

#### Example
<cliWindow>

```text {1}
$ gccli function restore -i 6477283e599b4ee92e5171231
👷 Validating inputs...
🔖 ID → 6477283e599b4ee92e517101
🔍 Obtaining information...
📄 Copying template...
📝 Creating config file...
🧬 Function restored successfully!
```

</cliWindow>


### `function sync`

This command syncs the function from the server.

```
$ gccli function sync --help
```

```
NAME:
  gccli function sync - syncs function from server

USAGE:
  gccli function sync

OPTIONS:
  --help, -h            shows help
```


### `function tasks`

This command lists all tasks of a function using it's ID.

```
$ gccli function tasks --help
```

```
NAME:
  gccli function tasks

USAGE:
  gccli function tasks -i ID

OPTIONS:
  --id value, -i value  ID of function
  --help, -h            shows help
```


### `function builds`

This command lists all builds of a given function using it's ID.

```
$ gccli function builds --help
```

```
NAME:
  gccli function builds - lists all function builds

USAGE:
  gccli function builds -i ID

OPTIONS:
  --id value, -i value  ID of function
  --help, -h            shows help
```


### `function metrics`

This command lists metrics of a given function using it's ID.

```
$ gccli function metrics --help
```

```
NAME:
  gccli function metrics - gets metrics of a function

USAGE:
  gccli function metrics -i ID

OPTIONS:
  --id value, -i value  ID of function
  --help, -h            shows help
```


### `function capabilities`

This command changes the capabilities of a given function. You must have docker running and must be in the function directory to use this command.

```
$ gccli function capabilities --help
```

```
NAME:
  gccli function capabilities - change capabilities of a function

USAGE:
  gccli function capabilities [command options] [argument]

OPTIONS:
  --timeout -t          sets maximum execution time in seconds
  --cpu -c              sets number of cpu cores used (default: 1)
  --memory -m           sets megabytes of memory used (default: 256)
  --sync                sets active sync mode (default: false)
  --help, -h            shows help
```


