---
sidebar_position: 7
---

# 🏃 Running a function locally

:::tip requirements

-   Being logged in
-   Being in the directory of a function

:::

During the creation of Green Cloud we realised that the software developer would need a method by which they could test their software locally first before publishing it into the Green Cloud.

To do this we make use of Docker and a special command in the CLI.

To run your function, make sure to be in the same directory and simple type `./gccli lambda start`:

<cliWindow>

```text {1}
~/myLambda $ ./gccli lambda start
👷 Validating inputs...
🧭 Port → 8080
⌚ Timeout → 10
📍 No container for lambda running!
🚀 Building lambda function...
⏳️ Process may take a while, please wait...
🧩 Image building was successfully!
🔗 Running → http://localhost:8080
$ █
```

</cliWindow>

This will trigger the function to be built and then started as a container in docker and running on Port 8080.

You can then invoke the function by calling it via a web browser or using a web introspection tool like PostMan to pass values in the 'body' of the function.

<browserWindow minHeight={150} url="http://localhost:8080">

Hello from GO by GreenCloud!

</browserWindow>

There are a couple of parameters for the `start` call that are worth mentioning. First

```console
./gccli lambda start -p 3000
```

Using the `-p` parameter you can specify which port you want you function to be accessible from.

```console
./gccli lambda start -t 5
```

Using the `-t` parameter you can set the timeout value for how long you specify for the function to run for before being timed out.

```console
./gccli lambda start -l
```

This will cause any logging that is on the standard out to be displayed to the terminal
