---
sidebar_position: 8
---

# ☁️ Running a function in the cloud

:::tip requirements

-   Being logged in
-   Being in the directory of the function
-   Enough quota

:::

### Deploy

First, the function needs to be deployed with the following command 

```
gccli fx deploy
```

<cliWindow>

```text {1}
$ gccli fx deploy
👷 Verifying configuration...
📦️ Archs: AMD64,ARM64,ARM
🔩 Building container image...
⏳️ Process may take a while, please wait...
🧩 Compiling multi-arch image [OK]
🚚 Pushing image to registry...
🔥 Function successfully uploaded!
$ █
```

</cliWindow>

### Run via public endpoint

The function needs a public endpoint to be called remotely with the following command 

```
gccli fx public
```

<cliWindow>

```text {1,5}
$ gccli fx public
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

<browserWindow minHeight={250} url="https://api.greencloud.dev/gc/d322e8a50390418e83f15daa2bea32fb">
⏳ Your function is queued up and will be executed in due time.

The result will be available for the next 5 minutes at the link below..

https://api.greencloud.dev/gc/6408becf1815ce1e1d877349/result
</browserWindow>

You may now navigate to https://api.greencloud.dev/gc/[taskId]/result to get the result of the function. If the function run hasn't been completed yet, you will get a 404 response. You may need to poll the link multiple times until you get the response.

<browserWindow minHeight={150} url="https://api.greencloud.dev/gc/6408becf1815ce1e1d877349/result">
Hello from GO by GreenCloud!
</browserWindow>

### Run via CLI

You may also invoke the function from the CLI with the following command `gccli fx invoke`. You will be asked to provide an optional payload. This will give you a task ID that you can later use to get the response of this function.

<cliWindow>

```text {1,5}
$ gccli fx invoke
👷 Validating inputs...
📄 Obtaining local information...
⌚ Timeout → 10
📄 Payload → Hello from GreenCloud!
🚀 Invoking function...
📌 ID: 6408a30b1815ce1e1d87731a
📻 Waiting for task to output...
🧾 200 → Hello from GreenCloud!
$ █
```

</cliWindow>

### Get function result

We may look up the result of a previously ran function by the id that was given during the invocation. Let's use the ID from the previous example to get the result of the function once again with the command `gccli fx result` . Enter the task id when prompted.

<cliWindow>

```text {1,3}
$ gccli fx result
👷 Validating inputs...
🔖 ID → 6408a30b1815ce1e1d87731a
📻 Waiting for task to output...
🧾 200 → Hello from GreenCloud!
$ █
```

</cliWindow>
