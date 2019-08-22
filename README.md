# Water Transfer Platform Server API Documentation

## Basic User Endpoints
###  Account & Auth Endpoints
| **Path**  | **HTTP Verb** | **Valid HTTP Statuses** |               **Controller Description**                  |
| :-------- | :-----------: | :---------------------: | :----------------------------------- |
| /auth     |     POST      |                         | Accepts Login Credentials & Returns Auth JWT Upon Success |
| /account  |     GET       |                         | Accesses User's Account Data                          |
| /account  |     PATCH     |                         | Mutates User's Non-Password Account Data               |
| /account  |     DELETE    |                         | Flags User Account As Deleted & Emails Admins an alert |
| /reset-pw |     PATCH     |                         | Mutates User's Password Hash (Requires PW Confirm)     |

### Listings Endpoints
|            **Path**           | **HTTP Verb** | **Valid HTTP Statuses** |                   **Controller Description**                   |
| :---------------------------- | :-----------: | :---------------------: | :------------------------------------------------------------- |
| /listings                     |     GET       |        200, 401         | Accesses All Active Listings                                   |
| /listings                     |     POST      |        201, 401         | Creates New Listing With Provided Details                      |
| /listings/:listingid          |     GET       |    200, 401, 404, 410   | Accesses A Specific Active Listing                             |
| /listings/:listingid          |     PATCH     |    204, 401, 404, 410   | Mutates A Specific Active Listing Created By The User          |
| /listings/:listingid          |     DELETE    |    204, 401, 404, 410   | Flags A Specific Active Listing Created By The User As Deleted |

### Offers Endpoints
|      **Path**    | **HTTP Verb** |         **Controller Description**           |
| :--------------- | :-----------: | :------------------------------------------- |
| /offers          |     GET       | Get All Active Offers Created By The User    |
| /offers/:offerId |     GET       | Get Specific Offer Created By The User       |
| /offers/:offerId |     PATCH     | Mutate Specific Offer Created By The User    |


| /listings/:listingid/offers          |     GET       | Gets All Offers On A Listing "Owned" By The User                  |
| /listings/:listingid/offers          |     POST      | Creates An Offer On A Listing *NOT* "Owned" By The User           |
| /listings/:id/offers/:offerid |     GET       | Gets A Specific Offer "Owned" By The User                         |
| /listings/:id/offers/:offerid |     POST      | Mutates A Specific Offer "Owned" By The User                      |


### Admin API Endpoints
|    **Path**           | **HTTP Verbs** |               **Controller Description**                  |
| :-------------------- | :------------: | --------------------------------------------------------- |
| /admin/auth/register  |      POST      | Accepts Account Info & Creates User                       |
| /admin/auth/register  |      POST      | Accepts Account Info & Creates User                       |
| /admin/auth/register  |      POST      | Accepts Account Info & Creates User                       |
| /admin/auth/register  |      POST      | Accepts Account Info & Creates User                       |
