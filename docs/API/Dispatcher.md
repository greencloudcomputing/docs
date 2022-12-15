---
sidebar_position: 4
---

# Dispatcher

Welcome to the documentation on the GreenCloud Dispatcher. The Dispatcher can be thought of as the beating heart of GreenCloud. It serves some very important purposes. 

- It abstracts the developer away from the member/node. This is a designed security measure. It allows us to control accounts and also not expose nodes to the wider internet.
- Developers can send many HTTP requests and await the responses.
- The Dispatcher acts as a broker - matching up the incoming requests with the most appropriate node to handle the work load.

In time Green Cloud will have multiple dispatchers around the globe. Our vision is to host multiple mini centers that will be powered by renewable energy to power these facilities. With our paradigm of farming out work load to members we anticipate that our energy requirements for Dispatcher will be dramatically less than the current modern data center.

The Dispatcher consists of a suite of microservices all working together to perform the collective tasks that make up the Dispatcher. This includes but is not limited to -: 

- Account - handles all the account interaction requirements.
- Auth - our Authentication Microservice.
- Gateway - handles all incoming requests and directs them.
- Invoice - a Micro service for handling all Invoice details.
- Node - is responsible for all the interactions with the nodes.
- Lambda - looks after all the functions that are created/running.
- Payment - we pay our members for being part of Green Cloud - this microservices handles this.
- Project - In Green Cloud we have the idea that you create a project that represents a collection of Lambdas/Functions.
- Subscription - This Microservice handles your subscription.

