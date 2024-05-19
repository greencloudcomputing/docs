---
sidebar_position: 6
---

# I get this error....

Below you will find the most common mistakes, with their solutions!

### NEEDS_LOGIN

This error occurs when you have tried to run a command using the CLI but you have not yet logged in.

Simply run `gccli login`

And follow the instructions

<cliWindow>

```text {1}
$ gccli login
👷 Enter your API Key to login
🔐 Key → 
```

</cliWindow>

You can find your api key in the account section of the GreenCloud dashboard [here](https://app.greencloudcomputing.io)

***
### NO_RUNNER

This happens when you have created your function but you have not deployed it into GreenCloud, see below.


<cliWindow>

```text {1,9}
$ gccli fx invoke
👷 Validating inputs...
📄 Obtaining local information...
📚 Body → 
🔍 Query → 
⌚ Timeout → 10
🚀 Invoking function...

😐 Ohh! → NO_RUNNER
👉 Use 'gccli fx deploy'
```

</cliWindow>

To fix this simply run the command `gccli fx deploy` and wait for the Function to build and deploy into GreenCloud. 

Once it has completed you can now invoke your Function in the cloud!

***
### NO_QUOTA_AVAILABLE

When you see this message it means that you have used up all of the calls you have purchased in your GreenCloud account. There are several options that you can follow at this point but all of them require you to purchase some more calls via the GreenCloud bundles options.

Consider the number of calls you are making and the best plan that suits your needs. See [here](https://www.greencloudcomouting.io#pricing) for more information on our pricing. 

Also it is worth considering looking at the settings page in the Account section of the dashboard. We can handle automatic renew and email alerts when your quota is running low.

***
### NEEDS_UPGRADE

We work hard to ensure GreenCloud is running on the latest versions of software. As such, we perform a lot of checks and you will see this message when there has been an update to the CLI tool.

<cliWindow>

```text {1,9}
$ gccli fx list
🔑 Obtaining accessToken...

😐 Ohh! → NEEDS_UPGRADE
👉 Use 'gccli update'

```

If you are using Linux or OSX simply run the 'update' command as instructed. If you are on a windows machine you will need to download the latest version of the CLI from [here](https://app.greencloudcomputing.io/downloads)

</cliWindow>