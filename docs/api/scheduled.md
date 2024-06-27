---
sidebar_position: 10
---

# 🗓 Scheduled

GreenCloud allows you to schedule your functions at regular times, dates or intervals using CRON.

## Create

:::info
Use this endpoint to create a schedule for your GreenCloud function using CRON. The response from a succesful call is an HTTP 201 in which the body of the response contains the ID of the newly created schedule.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/scheduled' method='POST'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Body

| Key           | Example                        | Requirements                                 |
| ------------- | ------------------------------ | -------------------------------------        |
| `functionId`  | "63f47d24dab5eb85451f3b61"     | `required` `string` `mongodb`                |
| `cron`        | "\* \* 5 2 \*"                    | `required` `string` `cron`                   |
| `timezone`    | "UTC"                          | `required` `string` `timezone`               |
| `description` | "Feb schedule"                 | `optional` `string` `printascii` `max=256`   |

#### Example Request

```js
{
	"functionId": "63f47d24dab5eb85451f3b61",
	"cron": "* * 5 2 *",
	"timezone": "UTC",
	"description": "Feb schedule"
}
```

#### Example Response

```js title="Status: 201 Created"
{
	"id": "65d0f0313668b35c0e57726c",
}
```

## Edit

:::info
Use this endpoint and the schedule ID to edit a schedule for your GreenCloud function using CRON and disable or enable it. The response from a succesful call is an HTTP 204.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/scheduled/[scheduledId]' method='PATCH'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Parameters

| Value         | Example                  | Required |
| ------------- | ------------------------ | -------- |
| _scheduled id_| 65d0f0313668b35c0e57726c | true     |

#### Request Body

| Key           | Example                        | Requirements                                 |
| ------------- | ------------------------------ | -------------------------------------        |
| `active`		| true							 | `required` `boolean`							| 
| `cron`        | " \* 2 \* 2 \* "                  | `required` `string` `cron`                   |
| `timezone`    | "UTC"                          | `required` `string` `timezone`               |
| `description` | "Feb schedule"                 | `optional` `string` `printascii` `max=256`   |

#### Example Request

```js
{
	"active": "true",
	"cron": "* 2 * 2 *",
	"timezone": "UTC",
	"description": "02:00 Feb schedule"
}
```

#### Example Response

```js title="Status: 204 No Content"
{
	No Body
}
```

## Get

:::info
If you need to retrieve details about a particular schedule, use this endpoint by passing the schedules's ID as a URL parameter. The endpoint will provide you with a list of information related to the schedule.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/scheduled/[scheduledId]' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value         | Example                   | Required |
| ------------- | ------------------------  | -------- |
| _scheduled id_ | 65d0f0313668b35c0e57726c | true     |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 200 OK"
{
	"active": false,
	"functionId": "65cbc89aaa892059d49e06cf",
	"cron": "*/2 * * * *",
	"timezone": "UTC",
	"description": "Feb schedule",
  	"inlinePayload": { 
		"query": "aaaa=1&add=95",
		"body": "ewoJImFkbWluIjogMSwKCSJwYXNzd29yZCI6ICJkYXNAYWEiCn0=",
		"contentType": "application/json"
	}
}
```

## List

:::info
Use this endpoint to get a list of your GreenCloud function schedules. You can include optional request parameters to set which page of results to view, how many results to view, the specific function whose schedules you would like to view and the specific timezones you would like to view.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/scheduled/list' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Body
 
| Key          | Example                   | Requirements                          				|
| -------------| ------------------------- | -------------------------------------------------  |
| `page`	   | 1                         | `optional` `min=1` `integer` `default 1`			|
| `limit`      | 3                         | `optional` `min=3` `max=999` `integer` `default 10`|
| `functionId` | "664f8feb91f33bfb994dcfd3"| `optional` `string` `mongodb`						|
| `timezone`   | "UTC"					   | `optional` `timezone`								|

#### Example Request

```js
{
	"page": 2,
	"limit": 2,
	"functionId": "664f8feb91f33bfb994dcfd3",
	"timezone": "UTC"
}
```

#### Example Response

<!-- prettier-ignore -->
```js title="Status: 200 OK"
{
  "pageCount": 1,
  "pageSize": 10,
  "totalCount": 1,
  "results": [{
    "id": "65671af3affc592219eaec9e",
    "active": false,
    "functionId": "664f8feb91f33bfb994dcfd3",
    "cron": "*/3 * * * *",
    "timezone": "Europe/London",
    "description": "this is for ID $656"
   }]
}
```

## Payload

:::info
Use this endpoint with your schedule Id as a request parameter to set the payload for your function when called by your specified schedule. 
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/scheduled/[scheduledId]/payload' method='PUT'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Body

| Key           | Example                        | Requirements                                 |
| ------------- | ------------------------------ | -------------------------------------        |

#### Example Request

```js
{
	"date: 09-20-2024",
	"inventory": 65
}
```

#### Example Response

```js title="Status: 204 No Body"
{
	No body
}
```

## Try

Use this endpoint to test your schedule.

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/scheduled/[scheduledId]/try' method='POST'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Body

| Key           | Example                        | Requirements                                 |
| ------------- | ------------------------------ | -------------------------------------        |

#### Example Request

```js
{
	Empty Body
}
```

#### Example Response

```js title="Status: 201 Created"
{
	"id": "65ccd7c8ba61bd944165fc1a"
}
```



## Delete

:::info
Use this endpoint to delete a schedule from your GreenCloud function.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/scheduled/[scheduledId]' method='DELETE'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value         | Example                   | Required |
| ------------- | ------------------------  | -------- |
| _scheduled id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 204 No Content"
No Body
```

