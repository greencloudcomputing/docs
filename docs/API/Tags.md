---
sidebar_position: 4
---

# 🧾 Tags

We have introduced the idea of tags in GreenCloud. You may be familiar with this concept in other similar services. You simply 'tag' your function with meta data about the function. Once tagged you will be able to the order your functions by tags. Please note, Tags are specific to your account.

Example usages we see for this are -:

1. You may have many functions in your Green Cloud account. Imagine searching 100 functions to find one it could be tedious. Searching using a tag that reduces that 100 functions to 3 for example?
2. Green Cloud will in future consist of more services ( Storage and Database ) - as such we will allow tags on all resources. Being able to use the same tag name across different services will effectively organise your GreenCloud services.

## Create Tag

#### End Point: [https://api.greencloud.dev/api/tag/](https://api.greencloud.dev/api/tag/)

```js title="HTTP VERB"
POST 
```

```js title="Content Header"
Authorization , Valid-Access-Token
```

```js title="Body"
{
	"name": "greencloud",
	"color": "#00ff80"
}

```

#### Response:

HTTP 200

```js title="API Response"
```

## List Tags

#### End Point: [https://api.greencloud.dev/api/tag/](https://api.greencloud.dev/api/tag/)

```js title="HTTP VERB"
GET 
```

```js title="Content Header"
Authorization , Valid-Access-Token
```

```js title="Body"
```

#### Response:

HTTP 200

```js title="API Response"
```

## List Tags

#### End Point: [https://api.greencloud.dev/api/tag/](https://api.greencloud.dev/api/tag/)

```js title="HTTP VERB"
DELETE 
```

```js title="Content Header"
Authorization , Valid-Access-Token
```

```js title="Body"
{
    id: ID_OF_THE_TAG
}
```

#### Response:

HTTP 200

```js title="API Response"
```