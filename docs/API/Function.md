---
sidebar_position: 5
---

# 🌱 Function

In GreenCloud we operate a system that runs small functions repeatedly. These functions are based around containers that are delivered and executed on remote devices.

A Function can be created using the CLI and is generally not something that is viewed by the end user. The main purpose of the Function is to act as a logical construct to represent the software/code that the software developer has written.

When a software developer asks to initiate a function - they will create a task which will also have a related Function to execute.

A Lambda / Function consists of -:

1. Name - a non unique character string used to represent the function.
2. Language - the language that the lambda is written in.

    At the time of writing Green Cloud supports -:

    GoLang, Node JS, Python, C#, Ruby

    We are looking to add Rust, C / C++ and WASM in the near future.

## Create

Use this end point to create a function to use in the Green Cloud system. The response from a succesful call is an HTTP 201 in which the body of the response contains the ID of the newly created function.

#### End Point: [https://api.greencloud.dev/api/lambda/](https://api.greencloud.dev/api/lambda/)

```js title="HTTP VERB"
POST
```

```js title="Content Header"
Authorization, Valid - Access - Token
```

```js title="Body"
{
	"name": "name_of_function",
	"description":"A description of the function",
	"tag": ["{array,of,tag,values}"],
	"scmUrl": "https://greencloudcomputing.io",
	"lang": "language of function",
	"type": "type of function"
}

```

#### Response:

HTTP 201

```js title="API Response"
{
	"id": "63f47d24dab5eb85451f3b61"
}
```

## Edit

Use this end point to edit the meta data about a function. You will need to pass the id of the function on the URL. The parameters that you can edit are the name and description of the function.

#### End Point: [https://api.greencloud.dev/api/lambda/id](https://api.greencloud.dev/api/lambda/id)

```js title="HTTP VERB"
PATCH
```

```js title="Content Header"
Authorization, Valid - Access - Token
```

```js title="Body"
{
	"name": "new_name",
	"description":"new_description"
}
```

#### Response:

HTTP 204

```js title="API Response"

```

## Get

Use this end point to get a list of details about the function. Note that you need to pass the id of the create function on the URL.

#### End Point: [https://api.greencloud.dev/api/lambda/id](https://api.greencloud.dev/api/lambda/id)

```js title="HTTP VERB"
GET
```

```js title="Content Header"
Authorization, Valid - Access - Token
```

```js title="Body"
N / A
```

#### Response:

HTTP 200

```js title="API Response"

{
	"name": "name_of_function",
	"description": "description_of_function",
	"scmUrl": "https://greencloudcomputing.io",
	"type": "type_of_function",
	"lang": "langugage_of_function",
	"tags": [
		{
			"name": "greencloud",
			"color": "#00ff80"
		}
	]
}

```

## List

Use this end point to get a list of functions in your Green Cloud account.

#### End Point: [https://api.greencloud.dev/api/lambda/](https://api.greencloud.dev/api/lambda/)

```js title="HTTP VERB"
GET
```

```js title="Content Header"
Authorization, Valid - Access - Token
```

```js title="Body"
N / A
```

#### Response:

HTTP 200

```js title="API Response"
;[
    {
        id: "63e513f351d388749dc96e54",
        name: "array_of_functions",
    },
]
```

## List By Tag

Use this end point to get a list of functions by tag. Note that you need to pass the tag you are interested in as a query parameter. We introduced Tags into Green Cloud as a means to be able to better manage your Green Cloud assets. Please see the Tag documentation for more details.

#### End Point: [https://api.greencloud.dev/api/lambda/list?tag=greencloud](https://api.greencloud.dev/api/lambda/list?tag=greencloud)

```js title="HTTP VERB"
GET
```

```js title="Content Header"
Authorization, Valid - Access - Token
```

```js title="Body"
N / A
```

#### Response:

HTTP 200

```js title="API Response"
;[
    {
        id: "63e513f351d388749dc96e54",
        name: "name_of_function_that_is_tagged",
    },
]
```

## Delete

#### End Point: [https://api.greencloud.dev/api/lambda/](https://api.greencloud.dev/api/lambda/)

```js title="HTTP VERB"
DELETE
```

```js title="Content Header"
Authorization, Valid - Access - Token
```

```js title="Body"
N / A
```

#### Response:

HTTP 200

```js title="API Response"

```

## Create Runner

#### End Point: [https://api.greencloud.dev/api/lambda/runner](https://api.greencloud.dev/api/lambda/runner)

```js title="HTTP VERB"
POST
```

```js title="Content Header"
Authorization, Valid - Access - Token
```

```js title="Body"
N / A
```

#### Response:

HTTP 200

```js title="API Response"

```

## Get Runners

#### End Point: [https://api.greencloud.dev/api/lambda/runner](https://api.greencloud.dev/api/lambda/runner)

```js title="HTTP VERB"
GET
```

```js title="Content Header"
Authorization, Valid - Access - Token
```

```js title="Body"
N / A
```

#### Response:

HTTP 200

```js title="API Response"

```

## Get Capabilities

#### End Point: [https://api.greencloud.dev/api/lambda/capabilities](https://api.greencloud.dev/api/lambda/capabilities)

```js title="HTTP VERB"
GET
```

```js title="Content Header"
Authorization, Valid - Access - Token
```

```js title="Body"
N / A
```

#### Response:

HTTP 200

```js title="API Response"

```

## Set Capabilities

In Green Cloud because of the disparate nature of the machines that will be connecting to the Dispatcher we use something called Capabailities to be able to clearly utilise the best suited machine to the computational task that the function requires. This is the purpose of Capabilities. In setting the capabilities of a function you can restrict the machines that that function executes on. The purpose of this is to run on the most optinal machine for the function.

#### End Point: [https://api.greencloud.dev/api/lambda/capabilities](https://api.greencloud.dev/api/lambda/capabilities)

```js title="HTTP VERB"
POST
```

```js title="Content Header"
Authorization, Valid - Access - Token
```

```js title="Body"
{
	"cpuCount": 1,
	"memSize": 1024,
	"privileged": true
}
```

#### Response:

HTTP 200

```js title="API Response"

```
