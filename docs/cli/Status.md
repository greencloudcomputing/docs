---
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## `status`

This command will give you more detailed information about the status of any functions that are running locally on your machine before pushing them into the cloud.

```
$ gccli status --help
```

```
NAME:
  gccli status - lists all running functions

USAGE:
  gccli status [command options]

OPTIONS:
  --help, -h  show help
```

#### Example
<cliWindow>

```text {1}
$ gccli status 
👷 Obtaining information...
🔍 List of active functions:
👔 1 | 📌 ID → 647728...e23e517101 | 🔆 Language → go | 🧭 Port → 8080

😁 Let's get creating more!
👉 Use 'gccli function init'
```

</cliWindow>