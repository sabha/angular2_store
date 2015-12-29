LICENSE


mongoimport --db <db-name> --collection <coll-name> --type json --file seed.json
--jsonArray
mongoimport --db chennaiflood --collection area --type json --file ChennaiAreaDetails.json --jsonArray

Excel to JSON
https://shancarter.github.io/mr-data-converter/

List of Pincode Website
http://finkode.com/tn/kanchipuram.html

RUN MONGO
./mongod

https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular

$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
$ chmod a+x mongod

./mongod

mongoimport -d ngStore -c category    --type csv --file backup/dump/categories.csv --headerline
mongoimport -d ngStore -c customer    --type csv --file backup/dump/customers.csv --headerline
mongoimport -d ngStore -c employee    --type csv --file backup/dump/employees.csv --headerline
mongoimport -d ngStore -c order       --type csv --file backup/dump/orders.csv --headerline
mongoimport -d ngStore -c orderDetail --type csv --file backup/dump/orderdetails.csv --headerline
mongoimport -d ngStore -c product     --type csv --file backup/dump/products.csv --headerline
mongoimport -d ngStore -c shipper     --type csv --file backup/dump/shippers.csv --headerline
mongoimport -d ngStore -c supplier    --type csv --file backup/dump/suppliers.csv --headerline

mongoexport --db ngStore --collection category --out backup/export/category.json
mongoexport --db ngStore --collection customer --out backup/export/customer.json
mongoexport --db ngStore --collection employee --out backup/export/employee.json
mongoexport --db ngStore --collection order --out backup/export/order.json
mongoexport --db ngStore --collection orderDetail --out backup/export/orderDetail.json
mongoexport --db ngStore --collection product --out backup/export/product.json
mongoexport --db ngStore --collection shipper --out backup/export/shipper.json
mongoexport --db ngStore --collection supplier --out backup/export/supplier.json

mongod --dbpath data --repair --repairpath data

http://dev.enchant.com/api/v1

http://devdocs.magento.com/guides/v2.0/rest/list.html

http://www.avactis.com/demo/

https://ng2store-sabhab1.c9users.io

https://coolors.co/app/f0b67f-fe5f55-d6d1b1-c7efcf-eef5db