print("Excecuting Mongo Query from query.js");
var result = db.order.aggregate([
    {$project : {
         varyear : {$year : "$OrderDate"}, 
         varmonth : {$month : "$OrderDate"},
         varOrderId : "$OrderID"
    }},
    {$group : {
         _id : {year : "$varyear", month : "$varmonth"},
         orderID:{$addToSet:"$varOrderId"},
         count : {$sum : 1}
    }},
    {$sort:{"_id.year":1 , "_id.month":1}}]
)
//var result = db.order.aggregate([{ $group:{ _id:{$year:"$OrderDate"}}},{ $sort:{_id:1}}]);
print(JSON.stringify(result.toArray()));



//print(JSON.stringify(result.toArray(),null,4));
//print(JSON.stringify(result.next(),null,4));

