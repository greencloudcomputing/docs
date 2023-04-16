---
sidebar_position: 7
---

# Dashboard Created Functions

If you have used the web site to create a function and you want to now work on that function, its easy and this guide will show you how.


**Dependencies:**
- Green Cloud CLI tool [installed](https://dl.greencloudcomputing.io/gccli)
- Logged into your account [use your api key](https://app.greencloudcomputing.io/account) 
- The [Function ID](https://app.greencloudcomputing.io/functions). You can copy the function ID to the clip board by clicking the clipboard icon next to the function ID.


Make sure you have all the requirements above in place and have created your function using the dashboard. Next you simply need to run the following command `./gccli fx restore -i 'ID'`

Here is an example -:

<cliWindow>

```text {1}
$ ./gccli fx restore -i 643bcb966c251c33d4b20c28
👷 Validating inputs...
🔖 ID → 643bcb966c251c33d4b20c28
📄 Copying template...
📝 Creating config file...
🧬 Function restored successfully!
```

</cliWindow>

Please note that once you have started working on your function, GreenCloud does not handle source control. We prefer to let those people who are focussed on your source control needs to, like GitHub, GitLab etc to handle your source control needs. 