---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🔓 `login`

::::info
Use this command to allow you to interact with the GreenCloud API. You will need your API Key which is in your GreenCloud Account section to be able to login.

::::

```
$ gccli login --help
```

```
NAME:
  gccli login - you must login to start using GreenCloud

USAGE:
  gccli login command [command options] [arguments...]

OPTIONS:
  --help, -h  show help
```

#### Example
<cliWindow>

```text {1}
$ gccli login 
🔐 Key → 0e636368-6359-4bc7-bbcb-4345GrE3N
📡 Obtaining information...
🔓 Verified credentials, activating system...
🤠 GreenCloud activated successfully!
```

</cliWindow>