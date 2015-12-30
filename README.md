# angular2_store
This demo application is build to explore all the news features in Angular2 like Component , Typescript , new HTTP with RxJS , Pipes , Routes , Child Routes , Components and new template syntax (?   #   *   []   ()   [()]).
<br><br>
API is written in Node , Database is MongoDB , and Data has been consumed from Northwind DB.

### Import Northwind DB
```sh
mongoimport --db ngStore --collection category --type json --file backup/dump/category.json<br>
mongoimport --db ngStore --collection customer --type json --file backup/dump/customer.json<br>
mongoimport --db ngStore --collection employee --type json --file backup/dump/employee.json<br>
mongoimport --db ngStore --collection order --type json --file backup/dump/order.json<br>
mongoimport --db ngStore --collection orderDetail --type json --file backup/dump/orderDetail.json<br>
mongoimport --db ngStore --collection product --type json --file backup/dump/product.json<br>
mongoimport --db ngStore --collection shipper --type json --file backup/dump/shipper.json<br>
mongoimport --db ngStore --collection supplier --type json --file backup/dump/supplier.json<br><br>
```
After import run this code to conver date string to ISO date.
```sh
db.order.find().forEach(function(e){
    e.OrderDate=new Date(e.OrderDate);
    e.RequiredDate=new Date(e.RequiredDate);
    e.ShippedDate=new Date(e.ShippedDate);
    db.order.save(e);
});
```
### Usage

```sh
$ npm install
Start Mongo
$ npm start
```



