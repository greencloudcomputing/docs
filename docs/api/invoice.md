---
sidebar_position: 6
---

# 🧾 Invoice

User may access their invoices with the Invoice endpoint.

## Get Invoice

:::info
This endpoint allows authenticated users to get an invoice with the given invoice ID.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/invoice/[invoiceId]' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Request Parameters

| Value        | Example                  | Required |
| ------------ | ------------------------ | -------- |
| _invoice id_ | 63f47d24dab5eb85451f3b61 | true     |

#### Example Request

```js
Empty body
```

#### Example Response:

```js title="Status: 200 OK"
{
	"amount": 9.99,
	"description": "DEVELOPER (100000 invocations)",
	"status": "succeeded",
	"paidDay": 1678355135,
	"payment": {
		"card": {
			"brand": "visa",
			"last4": "4242"
		},
		"receiptUrl": "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSlRucGVFdDQ4TWpsMDc1KL_VpqAGMgY1jX-yu2Y6LBZhIpcJ9WrHhXSButwDFOSQDIhzVKNF3ljmIi6leN3Y3tVhMuWz1ohezyA4"
	}
}
```

## List Invoices

:::info
This endpoint allows authenticated users to get a list of all invoices.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/invoice/list' method='GET'/>

#### Request Headers

| Key             | Value                | Required |
| --------------- | -------------------- | -------- |
| `Authorization` | _Valid Access Token_ | true     |

#### Example Request

```js
Empty body
```

#### Example Response:

<!-- prettier-ignore -->
```js title="Status: 200 OK"
[
    {
        id: "6409aabfe3c1e9ef53c1ddd7",
        amount: 9.99,
        status: "succeeded",
        paidDay: "1678355135",
    },
    {
        id: "6409aabfe3c1e9ef53c1ddd8",
        amount: 9.99,
        status: "succeeded",
        paidDay: "1678395135",
    },
]
```
