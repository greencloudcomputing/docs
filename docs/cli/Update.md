---
sidebar_position: 8
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## `update`

This is another very nice feature of GreenCloud. We work hard to maintain the integrity of the GreenCloud system. As such we will check the version of the CLI that is interacting with the API and will stop out of date CLI's from interacting with the API. Run this command of Windows and it will direct you to where you can download the latest version. Make sure to then move it to the correct folder. Run this command on Linux or macOS and it will automatically download the latest version and have it ready for use once it has completed. Nice 😎

```
$ gccli update --help
```

```
NAME:
  gccli update - check if a newer version is available

USAGE:
  gccli update command [command options] [arguments...]

OPTIONS:
  --help, -h  show help
```

#### Example
<cliWindow>

```text {1}
$ gccli update
🔍 Checking latest version...
🌱 New version detected! (v23.05.27)
📻 Downloading new version...
🩺 File passed SHA256 check!
💾 Generating backup...
🚀 Update was installed successfully!
```

</cliWindow>

