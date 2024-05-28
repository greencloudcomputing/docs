---
sidebar_position: 8
---

# 💾 Storing files in GreenCloud

## How does it work?

GreenCloud allows you to create a storage function where you can store files up to 16mb in size.  

GreenCloud ensures your files are private by masking important information. Files are broken down across multiple server nodes to ensure security.  

## Creating a storage function

1. Use the gccli command

```
gccli fx init
```

#### Example

<cliWindow>

```text {1}
$ gccli fx init  
🔑 Obtaining accessToken...
👷 Validating inputs...
🥼 Name → storageTests
🔖 Language → go
👔 Description → Creating test storage
⌚ Timeout → 10
📡 Sharing information...
📄 Copying template...
📝 Saving configuration...
🌱 Function created successfully!
```

</cliWindow>

2. Write your code to create storage and then store your information within.

#### Example

```go

package function

import (
	"encoding/base64"
	"fmt"
	"io"
	"net/http"
	"os"

	handler "github.com/openfaas/templates-sdk/go-http"
)

func Handle(req handler.Request) (handler.Response, error) {
	var err error

	// Open the image file
	file, err := os.Open("./img/Screenshot 2023-11-22 210028.png")
	if err != nil {
		return handler.Response{}, err
	}
	defer file.Close()

	// Read the image into a byte slice
	imgBytes, err := io.ReadAll(file)
	if err != nil {
		return handler.Response{}, err
	}

	// Convert the byte slice to a base64 string
	encoded := base64.StdEncoding.EncodeToString(imgBytes)

	// Create an HTML img tag with the base64 string
	imgTag := fmt.Sprintf("<img src=\"data:image/png;base64,%s\">", encoded)

	// Set the Content-Type header to text/html
	headers := http.Header{
		"Content-Type": []string{"text/html; charset=utf-8"},
	}

	return handler.Response{
		Body:       []byte(imgTag),
		StatusCode: http.StatusOK,
		Header:     headers,
	}, nil
}

```

3. Deploy your code to GreenCloud

<cliWindow>

```text {1}
 $  gccli fx deploy
👷 Verifying configuration...
📦️ Archs: AMD64,ARM64,ARM
⏳️ Process may take a while, please wait...
🧩 Compiling multi-arch image [OK]                              
🚚 Pushing image to registry...
🔥 Function successfully uploaded!
```

</cliWindow>

4. Create a public endpoint

<cliWindow>

```text {1}
 $ 	gccli fx public
👷 Validating inputs...
🚨 You must keep the public endpoint safe!
🔗 Any existing endpoint will be revoked
✋ Do you wish to continue? (y/n) → y
🤖 Public endpoint created successfully!
🔗 https://api.greencloud.dev/gc/6655ff265b7bb1846afb0f6a
```

</cliWindow>

5. Access your public endpoint using the link provided.

6. Make sure to delete the endpoint when it is no longer needed.

#### Example

<cliWindow>

```text {1}
 $ gccli function public --id 6655ff265b7bb1846afb0f6a --delete
🔑 Obtaining accessToken...
👷 Validating inputs...
🔖 ID → 6655ff265b7bb1846afb0f6a
🔥 Public endpoint deleted successfully!
```

</cliWindow>
