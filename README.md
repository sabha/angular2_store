# angular2_store
Angular2 beta demo application to explore all the news features like template syntaxt , new HTTP with RxJS , Pipes , Routes , Child Routes , Components.
<br><br>
API is written in Node , Database is MongoDB , and Data has been consumed from Northwind DB.<br><br>

mongoimport --db ngStore --collection category --type json --file backup/dump/category.json<br>
mongoimport --db ngStore --collection customer --type json --file backup/dump/customer.json<br>
mongoimport --db ngStore --collection employee --type json --file backup/dump/employee.json<br>
mongoimport --db ngStore --collection order --type json --file backup/dump/order.json<br>
mongoimport --db ngStore --collection orderDetail --type json --file backup/dump/orderDetail.json<br>
mongoimport --db ngStore --collection product --type json --file backup/dump/product.json<br>
mongoimport --db ngStore --collection shipper --type json --file backup/dump/shipper.json<br>
mongoimport --db ngStore --collection supplier --type json --file backup/dump/supplier.json<br><br>

After import run this code to conver date string to ISO date.
<code>
db.order.find().forEach(function(e){
    e.OrderDate=new Date(e.OrderDate);
    e.RequiredDate=new Date(e.RequiredDate);
    e.ShippedDate=new Date(e.ShippedDate);
    db.order.save(e);
});
</code>



