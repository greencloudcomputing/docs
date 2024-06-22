---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🧑‍💼 Task

A task represents a single execution of a function. Task commands allow you to create, list and view the results of your tasks.

## Create Task

::::info

Create a task to call an execution of a single function.

::::

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

::::info

Calling task with your task ID will return more detailed information about that task.

::::

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
	"functionId": "6405848581b16f7a07cd4c48",
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

::::info
List will list all your tasks with their progress and their HTTP Status.

::::

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

## Get CSV Tasks

::::info

Calling task csv with the function ID will return a CSV with the results of your tasks related to that function. You can pass in optional date parameters to restrict your tasks to a date range, or you can pass in schedule Id to limit tasks to a given schedule.

::::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/task/[functionId]/csv' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Key             | Example                                                            | Requirements                                               |
| --------------- | ------------------------------------------------------------------ | -----------------------------------------------------------|
| `showPlain`     | true				                                               | `optional` `boolean` `default: false`                      |
| `functionId`    | 6405848581b16f7a07cd4c48	                                       | `optional` `string` `mongodb`                      		|
| `scheduledId`   | 6677391a241c7178b29e4a4a                                           | `optional` `string` `mongodb`                         		|
| `dateSince`	  | 2016-01-02				                                           | `optional` `string` `datetime` `yyyy-mm-dd`				|
| `dateUntil`     | 2021-03-24					                                       | `optional` `string` `datetime` `yyyy-mm-dd`                |

#### Example Request

```js
	{
	"showPlain": "true",
	"functionId": "6405848581b16f7a07cd4c48"
	"scheduleId": "6677391a241c7178b29e4a4a"
	"dateSince": "2006-01-02"
	"dateUntil": "2025-24-03"
	}
```

#### Example Responses

|ID							|IssuedAt				|Status		|ContentType		|Body					|
|---------------------------|-----------------------|-----------|-------------------|-----------------------|
|66773caefe3f89cf057bedcf	|2024-06-22T21:05:48Z	|200		|text/plain			|I am a storage Test!	|
|66773cddfe3f89cf057bedd0	|2024-06-22T21:06:34Z	|200		|text/plain			|I am a storage Test!	|
|66773ce2fe3f89cf057bedd2	|2024-06-22T21:06:39Z	|200		|text/plain			|I am a storage Test!	|
|66773ce0fe3f89cf057bedd1	|2024-06-22T21:06:40Z	|200		|text/plain			|I am a storage Test!	|


## Result Tasks

::::info

Calling your task result with the task ID will return the result of the task function.

::::

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
"Hello from GreenCloud!"
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
