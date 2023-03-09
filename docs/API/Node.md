---
sidebar_position: 2
---

# 📡 Node

## Create

We use this end point to create a node. We pass in the ID of the node on the URL and a description in the body.

#### End Point: [https://api.greencloud.dev/v1/node/hash_of_the_node](https://api.greencloud.dev/v1/node/hash_of_the_node

```js title="HTTP VERB"
POST
```

```js title="Content Header"
Authorization, Valid - Access - Token
```

```js title="Body"
{
    "description" : "A Description of the node"
}
```

#### Response:

HTTP 201

```js title="API Response"

```

## List

Use this end point to get a list of nodes registered to the account. You can get interesting information about the node - for example if it is available or if it is disabled. The endpoint returns an array of JSON objects each object representing a node.

#### End Point: [https://api.greencloud.dev/v1/node/list](https://api.greencloud.dev/v1/node/list)

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
        available: false,
        description: "dddddddddddddddddd",
        disabled: false,
        hash: "1a061cfd-df01-4b02-a067-5122c5941e15",
    },
]
```

## Delete

Call this end point with the 'hash' of the node that you wish to remove. Call the list end point to find the list of nodes in the account, each node has an associated hash. If there is an associated node for the hash it is removed from the account and a 204 HTTP response is returned.

#### End Point: [https://api.greencloud.dev/v1/node/hash_of_the_node](https://api.greencloud.dev/v1/node/hash_of_the_node

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

HTTP 204

```js title="API Response"

```

## Restore

If the node has been deleted, you can use the restore endpoint to enable it again on the account. Simply pass the hash of the node on the url and if it is found, it will be restored with a 200 HTTP response returned.

#### End Point: [https://api.greencloud.dev/v1/node/hash_of_the_node](https://api.greencloud.dev/v1/node/hash_of_the_node)

```js title="HTTP VERB"
PATCH
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
