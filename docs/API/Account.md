---
sidebar_position: 1
---

# 🧑 Account

## Get

#### End Point: [https://api.greencloud.dev/api/user/](https://api.greencloud.dev/api/user/register)

```js title="HTTP VERB"
GET 
```

```js title="Content Header"
Authorization , Valid Access Token
```

```js title="Body"
N/A
```

#### Response:

HTTP 200

```js title="API Response"
{
	"id": "",
	"email": "richardmatthewhill@hotmail.com",
	"name": "Richard",
	"surname": "Hill",
	"nationality": "British",
	"twofa": false,
	"apiKey": “xxxx”
}
```


## Password

#### End Point: [https://api.greencloud.dev/api/user/password](https://api.greencloud.dev/api/user/password)

```js title="HTTP VERB"
PUT 
```

```js title="Content Header"
Content-Type , application/json

Authorization , Valid Access Token
```

```js title="Body"
{
	"password":"xxxxxxxxxxxxxxx",
	"twofa":"IF ENABLED"
}
```

#### Response:

HTTP 200

## Reset Password

#### End Point: [https://api.greencloud.dev/api/user/resetPassword](https://api.greencloud.dev/api/user/resetPassword)

```js title="HTTP VERB"
POST 
```

```js title="Content Header"
Content-Type , application/json

Authorization , Valid Access Token
```

```js title="Body"
{
	"email": "nadim.zahawi@corruptpoliticians.com"
}
```

#### Response:

HTTP 200

## Set Password

#### End Point: [https://api.greencloud.dev/api/user/resetPassword](https://api.greencloud.dev/api/user/resetPassword)

```js title="HTTP VERB"
POST 
```

```js title="Content Header"
Content-Type , application/json
```

```js title="Body"
{
	"password": "d0ntv0t3t0r1y",
	"code": "xxxxxxxxx",
	"twofa": "123456"
}
```

#### Response:

HTTP 200

