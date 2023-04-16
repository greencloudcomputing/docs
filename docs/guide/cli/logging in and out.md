---
sidebar_position: 3
---

# 🔐 Logging In And Out!

import CLIWindow from '@site/src/components/CLIWindow';

:::tip requirements

-   Being registered
-   Api key from your [dashboard](https://app.greencloudcomputing.io/dashboard)
-   The CLI [tool](Installing%20the%20CLI)

:::

### Logging In

You've downloaded the CLI tool and are ready to start. Before you can get going you need to sign into the account.

If you have not created a Green Cloud account yet then you can do so [here](https://app.greencloudcomputing.io/signup)

If all is in place simply type `gccli login` :

-   When prompted, enter your api key from your [dashboard](https://app.greencloudcomputing.io/dashboard)

<CLIWindow>

```text {1,3}
$ gccli login
👷 Enter your API Key to login
🔐 Key → b3868f8a-6216-4df9-abb0-cb303c808f9a
🔓 Verified credentials, activating system...
🤠 GreenCloud activated successfully!
$ █
```

</CLIWindow>

You are now good to go and get started with Green Cloud functions! 🎉️

### Logging out

If all is in place simply type `gccli logout` :

-   Whem prompted, type `y`

<CLIWindow>

```text {1,3}
$ gccli logout
😔 Are you sure about logout?
✋ Do you accept conditions? (y/n) → y
🫤 Hope to see you back here soon!
👉 Your opinion is important → hello@greencloudcomputing.io
$ █
```

</CLIWindow>
