---
sidebar_position: 10
---

# ➡️ Trigger (function chain)

::::info
When you run a function a function in GreenCloud you may wish for it to cause another function to run afterwards automatically. You can do this by creating a trigger. Triggers have the option to allow you to pass the result from one function into the function which is automatically called afterwards.

::::


## Create

Use this endpoint to create a trigger which causes a function to execute automatically after another function has been called. You have the option to include tags and a description.

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
| `status`		  | 200							   | `integer` `httpcode`				   |
| `tag`           | [_tag id_, _tag id_, _tag id_] | `optional` `dive` `unique` `alphanum` |
| `includeResult` | true                           | `required` `bool`                     |
| `description`   | saveResultToStorage            | `optional` `printascii` `max=256`     |

#### Example Request

```js
{
	"functionId": "664f8feb91f33bfb994dcfd2",
	"nextId": "664f8feb91f33bfb994dcfd3",
	"tag": ['63fe131f02975e4956238b39', '63fe131f02975e4956238b40'],
	"status": 200,
	"includeResult": true,
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
| _function Id_   | 664f8feb91f33bfb994dcfd2       | `functionId`      					   |

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

Use this endpoint to get a list of triggers in your GreenCloud account. You can include the function Id to find triggers for that specific function. If the list of triggers is larger than a single page of results you can choose which page of results to view using `page`. You can also limit the number of triggers listed using `limit`.

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
| `page`        | 1                        | `optional` `min=1` `integer` `default 1`         |
| `limit`       | 3                        | `optional` `min=3` `max=20` `integer` `default 10`|
| `functionId`  | 664f8feb91f33bfb994dcfd3 | `optional`                                        |



#### Example Request

```js
{
	"page": 1,
	"limit": 2,
	"functionId": "664f8feb91f33bfb994dcfd2",
}
```

#### Example Response

```js title="Status: 200 OK"
{
  "pageCount": 1,
  "pageSize": 1,
  "totalCount": 2,
  "results": [{
    "id": "65dd290735dd849401eacc8e",
    "functionId": "664f8feb91f33bfb994dcfd2",
    "nextId": "65cbc89aaa892059d49e06cf",
    "tags": [{ "id": "65cbc88e41cbcfgibfacefd4", "name": "greencloud", "color": "#00ff80" }],
    "status": 200,
    "includeResult": true,
    "createdAt": "2024-02-27T00:12:55Z"
    }
	{
    "id": "65dd290735dd849401eacc8f",
    "functionId": "664f8feb91f33bfb994dcgp4",
    "nextId": "65cbc89aaa892059d49e09dz",
    "tags": [{ "id": "65cbc88e41cbcfharfacefd4", "name": "webinars", "color": "#00dd80" }],
    "status": 200,
    "includeResult": false,
    "createdAt": "2024-05-25T00:13:42Z"
	}]
}
```

## Edit

Use this endpoint to edit a trigger. You have the option to include tags and a description.

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/trigger/[triggerId]' method='PATCH'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |


#### Request Body

| Key             | Example                        | Requirements                          |
| -------------   | ------------------------------ | ------------------------------------- |    
| `tag`           | [_tag id_, _tag id_, _tag id_] | `optional` `dive` `unique` `alphanum` |
| `status`		  | 200							   | `integer` `httpcode`				   |
| `includeResult` | true                           | `required` `bool`                     |
| `description`   | saveResultToStorage            | `optional` `printascii` `max=256`     |

#### Example Request

```js
{
	"tag": ['63fe131f02975e4956238b39', '63fe131f02975e4956238b40'],
	"status": 200,
	"includeResult": true,
	"description": "saveResultToStorage"
}
```

#### Example Response

```js title="Status: 204 No Content"
{
	Empty body
}
```


## Delete

Use this endpoint to delete a trigger from the GreenCloud system.

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/trigger/[triggerId]' method='DELETE'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value           | Example                  | Required |
| -------------   | ------------------------ | -------- |
| _trigger id_    | 65dd290735dd849401eacc8f | true     |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 204 No Content"
Empty body
```