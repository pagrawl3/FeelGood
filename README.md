FeelGood
=========

API
----
The API is currently hosted on an Amazon EC2 Server. Foe ease of use I've routed the IP through my domain. The Apex is http://feelgood.prath.am/

There are currently 4 API end points.
The random quote spitter is WIP

All the requests made to the server must use the POST protocol. The server's response is in JSON format.

**Create User**
----
  Creates a user in the server's database and returns the data as well

* **URL**

  `/users/create`

* **Method:**

  `POST`
  
*  **URL Params**
 
   `username=[string]` <br>
   `hash    =[hashed password]` <br>
   `email   =[email]` <br>

* **Success Response:**

    ```json
    {
      "success": true,
      "user": {
          "__v": 0,
          "username": "pagrawl32",
          "hash": "blah",
          "email": "mail@prath.am2",
          "_id": "528bcd075042fd9136000006",
          "dailygoods": []
      }
    }
    ```
 
* **Error Response:**

  ```json
  {
    "success": false,
    "error": "Internal Save Error Occured"
  }
  ```

<hr>

**Retrieve User**
----
  Retrieves all user information from the database including the dailygoods

* **URL**

  `/users/retrieve`

* **Method:**

  `POST`
  
*  **URL Params**
 
   `username=[string]` <br>
   `hash    =[hashed password]` <br>

* **Success Response:**

    ```json
    {
      "success": true,
      "user": {
          "__v": 3,
          "_id": "528bc79a5042fd9136000001",
          "email": "mail@prath.am",
          "hash": "blah",
          "username": "pagrawl3",
          "dailygoods": [
              {
                  "username": "pagrawl3",
                  "dailygood": "had a great day",
                  "_id": "528bc7bb5042fd9136000002",
                  "__v": 0,
                  "date": "2013-11-19T20:19:07.594Z"
              },
              {
                  "username": "pagrawl3",
                  "dailygood": "woah it works!",
                  "_id": "528bc7c75042fd9136000003",
                  "__v": 0,
                  "date": "2013-11-19T20:19:19.142Z"
              },
              {
                  "username": "pagrawl3",
                  "dailygood": "woah it works2!",
                  "_id": "528bcc325042fd9136000004",
                  "__v": 0,
                  "date": "2013-11-19T20:38:10.431Z"
              }
          ]
      }
    }
    ```
 
* **Error Response:**

  ```json
  {
    "success": false,
    "error": "Please send a valid username/hash"
  }
  ```

<hr>

**Create DailyGood**
----
  Creates a dailygood for the given username and links it to that user

* **URL**

  `/dailygoods/create`

* **Method:**

  `POST`
  
*  **URL Params**
 
   `username = [string]` <br>
   `hash = [hashed password]` <br>
   `dailygood = [string]` <br>
   `date = [timestamp]` \\WIP, optional <br>
    

* **Success Response:**

  ```json
  {
    "success": true,
    "dailygood": {
        "__v": 0,
        "username": "pagrawl3",
        "dailygood": "woah it works2!",
        "_id": "528bcc325042fd9136000004",
        "date": "2013-11-19T20:38:10.431Z"
    }
  }
  ```
  
 
* **Error Response:**

  ```json
  {
    "success": false,
    "error": "Username/Hash Incorrect"
  }
  ```
  
<hr>

**Retrieve all DailyGoods**
----
  Retrieves all the dailygoods associated with a user

* **URL**

  `/dailygoods/retrieve`

* **Method:**

  `POST`
  
*  **URL Params**
 
   `username = [string]` <br>
   `hash = [hashed password]` <br>
    
* **Success Response:**

  ```json
  {
    "success": true,
    "dailygoods": [
        {
            "username": "pagrawl3",
            "dailygood": "had a great day",
            "_id": "528bc7bb5042fd9136000002",
            "__v": 0,
            "date": "2013-11-19T20:19:07.594Z"
        },
        {
            "username": "pagrawl3",
            "dailygood": "woah it works!",
            "_id": "528bc7c75042fd9136000003",
            "__v": 0,
            "date": "2013-11-19T20:19:19.142Z"
        },
        {
            "username": "pagrawl3",
            "dailygood": "woah it works2!",
            "_id": "528bcc325042fd9136000004",
            "__v": 0,
            "date": "2013-11-19T20:38:10.431Z"
        }
    ]
  }
  ```
  
 
* **Error Response:**

  ```json
  {
    "success": false,
    "error": "Username/Hash Incorrect"
  }
  ```
  
**Create a weekly (Weekly Challenge + Quote)**
----
  Allows a weekly to be uploaded

* **URL**

  `/weekly/create`

* **Method:**

  `POST`
  
*  **URL Params**
 
   `week = [Number]` <br>
   `quote = [String]` <br>
   `challenge = [String]` <br>
    
* **Success Response:**

  ```json
  {
    "success": true,
    "weekly": {
        "__v": 0,
        "challenge": "Ask someone how they are doing, really doing. Take the time to get an honest and thorough
                      response.",
        "quote": "Life is 10% what happens to me and 90% of how I react to it. –John Maxwell",
        "week": 3,
        "_id": "52a788e30f8fe85707000003"
    }
  }
  ```
  
 
* **Error Response:**

  ```json
  {
    "success": false,
    "error": "Please send all required parameters"
  }
  ```

**Retrieve a single weekly or all weeklies (Weekly Challenge + Quote)**
----
  Allows a weekly to be retrieved. If no week is specified, all weeklies are retrieved.

* **URL**

  `/weekly/retrieve`

* **Method:**

  `POST`
  
*  **URL Params**
 
   `week = [Number] -- OPTIONAL` <br>
    
* **Success Response:**

  <h5> NO WEEK SPECIFIED </h5>
  ```json
  {
    "success": true,
    "weekly": [
        {
            "challenge": "Make a list of 25 things you are grateful for.  Put this somewhere you'll see it.",
            "quote": "Strive not to be a success, but rather to be of value. –Albert Einstein",
            "week": 1,
            "_id": "52a787690f8fe85707000001",
            "__v": 0
        },
        {
            "challenge": "Write someone a note and deliver it to them secretly. ",
            "quote": "We become what we think about. –Earl Nightingale",
            "week": 2,
            "_id": "52a787a70f8fe85707000002",
            "__v": 0
        },
        {
            "challenge": "Ask someone how they are doing, really doing.  Take the time to get an honest
                          and thorough response.",
            "quote": "Life is 10% what happens to me and 90% of how I react to it. –John Maxwell",
            "week": 3,
            "_id": "52a788e30f8fe85707000003",
            "__v": 0
        }
    ]
  }
  ```
  
  <h5> WEEK 3 SPECIFIED </h5>
  ```json
  {
    "success": true,
    "weekly": {
        "challenge": "Ask someone how they are doing, really doing.  Take the time to get an honest
                      and thorough response.",
        "quote": "Life is 10% what happens to me and 90% of how I react to it. –John Maxwell",
        "week": 3,
        "_id": "52a788e30f8fe85707000003",
        "__v": 0
    }
  }
  ```
