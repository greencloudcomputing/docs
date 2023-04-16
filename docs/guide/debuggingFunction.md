---
sidebar_position: 2
---

# Debugging a Function

Often there are times where it is essential to see the step by step calls in a GreenCloud function. Being able to attach a debugger to your code is a very useful feature of software development. GreenCloud functions are easy to debug and we will show you how.

This example uses GO as the base language - however the technique we use can be applied to any of the languages that we support in GreenCloud.

1. Create a GreenCloud function `./gccli fx init` and follow the instrucitons - or - use [GreenCloud Dashboard](https://app.greencloudcomputing.io)
2. In your code editor add a folder and call it 'debug'
3. In this folder we are going to create file with a main entry point. In GoLang we do this by creating a file called 'main.go'
4. Open the file and copy and past the following code -:

```
package main

import (
	"fmt"
	function "handler/function"
	handler "github.com/openfaas/templates-sdk/go-http"
)

func main() {

	var req handler.Request
	req.Body = []byte("")
	req.Host = "https://www.greencloudcomputing.io"
	req.Method = "POST"

	var resp, _ = function.Handle(req)
	fmt.Println(string(resp.Body))
}
```

What we have done here is to create an executable entry point that calls the function you have created. (see the import handler statement that pulls your function into the executable).

The next step is to set a break point in your code. For this example - set the break point on first line after **func main() {** line and start the debugger. We are using Visual Studio Code [here](https://learn.microsoft.com/en-us/visualstudio/debugger/using-breakpoints?view=vs-2022) is a link to some documentation on setting break points.

Now start the debugger! Execution will stop at the break point. You can now step over and into the code you have written, specifically stepping into your function which is the line 

```
var resp, _ = function.Handle(req)
```

If you have found this useful or would like more examples in other languages on how to debug your funtions simply tweet us [**@gccdotio**](https://www.twitter.com/gccdotio) or [**email us**](mailto:hello@greencloudcomputing.io), we are interested in your experience with the system!