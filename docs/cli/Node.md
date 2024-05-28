---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 📡 node

These commands allow you to add nodes to your GreenCloud account and manage your node settings.

## `node`

::::info

This command allows you to manage your node settings by adding a node and listing your existing nodes.

::::

```
$ gccli node --help
```

```
NAME:
  gccli node - manage node settings

USAGE:
  gccli node command [command options] [arguments...]

COMMANDS:
  add   assign a node to account
  list  list all nodes on user

OPTIONS:
  --help, -h  show help
```

### `node add`

::::info

This subcommand allows you to add a node to your account by providing an IP address of the device you wish to use. You 

::::


```
$ gccli node add --help
```

```
NAME:
  gccli node add - assign a node to account

USAGE:
  gccli node add -i '192.168.5.4'

OPTIONS:
  --ip value, -i value           IP of VM/PC to active node
  --description value, -d value  description of node
  --help, -h                     show help
```

### `node list`

::::info

This command lists all nodes on your account.

::::


```
$ gccli node list --help
```

```
NAME:
  gccli node - lists all nodes on account

USAGE:
  gccli node list

OPTIONS:
  --help, -h  show help
```