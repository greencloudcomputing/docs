---
sidebar_position: 6
---

# 🌱 Getting function info

:::tip requirements

-   Being logged in
-   Being in the directory of the function

:::

Users may get a function's info by running the following command `./gccli function info` :

<cliWindow>

```text {1}
~/myFunction $ ./gccli function info
📌 ID → 64084228a54bc2c0876adebb
🌱 Name → go
📚 Description → go
🔆 Language → go
👔 Owner → richard.hill@greencloudcomputing.io
📡 Registered → true
📦 Running → false
🔗 Link → https://api.greencloud.dev/gc/805a090f19f24a2f80ae1cde50370ecc
$ █
```

</cliWindow>

:::note
If the function has a public endpoint, it will be listed like below.

```
🔗 Link → https://api.greencloud.dev/gc/805a090f19f24a2f80ae1cde50370ecc
```

:::
