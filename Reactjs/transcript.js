// Toán tử rest 
function logger(a,b,...params){
    console.log(a);        // 1
    console.log(b);        // 2
    console.log(params);   // 3,4
}

logger(1,2,3,4) 

//  Destructuring
var array = ['Javascipt' , 'PHP' , 'Ruby'];
var [a,b,c] = array;
console.log(a);  //Javascript
console.log(b); //PHP
console.log(c);  //Ruby

var course = {name:"Javascript" , price:1000 , children:{name:"Reactjs"}};
var {name:parentName, price , children:{name:childrenName , description = "default"}} = course;
// name:parentName nghĩa là lấy thằng name ra xong đổi tên biến thành parentName
// description = "default" nghĩa là khi trong obj không có desciption thì nó sẽ lấy thằng mặc định là default làm giá trị
console.log(name);
console.log(price);

// Spread()
const test = ["test1" , "test2" , "test3"];
const TEST = ["TEST1" , "TEST2" , "TEST3"];
console.log(...test); // test1 , test2 , test3 Toán tử spread sẽ bỏ dấu [] khi là array  , {} khi là obj
// Dùng ... dùng đế truyền đối số thì đgl spread() , còn khi nó được dùng để nhận đối số thì đgl rest


function nam(...param){ //rest
    console.log(...param); //spread
}
nam(1,2,3,4,5,6,7,8)


// Bài 8: document.CreatElement()
