---
sidebar_position: 10
---

# ➡️ Trigger (function chain)

::::info
When you run a function a function in GreenCloud you may wish for it to cause another function to run afterwards automatically. You can do this by creating a trigger. Triggers have the option to allow you to pass the result from one function into the function which is automatically called afterwards.

::::


## Create

Use this endpoint to create a trigger which causes a function to execute automatically after another function has been called. You habe the option to include tags and a description.

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/trigger' method='POST'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |


#### Request Body

| Key             | Example                        | Requirements                          |
| -------------   | ------------------------------ | ------------------------------------- |
| `functionId`    | 664f8feb91f33bfb994dcfd2       | `required` `string` `functionId`      |
| `nextId`        | 664f8feb91f33bfb994dcfd3       | `required` `string` `functionId`      |    
| `tag`           | [_tag id_, _tag id_, _tag id_] | `optional` `dive` `unique` `alphanum` |
| `includeResult` | true                           | `required` `bool`                     |
| `description`   | saveResultToStorage            | `optional` `printascii` `max=256`     |

#### Example Request

```js
{
	"functionId": "664f8feb91f33bfb994dcfd2",
	"nextId": "664f8feb91f33bfb994dcfd3",
	"tag": ['63fe131f02975e4956238b39', '63fe131f02975e4956238b40'],
	"includeResult": "true",
	"description": "saveResultToStorage"
}
```

#### Example Response

```js title="Status: 201 Created"
{
	"id": "63f47d24dab5eb85451f3b61",
}
```

## Get

Use this endpoint to retrieve information about a trigger using it's Id.

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/trigger/[triggerId]' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |


#### Request Parameters

| Key             | Example                        | Requirements                          |
| -------------   | ------------------------------ | ------------------------------------- |
| _function Id_   | 664f8feb91f33bfb994dcfd2       | `functionId`      |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 200 OK"
{
  "functionId": "65cbc89aaa892059d49e06cf",
  "nextId": "65cbc89aaa892059d49e06cf",
  "tags": [{ "id": "65cbc88e41cbcffabfacefd4", "name": "greencloud", "color": "#00ff80" }],
  "status": 200,
  "includeResult": true,
  "description": "saveResultToStorage",
  "createdAt": "2024-05-24T00:13:08Z"
}
```


## List

:::info
Use this endpoint to get a list of triggers in your GreenCloud account.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/trigger/list' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Body

| Key           | Example                  | Requirements                                      |
| ------------- | -------------------------| ------------------------------------------------- |
| `page`        | 1                        | `optional` `min=1` `integer` `default 10`         |
| `limit`       | 3                        | `optional` `min=3` `max=20` `integer` `default 10`|
| `functionId`  | 664f8feb91f33bfb994dcfd3 | `optional`                                        |


<!--
#### Example Request

```js
{
	"functionId": "664f8feb91f33bfb994dcfd2",
	"nextId": "664f8feb91f33bfb994dcfd3",
	"tag": ['63fe131f02975e4956238b39', '63fe131f02975e4956238b40'],
	"includeResult": "true",
	"description": "saveResultToStorage"
}
```

#### Example Response

```js title="Status: 201 Created"
{
	"id": "63f47d24dab5eb85451f3b61",
}
```
-->
