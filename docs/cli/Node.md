---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## `node`

This command allows you to manage your node settings by adding a node and listing your existing nodes.

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

This command allows you to add a node to your account.

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

This command lists all nodes on your account.

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