---
sidebar_position: 1
---

# 🖥️ env

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

::::info
This command changes the name of the environment to one of your choosing e.g. prod OR stage.
This command also allows you to run your enviroment locally rather than pushing to GreenCloud by using the command -n locally.
Use this command to switch between different GreenCloud API end points.

::::

:::tip Requirement
You must use the --name or -n command with the name of your chosen enviroment e.g. gccli env --name prod 
:::


```
$ gccli env --help
```

```
NAME:
  gccli env - changes environment prod/stage

USAGE:
  gccli env [command options] [argument]

OPTIONS:
  --name -n             set name of environment prod/stage
  --help, -h            shows help
```


#### Example
<cliWindow>

```text {1}
 $ gccli env -n locally
👷 Validating inputs...
🤫 Environment changed successfully!
```

</cliWindow>


## CLI usage

See more about the usage through this [complete guide](../category/the-mighty-cli).