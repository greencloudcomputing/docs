---
sidebar_position: 2
---

# 🔒️ Authentication

Green Cloud has built in Authentication from the ground up. From the early days we realised that security is a big part of a cloud system. As such we use industry strength encryption and STRONGLY encourage our users to use 2FA which dramatically reduces the chances of an attack on an account.

The first thing you will need to do is to Register an account.

## Register

:::info
Use this end point to register an account with Green Cloud. The succesful response is an HTTP 201 response. An email will be sent to the email address used, enabling them to complete the registration of their account.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/auth/register' method='POST'/>

#### Request Headers

| Key            | Value              | Required |
| -------------- | ------------------ | -------- |
| `Content-Type` | `application/json` | true     |

#### Request Body

| Key        | Example        | Requirements                              |
| ---------- | -------------- | ----------------------------------------- |
| `name`     | Richard        | `required` `min=8` `containsany=!@#$%&\*` |
| `surname`  | Hill           | `required` `alpha` `max=20`               |
| `email`    | <sampleEmail/> | `required`                                |
| `password` | Hello123!      | `required` `min=8` `containsany=!@#$%&*`  |

#### Example Request

```js
{
	"name": "Richard",
	"surname": "Hill",
	"email": "richard.hill@greencloudcomputing.io",
	"password":"Hello123!",
}
```

#### Example Response

```js title="Status: 201 Created"
Empty body
```

## Activate

:::info
After successful registration using the Register endpoint, the user will receive an email containing an activation link to activate their account. The activation link will include a unique system-generated code that needs to be passed to the Account Activation endpoint.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/auth/activate' method='POST'/>

#### Request Headers

| Key            | Value              | Required |
| -------------- | ------------------ | -------- |
| `Content-Type` | `application/json` | true     |

#### Request Body

| Key    | Example                          | Requirements |
| ------ | -------------------------------- | ------------ |
| `code` | ea6bdeeb005a4a80a43c444b8828ca4a | `required`   |

#### Example Request

```js
{
	"code": "ea6bdeeb005a4a80a43c444b8828ca4a"
}
```

#### Example Response

```js title="Status: 200 OK"
Empty body
```

## Login

:::info
After successfully registering an account, users can now log in to their account. Upon successful login, the endpoint will return an access and refresh token.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/auth/login' method='POST'/>

#### Request Headers

| Key            | Value              | Required |
| -------------- | ------------------ | -------- |
| `Content-Type` | `application/json` | true     |

#### Request Body

| Key        | Example        | Requirements                             |
| ---------- | -------------- | ---------------------------------------- |
| `email`    | <sampleEmail/> | `required`                               |
| `password` | Hello123!      | `required` `min=8` `containsany=!@#$%&*` |
| `twofa`    | 123456         | required when 2FA is enabled             |

#### Example Request

```js
{
	"email": "richard.hill@greencloudcomputing.io",
	"password":"Hello123!",
	"twofa":"123456"
}
```

#### Example Response

```js title="Status: 200 OK"
{
	"expiresIn": 3590,
	"accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc5MjU4NjQsImlhdCI6MTY3NzkyMjI2NCwiaXNzIjoiZ3JlZW5jbG91bmQuZGV2IiwianRpIjoiZDk5NTYyODctMzA3Ni00NjgwLWExMGMtZjRjYzhjMmJmYzJhIiwidXNlcklkIjoiNjNlZDFiNGY0MDVkOGE0NGJkYzQyYzE5In0.hXJWTDgjADXCgceXqIdiBsGxik_EAXj1u2KBdvdlk755OuCq_f7TS5N4Eaf3Qym0QEfxFaZA-mhGn--BZJoNOZ1z2kAYihUrnk4kyNhfDxfqLPJ_ZUoyrqFSZfdrCrXYojxTkk_0q47MCgQgbDWXIb8V8M3AJpyOwBA4Ju24WdleOoPBKWA-1TlxcZrCbGQKtHS8pmAeoFX-iwHbd2vOucGOto7_6A9_FUtmAR5JHP9zRUUDLgGU9R1To5UHkqIJrHVh_kd2KULw0wLLdPr2QSklIQcrLPBQdlKygq34VP99rmL5_bYSBFVnZ54YZAsfLoGuHGV0hv59GwH0vRLaCA",
	"refreshToken": "40d6b6a52256ee2b6f52645bbf5d90d0a4011d341b4fda69a1bed448f3fddfa4c0f019fc4e58ed39d6b377b909df95310bc43a2d07654327eca9ae2d96f69b72319cc825601bfc40c1a19600bce5a719086e83b69f89caca131f8d9d969c866b661ddc2ee687a43b3acd9e8bfe310aac7c78401bc504b8fda9756563d9e5f11c2ca2161119084b2d0eb62f50fbab2c928800d2c8027f64f45b1a1895165e21f67ce95fd262568c304836d29ae06f035bf131b161ad05612fed7132ceee528e9d9f5543b75cba410a22f867633347b13e596254bdf76cddd4bbb8fa83ecf1cd15dfd972fee088844ffaada3c2053b72265dea4da0b7cc24ea0a552114f73d9a5b"
}
```

## Refresh Token

:::info
After successful login, the user receives an Access Token and a Refresh Token. The Access Token is valid for 90 days, after which the user needs to refresh it using the Refresh Token.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/auth/refresh' method='POST'/>

#### Request Headers

| Key            | Value              | Required |
| -------------- | ------------------ | -------- |
| `Content-Type` | `application/json` | true     |

#### Request Body

| Key            | Value                 | Requirements |
| -------------- | --------------------- | ------------ |
| `refreshToken` | _valid refresh token_ | `required`   |

#### Example Request

```js
{
	"refreshToken": "40d6b6a52256ee2b6f52645bbf5d90d0a4011d341b4fda69a1bed448f3fddfa4c0f019fc4e58ed39d6b377b909df95310bc43a2d07654327eca9ae2d96f69b72319cc825601bfc40c1a19600bce5a719086e83b69f89caca131f8d9d969c866b661ddc2ee687a43b3acd9e8bfe310aac7c78401bc504b8fda9756563d9e5f11c2ca2161119084b2d0eb62f50fbab2c928800d2c8027f64f45b1a1895165e21f67ce95fd262568c304836d29ae06f035bf131b161ad05612fed7132ceee528e9d9f5543b75cba410a22f867633347b13e596254bdf76cddd4bbb8fa83ecf1cd15dfd972fee088844ffaada3c2053b72265dea4da0b7cc24ea0a552114f73d9a5b",
}
```

#### Example Response

```js title="Status: 200 OK"
{
	"expiresIn": 3590,
	"accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc5Mzc5OTQsImlhdCI6MTY3NzkzNDM5NCwiaXNzIjoiZ3JlZW5jbG91bmQuZGV2IiwianRpIjoiYjM3YzI5MDktMjI0ZS00Yjk1LTkzZDktNTZhZjc2ZmIxM2JiIiwidXNlcklkIjoiNjNlZDFiNGY0MDVkOGE0NGJkYzQyYzE5In0.TUO7BukLKHKc8KfeQFU_I7K1vjihCEkVljRGQt6EwRj8i6PC3MjwsLl65xopxEj7GfDhUkdzF_J80TSKm9gmqGBl9DGfVcT1Iy9IjbKrd2SXkZ6eiztxOjWWtDHEfDHA4svkRr49fpWJrzfu4mL8Mpvr5eKn_AJ1wZ-z8kQRBy06im3NWxCAKZW4vXsWdilxqcj_XLT68itABMHwt-nI6Grj0X8fpGDGfIMu2khEjpc6G9qv1eG7vWXtCPowO780YigU8soOTAzAsc1hz01TzUFPme_zObA_6wL_lKHg0peeDK6mW1qessUWrozGnpRupv7Y4BRjX1Df21rVKS9n8Q",
	"refreshToken": "b5530e625c440cffc473c04a7a960bb1e36ab29563ec8b7c9fd2efddf41c793b9ec2cb16056063adcf5edd7ccefafcf473c93b8abf44300e02f61cbf710f6d839830c280b63bf7c59bc7e0d7cb286293953f689becd1e3bf996140bf1482da2f76d52f2a3deebac5e1c3595706e934619e7b8b04f491c4838c7b96e128593874e12d4c283c0a6d717edfa3483be1277c6dc8cb0eace7c04fb45f5eb35b1800d8c948a6955516051e12ca49943ae7d61d6d0bf6a2a1a61da0f45e19b084408b0f471cc668aa406a46db74a6c54383e3696bc7cf14be5fbfc5e9caf1d7054a94a1821a1317e1b80258eba94fb1b53806ee0f37f2c6ddfc8e24f626665d18275a5d"
}
```

## API KEY

:::info
To use the Command Line Interface (CLI), users need to obtain their API key. The API key is required when logging into the CLI tool for the first time. It is this end point that allows that. Users can also obtain their API key from their GreenCloud web site [dashboard](https://app.greencloudcomputing.io/dashboard).
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/auth/apiKey' method='POST'/>

#### Request Headers

| Key            | Value              | Required |
| -------------- | ------------------ | -------- |
| `Content-Type` | `application/json` | true     |

#### Request Body

| Key   | Example                              | Requirements |
| ----- | ------------------------------------ | ------------ |
| `key` | 92c85d5c-dcea-447d-9eac-0d6d64d8b340 | `required`   |

#### Example Request

```js
{
	"key": "92c85d5c-dcea-447d-9eac-0d6d64d8b340"
}
```

#### Example Response

```js
{
"expiresIn": 3590,
"accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc5Mzg4MTMsImlhdCI6MTY3NzkzNTIxMywiaXNzIjoiZ3JlZW5jbG91bmQuZGV2IiwianRpIjoiYjUyOTMyOWUtZmJiOS00OTU5LTg1YTMtNTMxMTE1ZTY4MTJkIiwidXNlcklkIjoiNjNlZDFiNGY0MDVkOGE0NGJkYzQyYzE5In0.f6sYvMh5AKd0G7UnSojkE9G6PVTlFndtaGZ30EXhGoXgYf4ysZleX2Dx6YxFFVhKDVabg2QjmnprRgJbTxSqffRi0es2BkfnuX5T-iQqI5iHqF3D0x0EfK5bn0NxrkRVg6CddrOHfz8E5kvtDmXFNCgrLGD1jw_USTBzxry6U3mZNQ7CRMKPTozOQQU1q5DZZgEZ_mMOERcuTj_LA5XOPtrKWOFhs407l8isfrKY_CjVg2XHmfH3tXzjDtlyrAHgiJC09T_QgHlTHezv8RWkp0KFN5BARDWP56asthT-9_FGZBPA-N1QxXF6GWu86ZPJZfC2KS0Z2tolCFvQE8ySzg"
}
```

## 2FA - ( Two Factor Authentication )

:::info
GreenCloud take security VERY seriously. To ensure the highest level of security, we make use of Two Factor Authentication (2FA) and strongly recommend that all users enable it on their accounts to keep their accounts from being compromised by malicious actors.

Users who have enabled 2FA will need to pass the 6-digit code from their 2FA app to this endpoint. If you are not familiar with 2FA, please refer to this resource to understand it: [What is 2FA](https://authy.com/what-is-2fa/)
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/auth/2FA' method='POST'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Example Request

```js
Empty body
```

#### Example Response

```js title="Status: 200 OK"
{
	"seed": "PDMIY2255L4EKRUI5UWNSYHVZ22X5OM5"
}
```

## Active 2FA

:::info
When the user starts their account they will not have activated 2FA support. We call this endpoint to enable 2FA support. To use it we pass in a test code to sync with from an auth app.
By default, when a user starts their account, 2FA support will not be enabled. To enable 2FA support, the user can call this endpoint. At this step, we verify the code to sync with their 2FA app.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/auth/verify2FA' method='POST'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Body

| Key    | Example | Requirements |
| ------ | ------- | ------------ |
| `code` | 069303  | `required`   |

#### Example Request

```js
{
	"code": "069303"
}
```

#### Example Response

```js title="Status: 200 OK"
Empty body
```

## Disable 2FA

:::info
To disable 2FA support on your GreenCloud account, you can call this endpoint. You will be required to provide the currently active 2FA value from your authenticator app. To re-enable 2FA support - which we strongly recommend - simply call the `api/auth/verify2FA` endpoint.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/auth/2FA' method='DELETE'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |
| `Content-Type`  | `application/json`   | true     |

#### Request Body

| Key    | Example | Requirements |
| ------ | ------- | ------------ |
| `code` | 069303  | `required`   |

#### Example Request

```js
{
	"code": "069303"
}
```

#### Example Response

```js title="Status: 204 No Content"
Empty body
```

## Node

:::info
To authorize a node within the GreenCloud ecosystem, you can use this endpoint.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/auth/node' method='POST'/>

#### Request Headers

| Key            | Value              | Required |
| -------------- | ------------------ | -------- |
| `Content-Type` | `application/json` | true     |

#### Request Body

| Key    | Example   | Requirements |
| ------ | --------- | ------------ |
| `code` | _node id_ | `required`   |

#### Example Request

```js
{
	"id": "1a061cfd-df01-4b02-a067-5122c5941e15"
}
```

#### Example Response

```js title="Status: 200 OK"
Empty body
```
