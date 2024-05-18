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

:::info Working directory
- All commands assume that you are not working in the directory where gccli.exe is located.
- If you are working in the directory where gccli is located and wish to execute from the current directory rather than your `PATH` environment variable, prefix all gccli commands with ./  
e.g. `./gccli login`
:::

### Logging In

You've downloaded the CLI tool and are ready to start. Before you can get going you need to sign into your account.

If you have not created a GreenCloud account yet then you can do so [here](https://app.greencloudcomputing.io/signup)

If you have an account simply type `gccli login` :

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

You are now good to go and get started with GreenCloud functions! 🎉️

### Logging out

When you are ready to logout, simply type `gccli logout` :

-   Whem prompted, type `y`

<CLIWindow>

```text {1,3}
$ gccli logout
😔 Are you sure about logout?
✋ Do you wish to continue? (y/n) → y
👍 You are now logged out , see you soon 😎
👉 Your opinion is important → hello@greencloudcomputing.io
$ █
```

</CLIWindow>
