---
sidebar_position: 8
---

import BrowserWindow from '@site/src/components/BrowserWindow';

# 💾 Storing files in GreenCloud

## How does it work?

GreenCloud allows you to create a storage function where you can store files up to 16mb in size.  

GreenCloud ensures your files are private by masking important information. Files are broken down across multiple server nodes to ensure security.  

## Creating a storage function

#### 1. Use the gccli command

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

#### 2. Open your created function.

#### Example

```go

package function

import (
	"net/http"

	handler "github.com/openfaas/templates-sdk/go-http"
)

// Handle a function invocation
func Handle(req handler.Request) (handler.Response, error) {
	var err error

	body := req.Body
	headers := http.Header{
		"Content-Type": []string{req.Header.Get("Content-Type")},
	}

	if len(body) == 0 {
		body = []byte("Hello from GO by GreenCloud!")
		headers.Set("Content-Type", "text/plain; charset=utf-8")
	}

	return handler.Response{
		Body:       body,
		StatusCode: http.StatusOK,
		Header:     headers,
	}, err
}

```


#### 3. Write your code to create storage and then store your information within.

#### Example

```go

package function

import (
	"encoding/base64"
	"net/http"

	handler "github.com/openfaas/templates-sdk/go-http"
)

// Handle a function invocation
func Handle(req handler.Request) (handler.Response, error) {
	var err error

	//	body := req.Body
	headers := http.Header{
		"Content-Type": []string{req.Header.Get("Content-Type")},
	}

	// set storage
	newStorage := base64.StdEncoding.EncodeToString([]byte("I am a storage Test!"))
	headers.Set("GC-Storage", newStorage)

	// get storage
	storage := req.Header.Get("GC-Storage")
	text, _ := base64.StdEncoding.DecodeString(storage)

	return handler.Response{
		Body:       text,
		StatusCode: http.StatusOK,
		Header:     headers,
	}, err
}

```

#### 4. Deploy your code to GreenCloud

<cliWindow>

```text {1}
 $ gccli fx deploy
👷 Verifying configuration...
📦️ Archs: AMD64
⏳️ Process may take a while, please wait...
🧩 Compiling multi-arch image [OK]                              
🚚 Pushing image to registry...
🔥 Function successfully uploaded!
```

</cliWindow>

#### 5. Create a public endpoint URL.

<cliWindow>

```text {1}
 $ gccli fx public
👷 Validating inputs...
🚨 You must keep the public endpoint safe!
✋ Do you wish to continue? (y/n) → y
🤖 Public endpoint created successfully!
🔗 https://api.greencloud.dev/gc/6655ff265b7bb1846afb0f6a
```

</cliWindow>

#### 6. Access your public endpoint using the link provided.

#### Example

<BrowserWindow url="https://api.greencloud.dev/gc/6655ff265b7bb1846afb0f6a">

⏳ Your function is queued up and will be executed in due time.

The result will be available for the next 5 minutes at the link below.

https://api.greencloud.dev/gc/6656ef17f9440e67ae781692/result

</BrowserWindow>

#### 7. Follow the result link to retrieve your result.

#### Example

<BrowserWindow url="https://api.greencloud.dev/gc/6656ef17f9440e67ae781692/result">

I am a storage Test!

</BrowserWindow>

#### 8. Make sure to delete the endpoint when it is no longer needed.

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
