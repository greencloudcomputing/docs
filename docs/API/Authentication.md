---
sidebar_position: 2
---

# 🔒️ Authentication

Green Cloud has built in Authentication from the ground up. From the early days we realised that security is a big part of a cloud system. As such we use industry strength encryption and STRONGLY encourage our users to use 2FA which dramatically reduces the chances of an attack on an account.

The first thing you will need to do is to Register an account.

## Register

Use this end point to register an account with Green Cloud. The succesful response is an HTTP 201 response. An email will be sent to the email address used, enabling them to complete the registration of their account.

#### End Point: [https://api.greencloud.dev/api/auth/register](https://api.greencloud.dev/api/auth/register)

```js title="HTTP VERB"
POST 
```

```js title="Content Header"
Content-Type : application/json
```

```js title="Body"
{
	"name": "Boris",
	"surname": "Johnson",
	"email": "your.email@here.com",
	"password":"password-here",
	"nationality": "Great Britain"
}
```

#### Response:

HTTP 201

![201 response upon registering an account](../img/registerresponse.png "API repsonse after registration")

## Activate

Once a user has posted valid registration information to the Regsiter end point they will receive an email. In the email is a link that the user will click to activate their account. The email link will contain a code that is passed to this end point to 'activate' their account. The code is system generated.

#### End Point: [https://api.greencloud.dev/api/auth/activate](https://api.greencloud.dev/api/auth/activate)

```js title="HTTP VERB"
POST 
```

```js title="Content Header"
Content-Type : application/json
```

```js title="Body"
{
	"code": "-system-generated-"
}
```

#### Response:

HTTP 200

## Login

Used once a user has finished the Registration process of their account. They can now Login and upon success will receive an access and refresh token.

End Point: [https://api.greencloud.dev/api/auth/login](https://api.greencloud.dev/api/auth/login)

```js title="HTTP VERB"
POST
```

```js title="Content Header"
Content-Type : application/json
```

```js title="Body"
{
	"email": "boris.johnson@parliament.co.uk",
	"password": "brexitisntdone"
}
```

#### Response

HTTP 200

![successful login with token and refresh token](../img/loginsuccess.png "API repsonse after successful login")

## Refresh Token

Once a user has been given an Access Token and a Refresh Token from the Login end point, you can use the Refresh Token to gain a new Access Token. An Access Tokens is valid for 90 days.

End Point: [https://api.greencloud.dev/api/auth/refresh](https://api.greencloud.dev/api/auth/refresh)

```js title="HTTP VERB"
POST
```

```js title="Content Header"
Content-Type : application/json
```

```js title="Body"
{
	"refreshToken": "PUT YOUR REFRESH TOKEN HERE"
}
```

#### Response

HTTP 200

## API KEY

If you want to use the Command Line Interface ( CLI ) then you are going to need to get a copy of your API key. When you log into the CLI tool you will be prompted for the API key on the first time that you login. It is this end point that allows you to get it. You can now also get this from your GreenCloud web site dashboard. 

End Point: [https://api.greencloud.dev/api/auth/apiKey](https://api.greencloud.dev/api/auth/apiKey)

```js title="HTTP VERB"
POST
```

```js title="Content Header"
Content-Type : application/json
```

```js title="Body"
{
	"key": ""
}
```

#### Response

HTTP 200

```js title="Body"
{
	"expiresIn": 3590,
	"accessToken": ""
}
```

## 2FA - ( Two Factor Authentication )

GreenCloud take security VERY seriously. As such we make use of Two Factor Authentication. We strongly recommend that you enable 2FA on your GreenCloud account to ensure that you account does not become compromised by some malicious actor.

If the account has 2FA enabled then you will need to pass to this end point the code from the 3rd party authentication app you use to perform 2FA. IF you are not familiar with 2FA this is a good resource to understand it -: [What is 2FA](https://authy.com/what-is-2fa/)

End Point: [https://api.greencloud.dev/api/auth/2FA](https://api.greencloud.dev/api/auth/2FA)

```js title="HTTP VERB"
POST
```

```js title="Content Header"
Authorization : Token

```

```js title="Body"
{
	"key": ""
}
```

#### Response

HTTP 200

```js title="Body"
{

}
```

## Active 2FA

When the user starts their account they will not have activated 2FA support. We call this endpoint to enable 2FA support. To use it we pass in a test code to sync with from an auth app.

End Point: [https://api.greencloud.dev/api/auth/verify2FA](https://api.greencloud.dev/api/auth/verify2FA)

```js title="HTTP VERB"
POST
```

```js title="Content Header"
Authorization : Token

Content-Type : application/json
```

```js title="Body"
{
	"code": "069303"
}
```

#### Response

HTTP 200

## Disable 2FA

Call this end point to disable 2FA support. You will need to pass the currently active 2FA value in your authenticator app. To re-enable 2FA - which we strongly recommend, simply post to the enable end point.

End Point: [https://api.greencloud.dev/api/auth/2FA](https://api.greencloud.dev/api/auth/2FA)

```js title="HTTP VERB"
DELETE
```

```js title="Content Header"
Authorization : Token

Content-Type : application/json
```

```js title="Body"
{
	"code": "12345"
}
```

#### Response

HTTP 200

## Node

We use this end point to authorise a node in the GreenCloud eco system.

End Point: [https://api.greencloud.dev/api/auth/node/](https://api.greencloud.dev/api/auth/node/)

```js title="HTTP VERB"
POST
```

```js title="Content Header"
Content-Type : application/json
```

```js title="Body"
{
	"id": "OF_THE_NODE"
}
```

#### Response

HTTP 200