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

mongoimport -d ngStore -c category    --type csv --file backup/csv/category.csv --headerline
mongoimport -d ngStore -c customer    --type csv --file backup/csv/customer.csv --headerline
mongoimport -d ngStore -c employee    --type csv --file backup/csv/employee.csv --headerline
mongoimport -d ngStore -c order       --type csv --file backup/csv/order.csv --headerline
mongoimport -d ngStore -c orderDetail --type csv --file backup/csv/orderDetail.csv --headerline
mongoimport -d ngStore -c product     --type csv --file backup/csv/product.csv --headerline
mongoimport -d ngStore -c shipper     --type csv --file backup/csv/shipper.csv --headerline
mongoimport -d ngStore -c supplier    --type csv --file backup/csv/supplier.csv --headerline




