---
sidebar_position: 3
---

# 🛰️ Dispatcher

Welcome to the documentation on the GreenCloud Dispatcher. The Dispatcher can be thought of as the beating heart of GreenCloud. It serves some very important purposes.

-   It abstracts the developer away from the member/node. This is a designed security measure. It allows us to control accounts and also not expose nodes to the wider internet.
-   Developers can send many HTTP requests and await the responses.
-   The Dispatcher acts as a broker - matching up the incoming requests with the most appropriate node to handle the work load.

In time GreenCloud will have multiple dispatchers around the globe. Our vision is to host small centers that will be powered by onsite renewable energy. With our paradigm of farming out work load to members, we anticipate that our energy requirements for Dispatcher will be dramatically less than the current modern data center.

The Dispatcher consists of a suite of microservices all working together to perform the collective tasks that make up the Dispatcher. This includes but is not limited to -:

-   Account - handles all the account interaction requirements.
-   Auth - our Authentication Microservice.
-   Gateway - handles all incoming requests and directs them.
-   Invoice - a Micro service for handling all Invoice details.
-   Node - is responsible for all the interactions with the nodes.
-   Function - looks after all the functions that are created/running.
-   Payment - we pay our members for being part of GreenCloud - this microservices handles this.
-   Endpoint - enables you to be able to call your functions using https protocol. Endpoints can be configured according to your preferences, such as allowing you to set when they can be accessed, what IP can access them, how many times they can be accessed a day.
-   Task - returns the result of a call to a single function.
-   Tag - allows you to attach a specific meta data marker to a function. These can then be filtered to allow you to quickly search, sort and group required functions. Tags are specific to your account.
-   Dispatcher - The service that allocates the workload across the GreenCloud network.

In detail, the dispatcher can be thought of as an intelligent queue. When people offer their machines for use, their machines become Nodes. They are added to and stay in the Node queue if they meet the following conditions -:

1. They are available for work.
2. They are not currently processing work.
3. They are producing or running on renewable energy.

If any of these conditions is not met the machine will be removed from the queue until all the conditions are met.

The dispatcher checks the queue for incoming work loads. Should it find a request for work - it then checks its Node queue and allocates the work load to the most appropriate Node to perform that task (achieved through a capabilities check).

The workload is allocated - the Node is removed from the queue and the Dispatcher repeats the process for the next piece of work in the queue. This makes for a very rapid system of work allocation. Another way of viewing how the Dispatcher works is as a broker. "I have some work - who is available to perform it?"
