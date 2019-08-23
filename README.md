# Water Transfer Platform Server API Documentation

## Non-Authed Endpoints 
|     **Path**   | **HTTP Verb** | **Valid HTTP Statuses** |                       **Controller Description**                                |
| :------------- | :-----------: | :---------------------: | :------------------------------------------------------------------------------ |
| /auth          |     POST      |        200, 403         | Accepts Login Credentials & Returns Auth JWT Upon Success                       |
| /lost-pw       |     POST      |        204, 404         | Sends Password Reset Link To A Given Email & Patch a "Reset Code" onto the user |
| /reset-pw      |     POST      |        204, 404         | Sends Password Reset Link To A Given Email Or 404 If Email Is Not In Use        |


## Basic User Endpoints
###  Account & Auth Endpoints
|  **Path**  | **HTTP Verb** | **Valid HTTP Statuses** |               **Controller Description**                |
| :--------- | :-----------: | :---------------------: | :------------------------------------------------------ |
| /account   |     GET       |        200, 401         | Accesses User's Account Data                            |
| /account   |     PATCH     |        204, 401         | Mutates User's Non-Password Account Data                |
| /account   |     DELETE    |        204, 401         | Flags User Account As Deleted & Emails Admins An Alert  |
| /change-pw |     PATCH     |      204, 401, 403      | Mutates User's Password Hash (Requires PW Confirmation) |

### Listings Endpoints
|            **Path**           | **HTTP Verb** | **Valid HTTP Statuses** |                   **Controller Description**                   |
| :---------------------------- | :-----------: | :---------------------: | :------------------------------------------------------------- |
| /listings                     |     GET       |        200, 401         | Accesses All Active Listings                                   |
| /listings                     |     POST      |        201, 401         | Creates New Listing                                            |
| /listings/:listingid          |     GET       |    200, 401, 404, 410   | Accesses A Specific Active Listing                             |
| /listings/:listingid          |     PATCH     |    204, 401, 404, 410   | Mutates A Specific Active Listing Created By User              |
| /listings/:listingid          |     DELETE    |    204, 401, 404, 410   | Flags A Specific Active Listing Created By User As Deleted     |

### Offers Endpoints
|      **Path**    | **HTTP Verb** | **Valid HTTP Statuses** |         **Controller Description**           |
| :--------------- | :-----------: | :---------------------: | :------------------------------------------- |
| /offers          |     GET       |        200, 401         | Get All Active Offers Created By User        |
| /offers/:offerid |     GET       |    200, 401, 404, 410   | Get Specific Offer Created By User           |
| /offers/:offerid |     PATCH     |    204, 401, 404, 410   | Mutate Specific Offer Created By User        |

### Admin API Endpoints
|      **Path**     | **HTTP Verbs** | **Valid HTTP Statuses** |     **Controller Description**            |
| :---------------- | :------------: | :---------------------: | :---------------------------------------- |
| /admin/u          |      GET       |                         | Gets A List Of All Users                  |
| /admin/u/register |      POST      |                         | Creates User & Sends Link To Set Password |
| /admin/u/:userid  |      GET       |                         | Gets A Specific User's Information        |
| /admin/u/:userid  |      PATCH     |                         | Mutates A Specific User's Information     |
| /admin/u/:userid  |      DELETE    |                         | Flags A Specific User As Deleted          |
