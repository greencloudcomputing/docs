---
sidebar_position: 8
---

# How do I pass parameters to a Green Cloud function ?

It's nice to have low carbon functions like those offered by Green Cloud however the real power of them comes from being able to pass information to them. In GreenCloud we have two methods for passing information into a function -:

### Query Parameters

Query Parameters are the ability to pass information to an internet resource using the URL. 

An example is as follows -:

```
 https://www.imaginaryfunction.com?parameter_name=parameter_value
```

Here we have an imaginary URL that is passing query parameters to the URL in the form of a name (parameter_name) and a value (parameter=value). 

You can add more parmeters to the URL simply by using the '&' sign, here is an example -: 

```
 https://www.imaginaryfunction.com?parameter_name=parameter_value&parameter_name2=parameter_value2
```

To be able to call your function from a URL you will need to have created a public URL. 

1. You can create this by making sure you have deployed your function into GreenCloud -:

<cliWindow>

```text {1}
$ ./gccli fx deploy
👷 Verifying configuration...
📦️ Archs: AMD64,ARM64,ARM
⏳️ Process may take a while, please wait...
🧩 Compiling multi-arch image [OK]                              
🚚 Pushing image to registry...
🔥 Function successfully uploaded!
```

</cliWindow>

2. and then getting a public endpoint

<cliWindow>

```text {1,7}
$ ./gccli fx public
👷 Validating inputs...
🚨 You must keep the public endpoint safe!
🔗 Any existing endpoint will be revoked
✋ Do you accept conditions? (y/n) → y
🤖 Public endpoint created successfully!
🔗 https://api.greencloud.dev/gc/25f26d7445d545dd8b89dfe8fcfb19df
```

</cliWindow>

:::caution
- Remember to keep this URL safe and use it wisely. 
- GreenCloud are not responsible for how you use this URL. 
:::

You will receive the parameters inside your function on the **QueryString** proprty of the Request Object. 

### HTTP Body

Similarly you can pass data into your function using the Body property of the Request type. Typically this is JSON data although it can be many things.
It is up to the developer to extract the data from the Body into the format that you are expecting. Handling any error conditions that arise from improper data.

Below is the contents of the GO language Request struct type -:

```
type Request struct {
	Body        []byte
	Header      http.Header
	QueryString string
	Method      string
	Host        string
	// contains filtered or unexported fields
}
```

You can see the Body and QueryString properties documented here.