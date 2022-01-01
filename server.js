const express = require('express')
const app = express()

const path = require('path') //Dùng để nối các đường dẫn lại với nhau 
app.use("/public", express.static(path.join(__dirname , '/public'))) //Dòng này nghĩa là khi truy cập đển địa chỉ:
//localhost:3000/public thì server sẽ dẫn client đến folder này và toàn bộ fordel này sẽ được công khai

app.get('/',(req,res)=>{
    var duongDanFile = path.join(__dirname,"home.html")
    res.sendFile(duongDanFile)
})

app.listen(process.env.PORT , ()=>{})

