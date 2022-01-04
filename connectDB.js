const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/K5-Nodemy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    username: String,
    password: String,
    age: Number,
    salary: Number
  },
  {
    collection: "Account",
  }
);

const AccountModel = mongoose.model("account", accountSchema);


// AccountModel.create({
//     username: "Student1",
//     password: 1234,
//     age: 19,
//     salary: 10000
// },{
//     username: "Student2",
//     password: 1235,
//     age: 19,
//     salary: 20000
// },{
//     username: "Student3",
//     password: 1236,
//     age: 19,
//     salary: 30000
// },{
//     username: "Student4",
//     password: 1237,
//     age: 19,
//     salary: 40000
// },{
//     username: "Student5",
//     password: 1238,
//     age: 19,
//     salary: 50000
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

AccountModel.find({
    "age": { $gt : 16 }
})
.then(data =>{
    console.log(data)
})
.catch(err =>{
    console.log("Err", err);
})
// .pretty()ndoe