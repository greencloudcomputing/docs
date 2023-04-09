---
sidebar_position: 5
---

# 🌱 Creating a Function

:::tip requirements

-   The CLI [tool](Installing%20the%20CLI)
-   Being logged in

:::

:::info
In the near future, users will be able to schedule a function.
:::

### Functions in the Cloud

Functions are registered in Green Cloud by default. For local functions, click [here](#local-functions).

Once you are logged in, you can create a function by following these steps:

#### Step by step

-   Navigate to the directory where you want the function to be located.
-   Use the following command to create the function `./gccli function init`
-   Enter function name. `alphanumeric`
-   Enter one of the available languages. `go` `py` `js` `cs` `rb`
-   Enter description. `optional` `ascii` `max=80`

<cliWindow>

```text {1,3,4,5}
$ ./gccli login
👷 Validating inputs...
🥼 Name → MyFunction
🔖 Language → go
👔 Description → My first function
📡 Sharing information...
📄 Copying template...
📝 Saving configuration...
🌱 Function created successfully!
$ █
```

</cliWindow>

#### One-liner

Functions can also be created by a one-liner. Here's an example:

<cliWindow>

```text {1}
$ ./gccli function init -n oneliner -l go -d 'description'
👷 Validating inputs...
🥼 Name → oneliner
🔖 Language → go
👔 Description → description
📡 Sharing information...
📄 Copying template...
📝 Saving configuration...
🌱 Function created successfully!
$ █
```

</cliWindow>

For all the options, check out the [CLI api](../../cli#function-init)

### Local functions

Users may also create local functions by passing `--offline` flag. This is useful if you are not ready to push your function to the cloud and just want to test it. Here's an example:

```
./gccli function init -n myFunction -l go -d 'my description' --offline
```

### 🔖 Available languages:

Green Cloud supports the following languages at the time of writing:

-   🔆 GOLANG → go (1.18)
-   🔆 PYTHON → py (3.7)
-   🔆 NODEJS → js (16)
-   🔆 CSHARP → cs (6)
-   🔆 RUBY → rb (2.7.5)

We will be adding more as GreenCloud grows. To select the languages use the abbreviation. For example if you are going to write a function in GoLang use 'go'.
