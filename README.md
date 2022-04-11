# Unit-Tests
Trying out unit tests on a small subscribe application

front-end: Angular

back-end: Nestjs

## Unit testing
I applied unit tests on the controller and service of my backend:
- The controller: tested the service methods calling, times and params using toHaveBeenCalledTimes and ToHaveBeenCalledWith
- The service : tested the injection using a mock repository to inject into my service to not use my database.
