---
sidebar_position: 7
---

# 🧑‍💼 Task

## Create Task

:::info
TODO ⚠️
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/task' method='POST'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Body

| Key             | Example                  | Requirements                            |
| --------------- | ------------------------ | --------------------------------------- |
| `lambdaId`      | 64058fee9956fae80d7e0e8e | `required`                              |
| `timeout`       | 10                       | `required` `numeric` `gte=10` `lte=120` |
| `inlinePayload` | _valid encoded json_     | `optional`                              |

#### Example Request

```js
{
	"lambdaId": "64058fee9956fae80d7e0e8e",
	"timeout": 10
    "inlinePayload": "{'tasks':[{'complete':55},{'running':99}],'tickets':'10','admin':1,'password':Hello123!'}"
}
```

#### Example Response

```js title="Status: 201 Created"
{
	"id": "63f47d1c5bd6eeef8211c83e"
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
	"node": "",
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
    },
    {
        id: "640581c89956fae80d7e0e85",
    },
    {
        id: "6405942c9956fae80d7e0e91",
    },
]
```

## Result Tasks

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

TODO ⚠️
