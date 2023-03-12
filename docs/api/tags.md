---
sidebar_position: 7
---

# 🏷️ Tags

We have introduced the idea of tags in GreenCloud. You may be familiar with this concept in other similar services. You simply 'tag' your function with meta data about the function. Once tagged you will be able to the order your functions by tags. Please note, Tags are specific to your account.

Example usages we see for this are -:

1. You may have many functions in your Green Cloud account. Imagine searching 100 functions to find one it could be tedious. Searching using a tag that reduces that 100 functions to 3 for example?
2. Green Cloud will in future consist of more services ( Storage and Database ) - as such we will allow tags on all resources. Being able to use the same tag name across different services will effectively organise your GreenCloud services.

## Create Tag

:::info
Call this end point to create a tag in GreenCloud. You pass the name and color in the body of the call. The response from the call is an HTTP 201 response along with a JSON object containig an ID attribute of the newly created tag.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/tag' method='POST'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Body

| Key     | Example | Requirements          |
| ------- | ------- | --------------------- |
| `name`  | green   | `required` `ascii`    |
| `color` | #00ff80 | `optional` `hexcolor` |

#### Example Request

```js
{
	"name": "green",
	"color": "#00ff80"
}

```

#### Example Response

```js title="Status: 201 Created"
{
	"id": "63f47d1c5bd6eeef8211c83e"
}
```

## List Tags

:::info
Call this endpoint to get a list of tags in this GreenCloud account. The succesful response is an HTTP 200 response with the body containing a JSON array of objects representing the Tags.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/tag/list' method='GET'/>

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
        id: "63ed33eac79248a54ee04831",
        name: "greencloud",
        color: "#00ff80",
    },
    {
        id: "63fe131f02975e4956238b39",
        name: "greencloud2",
        color: "#00ff80",
    },
    {
        id: "6404b34817835b5291ae367a",
        name: "red",
        color: "#00ff80",
    },
]
```

## Edit A Tag

:::info
Use this end point to edit a tag. Pass the id of the tag on the URL along with the updated JSON object for the tag. Succesful update results in a 204 response from the server.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/tag/[tagId]' method='PATCH'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Parameters

| Value    | Example                  | Required |
| -------- | ------------------------ | -------- |
| _tag id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Request Body

| Key     | Example | Requirements          |
| ------- | ------- | --------------------- |
| `name`  | green   | `optional` `ascii`    |
| `color` | #00ff80 | `optional` `hexcolor` |

#### Example Request

```js
{
	"name": "green",
	"color": "#00ff80"
}
```

#### Example Response

```js title="Status: 204 No Content"
Empty body
```

## Delete Tag

:::info
Call this endpoint to delete the tag from the GreenCloud account. Pass the id of the tag as a URL parameter and if successful an HTTP 204 response is returned.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/tag/[tagId]' method='DELETE'/>

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

#### Example Response

```js title="Status: 204 No Content"
Empty body
```
