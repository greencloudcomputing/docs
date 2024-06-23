---
sidebar_position: 3
---

# 👷‍♂️ Builder

## Create

:::info
Use this endpoint to send your function to GreenCloud so it can build and deploy it for you. You will recieve a build ID which you can use to check the status of your build.
:::

::::tip tip
Make sure to choose your architecture type as a parameter when sending your function for it to be built.

When sending your function to be build via the API you must zip the contents of the function folder first. 
::::

::::caution Caution
You must zip the contents of the function folder rather than the function folder itself.

::::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/build/[functionId]' method='POST'/>

#### Request Headers

| Key             | Value                           | Required |
| --------------- | --------------------------------| -------- |
| `Authorization` | _Valid Access Token_            | true     |
| `Content-Type`  | `application/octet-stream`      | true     |

#### Request Parameters

| Key             | Example                         | Requirements                              |
| --------------- | --------------------------------| ------------------------------------------|
| `arch`          | amd64                           | `required` `oneof amd64 arm64`            | 

#### Request Body

| Key           | Example                        | Requirements                          |
| ------------- | ------------------------------ | ------------------------------------- |
| `file`        | MyFunction.zip                 | `required` `.zip`                     |

#### Example Request

<endpoint href='https://api.greencloud.dev/v1/build/66787c5e84809f8a29ddc2f7?arch=amd64' method='POST' />

#### Example Response

```js title="Status: 201 Created"
{
    "id": "66787d8f694aa083bbdf9aa9"
}
```

## Get

:::info
If you need to retrieve details about your build, use this endpoint by passing the build ID as a URL parameter. The endpoint will provide you with a list of information related to build of the function.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/build/[buildId]' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value         | Example                  | Required |
| ------------- | ------------------------ | -------- |
| _build id_    | 66787d8f694aa083bbdf9aa9 | true     |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 200 OK"
{
  "functionId": "66787d8f694aa083bbdf9aa9",
  "status": "SUCCESS",
  "arch": [ "amd64"],
  "timeline": [{ "status": "PENDING", "time": "2023-07-24T21:53:08Z" }],
  "log": ["✅ Unzipping successfuly → fx.zip"]
}

```

## List

:::info
Use this endpoint to get a list of functions in your GreenCloud account. You can set optional paramaters to choose which page of results to view, how many results to view and which specific function you want to inspect.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/build/list' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |


#### Query Parameters

| Key             | Example                    | Requirements                              |
| --------------- | ---------------------------| ------------------------------------------|
| `page`          | 2                          | `int` `optional` `min=1` `default=1`      |
| `limit`         | 3                          | `int` `optional` `min=1` `max` `default=1`| 
| `functionId`    | "66787d8f694aa083bbdf9aa9" | `string` `optional` `mongodb`             |


#### Example Request

<endpoint href='https://api.greencloud.dev/v1/build/list?page=2&limit=3' method='GET'/>

```js
Empty body
```

#### Example Response

```js title="Status: 200 OK"
{
    "pageCount": 2,
    "pageSize": 3,
    "totalCount": 22,
    "results": [
        {
            "id": "666db024694aa083bbdf9aa5",
            "functionId": "666da32e84809f8a29ddc2e0",
            "status": "SUCCESS",
            "createdAt": "2024-06-15T15:15:48Z"
        },
        {
            "id": "666daec1694aa083bbdf9aa4",
            "functionId": "666dae5984809f8a29ddc2e1",
            "status": "SUCCESS",
            "createdAt": "2024-06-15T15:09:53Z"
        },
        {
            "id": "666d6cb4694aa083bbdf9aa0",
            "functionId": "666c271e84809f8a29ddc2d4",
            "status": "FAILED",
            "createdAt": "2024-06-15T10:28:04Z"
        }
    ]
}
```