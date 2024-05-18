---
sidebar_position: 7
---

# Dashboard Created Functions

If you have used the web site to create a function and you now want to work on that function, it's easy and this guide will show you how.


:::tip requirements
- GreenCloud CLI tool [installed](https://dl.greencloudcomputing.io/gccli)
- Logged into your account: [Use your api key](https://app.greencloudcomputing.io/account) 
- The [function ID](https://app.greencloudcomputing.io/functions). You can copy the function ID to the clip board by clicking the clipboard icon next to the function ID.
:::

Make sure you have all the requirements above in place and have your function ID using the dashboard. Then simply need to run the following command 

```
gccli fx restore -i 'ID'`
```

Here is an example :-

<cliWindow>

```text {1}
$ gccli fx restore -i 643bcb966c251c33d4b20c28
👷 Validating inputs...
🔖 ID → 643bcb966c251c33d4b20c28
📄 Copying template...
📝 Creating config file...
🧬 Function restored successfully!
```

</cliWindow>

Please note that once you have started working on your Function, GreenCloud does not handle source control. We prefer to let source control services, like GitHub, GitLab etc, handle them.