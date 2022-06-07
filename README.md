# Testing types
Trying different tests on a small subscribe application

front-end: Angular
back-end: Nestjs

## Unit testing
I applied unit tests on the controller and service of my backend:
- The controller: tested the service methods calling, times and params using toHaveBeenCalledTimes and ToHaveBeenCalledWith
- The service : tested the injection using a mock repository to inject into my service to not use my database.

[Check the details in the backend readme](./subscribe-backend/README.md)

## Integration testing
I applied integration testing on the CRUD service of my angular app. 
[Check the details in the frontend readme](./signin/README.md)

And the database and service of the nestjs app.
[Check the details in the backend readme](./subscribe-backend/README.md)

## E2E testing
I applied e2e testing to our http requests
[Check the details in the backend readme](./subscribe-backend/README.md)
