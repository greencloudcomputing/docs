---
sidebar_position: 5
---

# 🌱 Function

In GreenCloud we operate a system that runs small functions repeatedly. These functions are based around containers that are delivered and executed on remote devices.

A Function can be created using the CLI and is generally not something that is viewed by the end user. The main purpose of the Function is to act as a logical construct to represent the software/code that the software developer has written.

When a software developer asks to initiate a function - they will create a task which will also have a related Function to execute.

A Function consists of -:

1. Name - a non unique character string used to represent the function.
2. Language - the language that the function is written in.

    At the time of writing GreenCloud supports -:

-   🔆 GOLANG → go (1.21)
-   🔆 PYTHON → py (3.12)
-   🔆 NODEJS → js (18)
-   🔆 CSHARP → cs (6)
-   🔆 RUBY → rb (2.7.5)
-   🔆 RUST → rs (1.7.8)

    We are looking to add C / C++ and WASM in the near future.

## Create

:::info
Use this endpoint to create a function to use in the GreenCloud system. The response from a succesful call is an HTTP 201 in which the body of the response contains the ID of the newly created function.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/function' method='POST'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Body

| Key           | Example                        | Requirements                          |
| ------------- | ------------------------------ | ------------------------------------- |
| `name`        | MyFunction                     | `required` `alphanum`                 |
| `description` | My function description        | `optional` `printascii` `max=80`      |
| `tag`         | [_tag id_, _tag id_, _tag id_] | `optional` `dive` `unique` `alphanum` |
| `lang`        | go                             | `required` `oneof=go py js cs rb`     |
| `type`        | docker                         | `required` `oneof=docker`             |

#### Example Request

```js
{
	"name": "MyFunction",
	"description":"My function description",
	"tag": ['63fe131f02975e4956238b39', '63fe131f02975e4956238b40'],
	"lang": "go",
	"type": "docker"
}
```

#### Example Response

```js title="Status: 201 Created"
{
	"id": "63f47d24dab5eb85451f3b61",
}
```

## Edit

:::info
Use this endpoint to edit the meta data about a function. You will need to pass the id of the function on the URL. The parameters that you can edit are the name, description and tags of the function.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/function/[functionId]' method='PATCH'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Parameters

| Value         | Example                  | Required |
| ------------- | ------------------------ | -------- |
| _function id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Request Body

| Key           | Example                        | Requirements                          |
| ------------- | ------------------------------ | ------------------------------------- |
| `name`        | MyFunction                     | `optional` `alphanum`                 |
| `description` | My function description        | `optional` `printascii` `max=80`      |
| `tag`         | [_tag id_, _tag id_, _tag id_] | `optional` `dive` `unique` `alphanum` |

#### Example Request

```js
{
	"name": "MyFunction",
	"description":"My function description",
	"tag": ['63fe131f02975e4956238b39', '63fe131f02975e4956238b40'],
}
```

#### Example Response

```js title="Status: 204 No Content"
Empty body
```

## Get

:::info
If you need to retrieve details about a particular function, use this endpoint by passing the function's ID as a URL parameter. The endpoint will provide you with a list of information related to the function.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/function/[functionId]' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value         | Example                  | Required |
| ------------- | ------------------------ | -------- |
| _function id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 200 OK"
{
	"name": "MyFunction",
	"description": "My function description",
	"type": "docker",
	"lang": "go",
	"tags": [
		{
			"id": "63ed33eac79248a54ee04831",
			"name": "greencloud",
			"color": "#00ff80"
		}
	],
   	"capabilities": {
		"timeout": 10,
		"cpuCount": 0,
		"memSize": 0,
		"networkLatency": 0,
		"privileged": true
	},
	"metrics": {
		"todaysTasks": 0,
		"pendingTasks": 0,
		"weekTasks": 0,
		"completedTasks": 0
	}
}
```

## List

:::info
Use this endpoint to get a list of functions in your GreenCloud account.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/function/list' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Example Request

```js
Empty body
```

#### Example Response

<!-- prettier-ignore -->
```js title="Status: 200 OK"
[
    {
	id: "6404b3da46551827c611ffe5",
        name: "MyFunction",
        description: "My function description",
        lang: "go",
        tags: [
            {
                id: "63ed33eac79248a54ee04831",
                name: "greencloud",
                color: "#00ff80",
            },
        ],
	createdAt: "1678029786"
    },
    {
	id: "6404b3da46551827c611ffe6",
        name: "MyFunction2",
        description: "My 2nd function description",
        lang: "go",
        tags: [
            {
                id: "63ed33eac79248a54ee04831",
                name: "greencloud",
                color: "#00ff80",
            },
        ],
	createdAt: "1676489715"
    },
]
```

## List By Tag

:::info
Use this endpoint to get a list of functions by tag. Note that you need to pass the tag you are interested in as a query parameter. We introduced Tags into GreenCloud as a means to be able to better manage your GreenCloud assets. Please see the Tag documentation for more details.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/function/list?tag=[tagId]' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value    | Example                  | Required |
| -------- | ------------------------ | -------- |
| _tag id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Example Request

```js
Empty body
```

<!-- prettier-ignore -->
```js title="Status: 200 OK"
[
    {
	id: "6404b3da46551827c611ffe5",
        name: "MyFunction",
        description: "My function description",
        lang: "go",
        tags: [
            {
                id: "63ed33eac79248a54ee04831",
                name: "greencloud",
                color: "#00ff80",
            },
        ],
	createdAt: "1678029786"
    },
    {
	id: "6404b3da46551827c611ffe6",
        name: "MyFunction2",
        description: "My 2nd function description",
        lang: "go",
        tags: [
            {
                id: "63ed33eac79248a54ee04831",
                name: "greencloud",
                color: "#00ff80",
            },
        ],
	createdAt: "1676489715"
    },
]
```

## Delete

:::info
Use this endpoint to delete a function from the GreenCloud system.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/function/[functionId]' method='DELETE'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value         | Example                  | Required |
| ------------- | ------------------------ | -------- |
| _function id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 204 No Content"
Empty body
```

## Get Capabilities

:::info
Use this endpoint to get capabilities of a function on the GreenCloud system.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/function/[functionId]/capabilities' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value         | Example                  | Required |
| ------------- | ------------------------ | -------- |
| _function id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 200 OK"
{
	"timeout": 10
	"cpuCount": 0,
	"memSize": 0,
	"networkLatency": 0,
	"privileged": true
}
```

## Set Capabilities

:::info
In GreenCloud, because of the disparate nature of the machines that will be connecting to the Dispatcher, we use something called Capabailities to be able to clearly utilise the best suited machine to the computational task that the function requires. This is the purpose of Capabilities. In setting the capabilities of a function you can restrict the machines that that function executes on. The purpose of this is to run on the most optimal machine for the function.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/function/[functionId]/capabilities' method='POST'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Parameters

| Value         | Example                  | Required |
| ------------- | ------------------------ | -------- |
| _function id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Request Body

| Key          | Example | Requirements                             |
| ------------ | ------- | ---------------------------------------- |
| `timeout`    | 10      | `optional` `numeric` `gte=10` `lte=120`  |
| `cpuCount`   | 1       | `optional` `numeric` `gte=0` `lte=4`     |
| `memSize`    | 1024    | `optional` `numeric` `gte=0` `lte=2048`  |
| `privilaged` | true    | `optional` `bool`                        |

#### Example Request

```js
{
	"timeout": 10
	"cpuCount": 1,
	"memSize": 1024,
	"privileged": true
}
```

#### Example Response

```js title="Status: 204 No Content"
Empty body
```
