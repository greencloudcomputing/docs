---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🧑‍💼 Task

:::caution
Missing intro
:::

## Create Task

:::info
TODO ⚠️
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/task/[functionId]' method='POST'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | optional |

#### Request Parameters

| Value         | Example                  | Required |
| ------------- | ------------------------ | -------- |
| _function id_ | 6404b3da46551827c611ffe5 | true     |

:::tip
You may pass multiple query parameters to be consumed by the function.

**Example**: /v1/task/[functionId]?myParam1=100&myParam2=Green&myParam3=true
:::

#### Request Body

:::tip
You may pass any valid json in the request body to be consumed by the function.
:::

#### Example Request

```js
{
  "name": "John Doe",
  "age": 30,
  "admin": true,
}
```

#### Example Response

```js title="Status: 201 Created"
{
	"id": "63f47d24dab5eb85451f3b61",
}
```

## Get Task

:::info
TODO ⚠️
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/task/[taskId]' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value     | Example                  | Required |
| --------- | ------------------------ | -------- |
| _task id_ | 6405942c9956fae80d7e0e91 | true     |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 200 OK"
{
	"lambdaId": "6405848581b16f7a07cd4c48",
	"issued": "1678087212",
	"assigned": "1678088212",
	"finished": "1678089212",
	"progress": 0,
	"node": "1a061cfd-df01-4b02-a067-5122c5941e15",
	"timeout": 10,
	"capabilities": {
		"cpuCount": 0,
		"memSize": 0,
		"networkLatency": 0,
		"privileged": true
	}
}
```

## List Tasks

:::info
TODO ⚠️
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/task/list' method='GET'/>

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
        id: "64057f3c9956fae80d7e0e84",
		issued: "1680786622",
		progress: 0,
		status: 0
    },
    {
        id: "640581c89956fae80d7e0e85",
		issued: "1680786622",
		progress: 100,
		status: 200
    },
    {
        id: "6405942c9956fae80d7e0e91",
		issued: "1680786622",
		progress: 75,
		status: 0
    },
]
```

## Result Tasks

:::info
TODO ⚠️
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/task/[taskId]/result' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value     | Example                  | Required |
| --------- | ------------------------ | -------- |
| _task id_ | 6405942c9956fae80d7e0e91 | true     |

#### Example Request

```js
Empty body
```

:::tip
Response could be any valid HTTP response returned by the underlying function.
:::

#### Example Responses

<Tabs>
<TabItem value="Text">

```js title="Status: 200 OK"
"Hello from Green Cloud!"
```

</TabItem>
<TabItem value="JSON">

```js title="Status: 200 OK"
{
  "Status": "OK",
  "Active": true,
  "Nodes":["west", "south"],
  "Count":40
}
```

</TabItem>
</Tabs>
