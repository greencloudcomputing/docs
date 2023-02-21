---
sidebar_position: 4
---

# 🧾 Tags

We have introduced the idea of tags in GreenCloud. You may be familiar with this concept in other similar services. You simply 'tag' your function with meta data about the function. Once tagged you will be able to the order your functions by tags. Please note, Tags are specific to your account.

Example usages we see for this are -:

1. You may have many functions in your Green Cloud account. Imagine searching 100 functions to find one it could be tedious. Searching using a tag that reduces that 100 functions to 3 for example?
2. Green Cloud will in future consist of more services ( Storage and Database ) - as such we will allow tags on all resources. Being able to use the same tag name across different services will effectively organise your GreenCloud services.

## Create Tag

Call this end point to create a tag in GreenCloud. You pass the name and color in the body of the call. The response from the call is an HTTP 201 response along with a JSON object containig an ID attribute of the newly created tag.

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

HTTP 201

```js title="API Response"
{
	"id": "63f47d1c5bd6eeef8211c83e"
}
```

## List Tags

Call this endpoint to get a list of tags in this GreenCloud account. The succesful response is an HTTP 200 response with the body containing a JSON array of objects representing the Tags.

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
[
	{
		"id": "63f47d1c5bd6eeef8211c83e",
		"name": "greencloud",
		"color": "#00ff80"
	}
]
```

## Edit A Tag

Use this end point to edit a tag. Pass the id of the tag on the URL along with the updated JSON object for the tag. Succesful update results in a 204 response from the server. 

#### End Point: [https://api.greencloud.dev/api/tag/id_of_the_tag](https://api.greencloud.dev/api/tag/id_of_the_tag)

```js title="HTTP VERB"
PATCH 
```

```js title="Content Header"
Authorization , Valid-Access-Token
```

```js title="Body"
{
	"name": "greencloud2",
	"color": "#4287f5"
}

```

#### Response:

HTTP 204

```js title="API Response"
N/A
```

## Delete Tag

Call this end point to delete the tag from the GreenCloud account. Pass the id of the tag on the URL and if successful an HTTP 204 response is returned.

#### End Point: [https://api.greencloud.dev/api/tag/id_of_the_tag](https://api.greencloud.dev/api/tag/id_of_the_tag)

```js title="HTTP VERB"
DELETE 
```

```js title="Content Header"
Authorization , Valid-Access-Token
```

```js title="Body"
N/A
```

#### Response:

HTTP 204

```js title="API Response"
N/A
```