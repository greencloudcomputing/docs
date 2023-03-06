---
sidebar_position: 4
---

# 🧾 Public Endpoint

The Public Endpoint in our API is a powerful tool that allows users to trigger and run their functions by making a request to a specific URL with optional parameters. This endpoint can be accessed by anyone who has the URL.

## Use

:::info
The Use endpoint is a flexible public endpoint that can run a predefined function and accepts optional query parameters and an optional JSON body. By passing data through these parameters, users can customize the behavior of the function being called and provide additional information to the API.
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
	"id": "63f47d24dab5eb85451f3b61",
}
```

## Create

:::info
The Create endpoint is used to create a new public endpoint for a given function.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/api/lambda/[lambdaId]/endpoint' method='POST'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value       | Example                  | Required |
| ----------- | ------------------------ | -------- |
| _lambda id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 201 Created"
{
	"id": "63f47d24dab5eb85451f3b61",
}
```

## Get

:::caution

### TODO

:::

## Delete

:::info
The Delete endpoint is used to delete the public endpoint for a given function.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/api/lambda/[endpointId]/endpoint' method='DELETE'/>

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
