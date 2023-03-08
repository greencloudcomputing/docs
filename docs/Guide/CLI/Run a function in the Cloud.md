---
sidebar_position: 8
---

# ☁️ Running a function in the cloud

:::tip requirements

-   Being logged in
-   Being in the directory of a function
-   Enough quota

:::

### Deploy

The function first needs to be deployed with the following command `./gccli lambda deploy`

<cliWindow>

```
~/myLambda $ ./gccli lambda deploy
👷 Verifying configuration...
📦️ Archs: AMD64,ARM64,ARM
🔩 Building container image...
⏳️ Process may take a while, please wait...
🧩 Compiling multi-arch image [OK]
🚚 Pushing image to registry...
🔥 Lambda successfully uploaded!
$ █
```

</cliWindow>

### Run via public endpoint

The function needs a public endpoint to be called remotely with the following command `./gccli lambda public`

<cliWindow>

```
~/myLambda $ ./gccli lambda public
👷 Validating inputs...
🚨 You must keep the public endpoint safe!
🔗 Any existing endpoint will be revoked
✋ Do you accept conditions? (y/n) → y
🤖 Public endpoint created successfully!
🔗 https://api.greencloud.dev/gc/d322e8a50390418e83f15daa2bea32fb
$ █
```

</cliWindow>

Navigating to the link will get the dispatcher to queue the function to be run and will return a task ID.

<browserWindow minHeight={150} url="https://api.greencloud.dev/gc/d322e8a50390418e83f15daa2bea32fb">
id:	"6408a2721815ce1e1d877319"
</browserWindow>

You may know navigate to https://api.greencloud.dev/gc/[taskId]/result to get the result of the function. If the function run hasn't been completed yet, you will get a 404 response. You may need to poll the link multiple times until you get the response.

<browserWindow minHeight={150} url="https://api.greencloud.dev/gc/6408becf1815ce1e1d877349/result">
Hello from GO by GreenCloud!
</browserWindow>

### Run via CLI

You may also invoke the function from the CLI with the following command `./gccli lambda invoke`
This will give you a task ID that you can later use to get the response of this function.

<cliWindow>

```
~/myLambda $ ./gccli lambda invoke
👷 Validating inputs...
📄 Obtaining local information...
⌚ Timeout → 10
📄 Payload → Hello from Green Cloud!
🚀 Invoking lambda...
📌 ID: 6408a30b1815ce1e1d87731a
📻 Waiting for task to output...
🧾 200 → Hello from Green Cloud!
$ █
```

</cliWindow>

### Get lambda result

We may look up the result of a previously ran function by the id that was given during the initial run. Let's use the ID from the previous example to get the result of the function once again with the command `./gccli lambda result`

<cliWindow>

```text {3}
~/myLambda $ ./gccli lambda result
👷 Validating inputs...
🔖 ID → 6408a30b1815ce1e1d87731a
📻 Waiting for task to output...
🧾 200 → Hello from Green Cloud!
$ █
```

</cliWindow>
