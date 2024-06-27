---
sidebar_position: 7
---

# 📊 metrics

## Get

:::info
Use this endpoint to retrieve metrics including pending tasks, pending builds, active nodes, free nodes, busy nodes, today's tasks and completed tasks.
:::

#### Endpoint

<endpoint href='https://api.greencloud.dev/v1/metrics' method='GET'/>

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
    "pendingTasks": 0,
    "pendingBuilds": 0,
    "activeNodes": 0,
    "freeNodes": 0,
    "busyNodes": 0,
    "todayTasks": 0,
    "completedTasks": 2225
}

```