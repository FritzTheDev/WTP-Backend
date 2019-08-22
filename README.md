## Water Transfer Platform Server API Documentation

### Basic User Account & Auth Endpoint
| **Path**  | **HTTP Verb** |               **Controller Description**                  |
| :-------- | :-----------: | :-------------------------------------------------------- |
| /auth     |     POST      | Accepts Login Credentials & Returns Auth JWT Upon Success |
| /account  |     GET       | Accesses Active User's Account Data                       |
| /account  |     PATCH     | Mutates Active User's Non-Password Account Data           |
| /account  |     DELETE    | Flags User Account For Deletion & Emails Admins           |
| /reset-pw |     PATCH     | Mutates Active User's Password Hash (Requires PW Confirm) |

### Basic User Listings Endpoint
|       **Path**       | **HTTP Verb** |                  **Controller Description**                    |
| :------------------- | :-----------: | :------------------------------------------------------------- |
| /listings            |     GET       | Accesses All *ACTIVE* Listings                                 |
| /listings            |     POST      | Creates New Listing With Provided Details                      |
| /listings/:id        |     GET       | Accesses A Specific *ACTIVE* Listing                           |
| /listings/:id        |     PATCH     | Mutates A Specific *ACTIVE* Listing "Owned" By The User        |
| /listings/:id/offers |     POST      | Creates An Offer On A Listing *NOT* "Owned" By The User        |
| /listings/:id/offers |     GET       | Gets All Offers On A Listing "Owned" By The User               |

### Admin API Endpoints
|    **Path**           | **HTTP Verbs** |               **Controller Description**                  |
| :-------------------- | :------------: | --------------------------------------------------------- |
| /admin/auth/register  |      POST      | Accepts Account Info & Creates User                       |
| /admin/auth/register  |      POST      | Accepts Account Info & Creates User                       |
| /admin/auth/register  |      POST      | Accepts Account Info & Creates User                       |
| /admin/auth/register  |      POST      | Accepts Account Info & Creates User                       |
