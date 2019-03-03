For render scripts use https://www.websequencediagrams.com/

## User Interaction Diagrams

### Authentication Sequence Script

    title Authentication Sequence

    Customer->Angular: Enter Login Data

    note right of Angular: Angular validate data

    Angular->Spring: Authentication Request

    note right of Spring: validate user creds

    Spring->Postgres: Request user by creds

    Postgres->Spring: Response user with creds

    Spring->Angular: Authentication Response

    note right of Angular: If authentication is failed show error

    Angular->Customer: Show home page

### Get Available Rooms Sequence Script

    title Get Available Rooms Sequence

    Customer->Angular: Request home page

    note right of Angular: Check that user is logged in

    Angular->Spring: Request rooms

    Angular->Spring: Request booking

    Spring->Postgres: Request booking

    Spring->Postgres: Request rooms

    Postgres->Spring: Response rooms

    note right of Spring: Mark available rooms

    Spring->Angular: Response rooms

    Angular->Customer: Show all rooms

    Postgres->Spring: Response booking

    Spring->Angular: Response booking

    Angular->Customer: Show user booking

    note right of Angular: Highlight availble rooms


## Server Side Diagrams

### Get Place Request Sequence Script

    title Get Place Request Sequence

    HTTP -> PlaceRestController: Get request with Id

    PlaceRestController -> PlaceService: GetPlaceById

    note right of PlaceService: check that user is logged in

    PlaceService -> PlaceRepository: GetPlaceById

    PlaceRepository -> PlaceService: Place entity

    PlaceService -> PlaceRestController: Place entity

    PlaceRestController -> HTTP: Response with place entity
