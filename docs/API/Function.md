---
sidebar_position: 5
---

# 🌱 Function

In GreenCloud we operate a system that runs small functions repeatedly. These functions are based around containers that are delivered and executed on remote devices. 

A Function can be created using the CLI and is generally not something that is viewed by the end user. The main purpose of the Function is to act as a logical construct to represent the software/code that the software developer has written. 

When a software developer asks to initiate a function - they will create a task which will also have a related Function to execute. 

A Lambda / Function consists of -:

1. Name - a non unique character string used to represent the function.
2. Language - the language that the lambda is written in. At the time of writing Green Cloud supports -:

## Create

#### End Point: [https://api.greencloud.dev/api/lambda/](https://api.greencloud.dev/api/lambda/)

```js title="HTTP VERB"
POST 
```

```js title="Content Header"
Authorization , Valid-Access-Token
```

```js title="Body"
N/A
```

#### Response:

HTTP 200

```js title="API Response"
```

## Edit

#### End Point: [https://api.greencloud.dev/api/lambda/](https://api.greencloud.dev/api/lambda/)

```js title="HTTP VERB"
PATCH 
```

```js title="Content Header"
Authorization , Valid-Access-Token
```

```js title="Body"
N/A
```

#### Response:

HTTP 200

```js title="API Response"
```

## Get

#### End Point: [https://api.greencloud.dev/api/lambda/](https://api.greencloud.dev/api/lambda/)

```js title="HTTP VERB"
GET 
```

```js title="Content Header"
Authorization , Valid-Access-Token
```

```js title="Body"
N/A
```

#### Response:

HTTP 200

```js title="API Response"
```

## List

#### End Point: [https://api.greencloud.dev/api/lambda/](https://api.greencloud.dev/api/lambda/)

```js title="HTTP VERB"
POST 
```

```js title="Content Header"
Authorization , Valid-Access-Token
```

```js title="Body"
N/A
```

#### Response:

HTTP 200

```js title="API Response"
```

## Delete

#### End Point: [https://api.greencloud.dev/api/lambda/](https://api.greencloud.dev/api/lambda/)

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

HTTP 200

```js title="API Response"
```

## Delete

#### End Point: [https://api.greencloud.dev/api/lambda/](https://api.greencloud.dev/api/lambda/)

```js title="HTTP VERB"
POST 
```

```js title="Content Header"
Authorization , Valid-Access-Token
```

```js title="Body"
N/A
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
Authorization , Valid-Access-Token
```

```js title="Body"
N/A
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
Authorization , Valid-Access-Token
```

```js title="Body"
N/A
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
Authorization , Valid-Access-Token
```

```js title="Body"
N/A
```

#### Response:

HTTP 200

```js title="API Response"
```

    ## Set Capabilities

    #### End Point: [https://api.greencloud.dev/api/lambda/capabilities](https://api.greencloud.dev/api/lambda/capabilities)

    ```js title="HTTP VERB"
    POST 
    ```

    ```js title="Content Header"
    Authorization , Valid-Access-Token
    ```

    ```js title="Body"
    N/A
    ```

    #### Response:

    HTTP 200

    ```js title="API Response"
    ```