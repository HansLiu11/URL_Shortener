# :link: URL_shorter

## :page_with_curl: Description
This is an URL shortener with two APIs:
1. A RESTful API to upload a URL with its expired date: 

    ```json=
    {
        "url": "https://www.facebook.com/",
        "expireAt": "2021-02-08T09:20:41Z"
    }
    ```
    response:
    ```json=
    {
        "id": "1",
        "shortUrl": "http://localhost/1"
    }
    ```
2. An API to serve shorten URLs responded by upload API, and redirect to original URL.
    - Request:
         http://localhost/{url_id} 
        - ex: http://localhost/1
    - Response:
        REDIRECT to original URL

## :toolbox: Prerequisite
- MySQL database (cloud or local)
- Node.js

## :gear: Install Package
```shell=
$ npm install
```

## :star: Start
```shell=
$ npm start
```

