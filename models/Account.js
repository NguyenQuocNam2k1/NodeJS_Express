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

for (let index = 0; index < 20; index++) {
  AccountModel.create({
    username: 'User_' + index,
    password:'123456'
  })
}

module.export = AccountModel