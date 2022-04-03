# :link: URL_shorter
## 思路說明
將request的資料存入MySQL DB，並利用MySQL每筆資料有unique id的特性來產生short url; 而每個url時效性的部分，則是使用cronjob，在每天0:00刪除資料庫中過期的url，以保證過期的url不會被access到

1. 使用Database是因為將資料存取，之後再拿出來會比較方便，同時也可以保證資料不會丟失。而之所以選擇MySQL，一方面是保持資料一致性，另一方面是因為之前常在用MySQL，對MySQL比較熟悉
2. 使用`sequelize`這個MySQL ORM 工具是為了避免直接使用SQL語法對DB做操作，同時也是想試著學習新的工具(之前專案用過typeORM)
3. `cron`套件是為了做cronjob，選擇的原因是因為簡單好用，且有立即執行的功能
4. `mocha` 套件是用來做unit test，選擇的原因是因為github星星數，而且想學習使用`jest`以外的新工具

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

