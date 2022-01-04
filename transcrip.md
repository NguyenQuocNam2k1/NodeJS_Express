<!-- Bài 4:Middleware -->
const check = (req , res, next)=>{
    req.params
    next() //Cách dùng next . Trong trường hợp test/test2 thì nó sẽ nhảy xuống thằng middleware bên dưới và render ra Home
}

app.get('/:id' , check , 
(req, res ,next)=>{

})

app.get('/:test/:test2', check , (req,res,next)=>{
 res.json('Home')
})

+ check là 1 middleware , trong trường hợp này req.params có thể là id và test/test2 , Khi thằng next được dùng thì nó sẽ nhảy xuống cổng thứ 2
+ Trong trường hợp dùng next() mà bên dưới nó không còn middleware nào khác thì nó sẽ bị treo ở middleware hiện tại 
+ Luôn có 1 thằng middleware 4 tham số như sau:

app.use((err,req,res,next)=>{
    //Tham số err sẽ được nhận từ thằng next("...") bên trên nó .THƯỜNG THÌ MIDDLEWARE này dùng để xử lý khi gặp lỗi
})

<!-- Cách sử dụng method GET,POST,PUT,DELETE chuẩn Restful API -->
+ Lưu ý: Khi gửi 1 method đi thì phải có header và body
 header: req.header() để truy cập
 body: Đầu tiên cần cài package body-parser sau đó dùng: req.body
+ Method Get() được dùng khi lấy dữ liệu từ database
+ Method post() khi thêm mới dữ liệu vào db
+ Method Put() dùng để sửa dữ liệu trong db
+ Method Delete() dùng để xóa dữ liệu trong databse


<!-- Bài 8: Luyện tập express static , thiết lập file tĩnh , public file trong ExpressJS -->
+server.js
 const express = require('express')
const app = express()
const port = 3000

const path = require('path') //Dùng để nối các đường dẫn lại với nhau 
app.use("/public", express.static(path.join(__dirname , '/public'))) //Dòng này nghĩa là khi truy cập đển địa chỉ:
//localhost:3000/public thì server sẽ dẫn client đến folder này và toàn bộ fordel này sẽ được công khai

app.get('/',(req,res)=>{
    var duongDanFile = path.join(__dirname,"home.html")
    res.sendFile(duongDanFile)
})

app.listen(port , ()=>{console.log(`Listen server PORT = ${port}`)})

+ home.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./public/home.css">
</head>
<body>
    <h1>Home</h1>
</body>
</html>

+public/home.css
h1{
    color: red;
}


<!-- Những câu lệnh trong mongoose -->
+ find() là câu lệnh tìm db theo điều kiện
  AccountModel.find({})
   .then((data) => {
     console.log("data", data);
   })
   .catch((err) => {
     console.log("ERR:", err);
   });


+ create() them dữ liệu vào DB
  AccountModel.create({
    username:"Nguyen",
    password:270720012
  }).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })


+ update() sửa dữ liệu trong DB
   + updateMany() là method update nhiều document cùng 1 lúc
   <!--  -->
   AccountModel.updateMany(
    {
        username:'Nguyen Nam',
        password:270720012
    },
    {
        username:"Nguyen Nam 1"
    }
).then(data =>{
    console.log('data',data)
}).catch(err =>{
    console.log('err' , err);
  })
  <!--  -->
   + updateOne() là method update chỉ một document đầu tiên tìm thấy
   <!--  -->
   AccountModel.updateOne(
    {
        username:'Nguyen Nam',
        password:270720012
    },
    {
        username:"Nguyen Nam 1"
    }
).then(data =>{
    console.log('data',data)
}).catch(err =>{
    console.log('err' , err);
})
<!--  -->

+ delete() xóa dữ liệu trong DB
  + deleteMany() là xóa cùng 1 lúc nhiều documen
  <!--  -->
  AccountModel.deleteMany(
    {
        username:'Nguyen Nam'
    },
).then(data =>{
    console.log('data',data)
}).catch(err =>{
    console.log('err' , err);
})
<!--  -->

  + deleteOne() là xóa 1 document đầu tiên nhìn thấy
  <!--  -->
  AccountModel.deleteOne(
    {
        username:'Nguyen Nam'
    },
).then(data =>{
    console.log('data',data)
}).catch(err =>{
    console.log('err' , err);
})
<!-- Biểu thức trong mongoose -->
 + skip() là method bỏ qua bao nhiêu kết quả tìm thấy
 + limit() là method giới hạn số DB lấy ra từ trong DB
 + sort() sắp xếp kết quả trả về theo điều kiện
<!-- OPARETOR in mongoose -->
Có thể xem ở nguồn này: bmc.com/blogs/mongodb-operators/