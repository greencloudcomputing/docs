---
sidebar_position: 4
---

# 💼 Creating a Project

As we created Green Cloud we realised that developers were likely to create more than one function. When working on a project you likley will have to create numerous functions to address certain requirements of the work that you were performing.

That is why we stipulate that you create a project first in Green Cloud and then add functions to that project.

To create a project you use the following command 

```console
    ./gccli project init
```

You will then be asked for a name for the project. We stipulate that Project names should be unique. Upon pressing enter you will then be prompted for a descrption which, as you may have guessed should be a description for you project.

Once you have a name and a description the CLI will create a directory of the same name and store this in your account in GreenCloud.

You must always be 'in' the directory of your project to be able to add functions to it. For example if I run the following -

```console
    ./gccli lambda project init
    Name: TestProject
    Description: A test project
```

I would then need to change directory to then create a function -

```console
    cd TestProject
    gccli lambda init
```

With the project command you can list all of the projects in your account by using the 'list' option -

```console
    ./gccli project list
```

This will cause the CLI to ask the dispatcher for all fo the projects that are connected to your account and display a numerically ordered list of your project names and descriiptions. It is not possible to list projects from anyone else's account.

```console
    ./gccli project info
```

Running the above command will show you all the details about your current project and will show something similar to the following -

💼 Name → TheNameOfTheProject
📚 Description → A Description of the aim of the project
👔 Owner → theaccountname@email.com
📡 Registered → true

If the project is registered it means that GreenCloud is aware of the project.

```console
    ./gccli project restore
```

If you are using multiple computers it is possible to recreate projects on your local machine by using this command. Create a directory of the same name as the project. ( use the 'gccli project list' command to verify the name ). When you are inside that directory run the following command -:

```console
    ./gccli project restore
```

This will recreate the .gcproject file in the directory. It will NOT restore your source code. We recommend that you use a code respository like GitHub or GitLab to store your code. This way you can clone your source directly into this function directory and continue developing on a new machine.