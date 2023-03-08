---
sidebar_position: 6
---

# 🏃 Running a Function - Locally...

During the creation of Green Cloud we realised that the software developer would need a method by which they could test their software locally first before publishing it into the Green Cloud. 

To do this we make use of Docker and a special command in the CLI.

To run your function locally simple type :

```console
    ./gccli lambda start
```

(Remember you will need to be in the directory of the function to run this command.)

This will trigger the function to be built and then started as a container in docker and running on Port 8080.

You can then invoke the function by calling it via a web browser or using a web introspection tool like PostMan to pass values in the 'body' of the function.

There are a couple of parameters for the 'start' call that are worth mentioning. First 

```console
    ./gccli lambda start -p 3000
```

Using the '-p' parameter you can specify which port you want you function to be accessible from.

```console
    ./gccli lambda start -t 5
```

Using the '-t' parameter you can set the timeout value for how long you specify for the function to run for before being timed out.

```console
    ./gccli lambda start -l
```

This will cause any logging that is on the standard out to be displayed to the terminal