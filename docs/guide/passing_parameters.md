---
sidebar_position: 8
---

# How do I pass parameters to a Green Cloud function ?

It's nice to have low carbon functions like those offered by Green Cloud however the real power of them comes from being able to pass information to them. In GreenCloud we have two methods for passing information into a function -:

1. Query Parameters

Query Parameters are the ability to pass information to an internet resource using the URL. An example is as follows -:

```
 https://www.imaginaryfunction.com?parameter_name=parameter_value
```

Here we have an imaginary URL that is passing query parameters to the URL in the form of a name (parameter_name) and a value (parameter=value). 

You can add more parmeters to the URL simply by using the '&' sign, here is an example -: 

```
 https://www.imaginaryfunction.com?parameter_name=parameter_value&parameter_name2=parameter_value2&parameter_name3=parameter_value3
```

To be able to call your function from a URL you will need to have created a public URL. You can create this by making sure you have deployed your function into GreenCloud -:

```
gccli fx deploy
```

and then running 

```
gccli fx public 
```

Remember to keep this URL safe and use it wisely. GreenCloud are not responsible for how you use this URL. You will receive the parameters inside your function on the "QueryString" proprty of the Request Object. 

2. HTTP Body

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