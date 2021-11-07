<!-- Bài 1 -->
NodeJS là 1 nền tảng (môi trường dùng để chạy những lệnh của JS)

Có 2 phiên bản là LTS là được sp lâu dài
Current là bản mà có nhiều tính năng mới nhưng đang trong giai đoạn test

<!-- Bài 2: Hướng dẫn exports , require-->
- Để export trong NodeJS ta sử dụng câu lệnh
=> module.exports = 

Ví dụ như sau: 
function add(number1 , number2){
    return number1 + number2;
}
module.exports = add;

- Ta dùng require để import được những file đã export
Ví dụ như sau: 
var test = require("./tool.js"); Trong đó file tool.js nằm trong cùng hàng với file đang import
var fs = require('fs'); Đây là các package đã có sẵn nên chỉ cần chỉ cần require vào là dùng được
var path = require('path');

- Package:
  + fs dùng đễ đọc , xử lý các file
  + path dùng để xử lý đường dẫn
    Ví dụ: var duongDan = path.join(__dirname, 'index.js'); 
    Với biến dirname là 1 biến global để lấy tên thư mục đang làm việc


<!-- Bài 3: Các thư viện cơ bản trong nodeJS -->
- npm là 1 kho tổng hợp tất cả các thư viện mà các dev đẩy lên
 npm init là tạo ra package.json
 + Library chalk là 1 thư viện dùng để console.log ra chữ có màu (npm i chalk)
 + node_modules là 
 + Library lodash dùng để xử lý logic , có nhiều hàm có sẵn giúp cho việc lập trình
 
