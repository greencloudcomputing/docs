---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🔗️ Endpoint

Once you have created a GreenCloud function you can add a public endpoint to it so that it may be called across the internet. This will be a publicly available web url that has some rules regarding its use and operation. Endpoints will be available until deleted.

When you create a public endpoint there are several optional parameters to customise how and when your endpoint can be accessed. These include a daily limit on how many times your endpoint can be accessed, the domain origin of the request, the IP addess of the request and a range of time in which it can be accessed. e.g. between 08:30 - 17:30. 

Each time you call the endpoint, we will store the results from each call. The results will initially be publicly available for 5 minutes. After this time period your results are still accessible but will require an authenticated call to access them.

::::caution Caution

If you refresh your browser when using your endpoint this will result in an additonal call.

::::

## Create

:::info
Use this to create a new public endpoint for a given function. It returns a 201 response with an endpoint ID. Use the optional parameters to customise how and when your endpoint can be accessed. These include a daily limit on how many times your endpoint can be accessed, the domain origin of the request, the IP addess of the request and a range of time in which it can be accessed. e.g. between 08:30 - 17:30 and its timezone. 
:::

:::tip
GreenCloud understands that a publicly available URL will concern some of our users. To this end we have provided the ability to be able to delete the publicly available URL. This means that it is perfectly acceptable to create a URL, call it - get the results -and then delete it.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/endpoint/[functionId]' method='POST'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value         | Example                  | Required |
| ------------- | ------------------------ | -------- |
| _function id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Request Body

| Key             | Example                                                            | Requirements                                                |
| --------------- | ------------------------------------------------------------------ | ----------------------------------------------------------- |
| `description`   | collectMetricsData                                                 | `optional` `printascii` `max=256`                           |
| `tag`           | [_tag id_, _tag id_, _tag id_]                                     | `optional` `dive` `unique` `mongodb`                        |
| `dailyLimit`    | 1000                                                               | `optional` `int` `gte=-1` `numeric`                         |
| `origin`		  | https://greencloud.dev                                             | `optional` `unique` `dive` `http_url` `startswith=https://` |
| `ip`            | ["172.19.0.1", "192.168.0.1"]                                      | `optional` `unique` `dive` `ipv4`                           |
| `timeLimit`     | `{"from": "09:00", "to": "18:00", "timezone": "America/New_York"}` | `optional` `string` `time` `timezone`                       |


#### Example Request

```js
{
	"dailyLimit": -1,
	"origin": ["https://greencloud.dev"],
	"ip": ["172.18.0.1"],
	"timeLimit": {
		"from": "08:30",
		"to": "17:29",
		"timezone": "Europe/London"
	},
	"tag": [{"id": "65cbc88e41cbcffabfacefd4", "name": "greencloud", "color": "#00ff80"}]
}
```
#### Example Response

```js title="Status: 201 Created"
{
	"id": "536a74fefb8847c19d21020f43b12f67", // endpoint id
}
```

## Edit

:::info
Use this to edit your existing public endpoint using its ID. It returns a 204 response with no body. Use the optional parameters to customise how and when your public endpoint can be accessed. These include a daily limit on how many times your endpoint can be accessed, the domain origin of the request, the IP addess of the request and a range of time in which it can be accessed. e.g. between 08:30 - 17:30 and its timezone. 
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/endpoint/[endpointId]' method='PATCH'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value         | Example                  | Required |
| ------------- | ------------------------ | -------- |
| _endpoint id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Request Body

| Key             | Example                                                             | Requirements                                                |
| -------------   | ------------------------------------------------------------------- | ----------------------------------------------------------- |
| `description`   | DatabaseEntry                                                       | `optional` `printascii` `max=256`                           |
| `tag`           | [_tag id_, _tag id_, _tag id_]                                      | `optional` `dive` `unique` `mongodb`                        |
| `dailyLimit`    | 1000                                                                | `optional` `int` `gte=-1` `numeric`                         |
| `origin`		  | https://greencloud.dev                                              | `optional` `unique` `dive` `http_url` `startswith=https://` |
| `ip`            | ["172.19.0.1", "192.168.0.1"]                                       | `optional` `unique` `dive` `ipv4`                           |
| `timeLimit`     | `{"from": "09:00", "to": "18:00", "timezone": "America/New_York"}`  | `optional` `string` `time` `timezone`                       |


#### Example Request

```js
{
	"dailyLimit": 2000,
	"origin": ["https://greencloud.dev"],
	"ip": ["172.19.0.1"],
	"timeLimit": {
		"from": "11:45",
		"to": "21:29",
		"timezone": "America/Los_Angeles"
	},
	"tag": [{"id": "65cbc88e41cbcffabfacefd4", "name": "greencloud", "color": "#00ff80"}]
}
```
#### Example Response

```js title="Status: 204 No Content"
{
	Empty Body
}
```

## Get

::::info

This is used to retrieve information about your public endpoint using its ID. It will return the ID of its associated function, when it was created, as well as information on the optional parameters set when creating or editing your public endpoint. e.g. The daily limit on how many times your endpoint can be accessed, the domain origin of the request, the IP addess of the request and a range of time in which it can be accessed. e.g. between 08:30 - 17:30 and its timezone. 

::::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/endpoint/[endpointId]' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value         | Example                  | Required |
| ------------- | ------------------------ | -------- |
| _endpoint id_ | 63f47d24dab5eb85451f3b61 | true     |


#### Example Request

```js
{
empty body
}
```

#### Example Response

```js title="Status: 200 OK"
{
  "functionId": "65cbc89aaa892059d49e06cf",
  "description": "new endpoint2",
  "tags": [{ "id": "65cbc88e41cbcffabfacefd4", "name": "greencloud", "color": "#00ff80" }],
  "dailyLimit": -1,
  "origin": [ "https://greencloud.dev" ],
  "ip": [ "172.19.0.1", "192.168.0.1" ],
  "timeLimit": { "from": "00:00", "to": "23:59", "timezone": "Europe/London" },
  "createdAt": "2024-03-19T23:58:51Z"
}
```

## Metrics

::::info

Use this endpoint to recieve metrics on your public endpoint including how many tasks have been run that day using the public endpoint, how many tasks are pending, and how many have been run that week.

::::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/endpoint/[endpointId]/metrics' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value         | Example                  | Required |
| ------------- | ------------------------ | -------- |
| _endpoint id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Example Request

```js
{
empty body
}
```

#### Example Response

```js title="Status: 200 OK"
{
"todayTasks": 0, 
"pendingTasks": 0, 
"weekTasks": 2
}
```

## List

::::info

This is used to retrieve a list of your public endpoints including their IDs, descriptions, tags, and when they were created. You can use optional body requests to choose which page of results to view, how many results to return and which specific function you would like public endpoint information about using the function ID.
::::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/endpoint/list' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |


#### Request Body
 
| Key           | Example                  | Requirements                                       |
| ------------- | -------------------------| -------------------------------------------------  |
| `page`        | 1                        | `optional` `min=1` `integer` `default 1`           |
| `limit`       | 3                        | `optional` `min=3` `max=999` `integer` `default 10`|
| `functionId`  | 664f8feb91f33bfb994dcfd3 | `optional` `string`                                |



#### Example Request

```js
{
	"page": 2,
	"limit": 2,
	"functionId": "664f8feb91f33bfb994dcfd2",
}
```

#### Example Response

```js

"results": [{
    "id": "6609923b7c45d1e417131350",
    "description": "",
    "tags": [{ "id": "65cbc88e41cbcffabfacefd4", "name": "greencloud", "color": "#00ff80" }],
    "createdAt": "2024-03-31T16:41:31Z"
  } 
  {
    "id": "6609923b7c45d1e417131351",
    "description": "",
    "tags": [{ "id": "65cbc88e41cbcffabfacefd5", "name": "greencloud2", "color": "#00ff80" }],
    "createdAt": "2024-04-20T16:41:31Z"
  }]

```

## Delete

:::info
The Delete endpoint is used to delete the public endpoint for a given function. Endpoints don't expire. They need to be deleted if not needed anymore.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/endpoint/[endpointId]' method='DELETE'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value         | Example                          | Required |
| ------------- | -------------------------------- | -------- |
| _endpoint id_ | f43a136defaa41f7b39045f514a2edb6 | true     |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 204 No Content"
Empty body
```

## Use

:::info
The Use endpoint is a flexible public endpoint that can run a predefined function and accepts optional query parameters and an optional JSON body. By passing data through these parameters, users can customize the behavior of the function being called and provide additional information to the API. It returns a 201 response with a task ID.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/gc/[endpointId]?myParam=100' method='POST'/>

#### Request Headers

| Key            | Value              | Required |
| -------------- | ------------------ | -------- |
| `Content-Type` | `application/json` | optional |

#### Request Parameters

| Value         | Example                          | Required |
| ------------- | -------------------------------- | -------- |
| _endpoint id_ | f43a136defaa41f7b39045f514a2edb6 | true     |

:::tip
You may pass multiple query parameters to be consumed by the function.

**Example**: /gc/[endpointId]?myParam1=100&myParam2=Green&myParam3=true
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
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA"
  },
  "hobbies": ["reading", "traveling", "hiking"]
}
```

#### Example Response

```js title="Status: 201 Created"
{
	"id": "63f47d24dab5eb85451f3b61", // task id
}
```

## Result

:::info

Use this endpoint to retrieve the response of a previously executed function by its task ID. It returns a status 200 with an HTTP response returned by the function.

:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/gc/[taskId]/result' method='GET'/>

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
"You're making a difference using GreenCloud!"
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