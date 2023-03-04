---
sidebar_position: 1
---

# 🧑 Account

## Get

:::info
This endpoint allows authenticated users to get their account information.
:::

#### Endpoint

| Method | Endpoint                                           | Private |
| ------ | -------------------------------------------------- | ------- |
| `GET`  | [`/api/user`](https://api.greencloud.dev/api/user) | true    |

#### Request Headers

| Key             | Value              | Required |
| --------------- | ------------------ | -------- |
| `Authorization` | Valid Access Token | true     |

#### Request Body

```
Empty body
```

#### Example Response:

```js title="Status: 200 OK"
{
	"id": "63ed1b0f405d8a45bdc42c19",
	"email": "richard.hill@greencloudcomputing.io",
	"name": "Richard",
	"surname": "Hill",
	"address": {
		"company": "Green cloud",
		"street": "123 Hill St.",
		"district": "North district",
		"city": "England",
		"postCode": "YO31 8SB",
		"country": "United Kingdom"
	},
	"twofa": false,
	"apiKey": "92c85d5c-daea-447d-9eac-1d6d64d8b340",
	"bundle": {
		"name": "Developer",
		"quota": 100000
	}
}
```

## Password

:::info
This endpoint allows authenticated users to change their password. It also requires a twofa field if two-factor authentication is enabled.
:::

#### Endpoint

| Method | Endpoint                                                             | Private |
| ------ | -------------------------------------------------------------------- | ------- |
| `PUT`  | [`/api/user/password`](https://api.greencloud.dev/api/user/password) | true    |

#### Request Headers

| Key             | Value              | Required |
| --------------- | ------------------ | -------- |
| `Authorization` | Valid Access Token | true     |
| `Content-Type`  | `application/json` | true     |

#### Request Body

| Key        | Example   | Requirements                              |
| ---------- | --------- | ----------------------------------------- |
| `password` | Hello123! | `required` `min=8` `containsany=!@#$%&\*` |
| `twofa`    | 123456    | required when 2FA is enabled              |

#### Example Request

```js
{
	"password":"Hello123!",
	"twofa":"123456" // optional, required only when active
}
```

#### Example Response

```js title="Status: 204 No Content"
Empty body
```

## Reset Password

:::info
This endpoint allows users to request a password reset code to be sent to their registered email address.
:::

#### Endpoint

| Method | Endpoint                                                                       | Private |
| ------ | ------------------------------------------------------------------------------ | ------- |
| `POST` | [`/api/user/resetPassword`](https://api.greencloud.dev/api/user/resetPassword) | false   |

| Key            | Value              | Required |
| -------------- | ------------------ | -------- |
| `Content-Type` | `application/json` | true     |

#### Request Body

| Key     | Example                                                | Requirements |
| ------- | ------------------------------------------------------ | ------------ |
| `email` | <a class="no-link">john.doe@greencloudcomputing.io</a> | `required`   |

#### Example Request

```js
{
	"email": "john.doe@greencloudcomputing.io"
}
```

#### Example Response

```js title="Status: 204 No Content"
Empty body
```

## Set Password

:::info
This endpoint allows users to set a new password with the password reset code sent to their registered email address. It also requires a twofa field if two-factor authentication is enabled.
:::

#### Endpoint

| Method | Endpoint                                                                       | Private |
| ------ | ------------------------------------------------------------------------------ | ------- |
| `GET`  | [`/api/user/resetPassword`](https://api.greencloud.dev/api/user/resetPassword) | false   |

#### Request Headers

| Key            | Value              | Required |
| -------------- | ------------------ | -------- |
| `Content-Type` | `application/json` | true     |

#### Request Body

| Key        | Example                          | Requirements                              |
| ---------- | -------------------------------- | ----------------------------------------- |
| `password` | Hello123!                        | `required` `min=8` `containsany=!@#$%&\*` |
| `code`     | b352935253674aeeb43d4ed4362745ab | `required`                                |
| `twofa`    | 123456                           | required when 2FA is enabled              |

#### Example Request

```js
{
	"password": "Hello123!",
	"code": "b352935253674aeeb43d4ed4362745ab",
	"twofa": "123456"  // optional, required only when active
}
```

#### Example Response

```js title="Status: 204 No Content"
Empty body
```
