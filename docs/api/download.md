---
sidebar_position: 4
---

# ⏬ Download

You can call this endpoint to download the GreenCloud Command Line Interface (gccli).


## Get

:::info
This will redirect you to the correct link to download the CLI .
:::

:::caution Caution
On Windows machines you will need to place the gccli.exe file in the windows/system32 folder.

On Linux and OSX machines you will need to convert the file into a executable. Use the CHMOD command to achieve this :-

```
chmod +x gccli-0.5.2-darwin-amd64
```

See [installing the CLI](https://docs.greencloud.dev/guide/cli/installing%20the%20CLI) within the guide section for more information.

:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/download/cli' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Key             | Example                                                            | Requirements                                                |
| --------------- | ------------------------------------------------------------------ | ----------------------------------------------------------- |
| os			  | "windows"														   | `required` `string` `oneof darwin linux windows`			 |
| arch			  |	"amd64"															   | `required` `string` `oneof amd64 arm64`					 |

#### Example Request

<endpoint href='https://api.greencloud.dev/v1/download/cli?os=linux&arch=amd64' method='GET'/>

#### Example Response

```js title="Status: 302 Redirect to Object Storage"
	empty body
```