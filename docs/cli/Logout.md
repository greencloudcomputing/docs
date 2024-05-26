---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This command clears your access token from the system. You will be prompted that you are sure about logging out.

```
$ gccli logout --help
```

```
NAME:
  gccli logout - logout to stop uisng GreenCloud CLI

USAGE:
  gccli logout command [command options] [arguments...]

OPTIONS:
  --help, -h  show help
```

#### Example
<cliWindow>

```text {1,3}
$ gccli logout 
😔 Are you sure about logout?
✋ Do you wish to continue? (y/n) → y
👍 You are now logged out , see you soon 😎
👉 Your opinion is important → hello@greencloudcomputing.io
```

</cliWindow>