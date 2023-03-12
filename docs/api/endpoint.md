---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🔗️ Endpoint

Once you have created a GreenCloud function you can add an endpoint to it so that it may be called across the internet. This will be a publicly web url that has some rules regarding its use and operation.

Each time you call the endpoint, we will store the results from each call. The results will initially be publicly available for 5 minutes. After this time period your results are still accessible but will require an authenticated call to access them.

## Create

:::info
The Create endpoint is used to create a new public endpoint for a given function. It returns a 201 response with an endpoint ID.
:::

:::tip
GreenCloud understands that a publicly available URL will concern some of our users. To this end we have provided the ability to be able to delete publicly URL. This means that it is perfectly acceptable to create a URL, call it - get the results -and then delete it.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/lambda/[lambdaId]/endpoint' method='POST'/>

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
	"id": "536a74fefb8847c19d21020f43b12f67", // endpoint id
}
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

## Get

:::info

The GET endpoint is used to retrieve the response of a previously executed function by its run ID. It returns a status 200 with an HTTP response returned by the function.

:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/gc/[runId]/result' method='GET'/>

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

## Delete

:::info
The Delete endpoint is used to delete the public endpoint for a given function.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/lambda/[lambdaId]/endpoint' method='DELETE'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value       | Example                          | Required |
| ----------- | -------------------------------- | -------- |
| _lambda id_ | f43a136defaa41f7b39045f514a2edb6 | true     |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 204 No Content"
Empty body
```
