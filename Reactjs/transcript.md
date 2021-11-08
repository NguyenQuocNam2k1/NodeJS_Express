// Toán tử rest
function logger(a,b,...params){
console.log(a); // 1
console.log(b); // 2
console.log(params); // 3,4
}

logger(1,2,3,4)

// Destructuring
var array = ['Javascipt' , 'PHP' , 'Ruby'];
var [a,b,c] = array;
console.log(a); //Javascript
console.log(b); //PHP
console.log(c); //Ruby

var course = {name:"Javascript" , price:1000 , children:{name:"Reactjs"}};
var {name:parentName, price , children:{name:childrenName , description = "default"}} = course;
// name:parentName nghĩa là lấy thằng name ra xong đổi tên biến thành parentName
// description = "default" nghĩa là khi trong obj không có desciption thì nó sẽ lấy thằng mặc định là default làm giá trị
console.log(name);
console.log(price);

// Spread()
const test = ["test1" , "test2" , "test3"];
const TEST = ["TEST1" , "TEST2" , "TEST3"];
console.log(...test); // test1 , test2 , test3 Toán tử spread sẽ bỏ dấu [] khi là array , {} khi là obj
// Dùng ... dùng đế truyền đối số thì đgl spread() , còn khi nó được dùng để nhận đối số thì đgl rest

function nam(...param){ //rest
console.log(...param); //spread
}
nam(1,2,3,4,5,6,7,8)

// Bài 8: document.CreatElement()

<!-- Bài 10: React.createElement() nữa là sao? -->

- React.createElement() tạo ra React element
- document.createElement() tạo ra 1 DOM element

const h1Dom = document.createElement('h1');
h1Dom.title = 'Hello';
h1Dom.className = "heading"
h1Dom.innerText = "Hello guys!"
document.body.appendChild(h1Dom);
appendChild là nhé thằng h1Dom vào làm thằng con của body
================

<!-- React.createElement(type, props, children,...) -->
       const h1React = React.createElement('h1',
        {
            title:'Hello',
            className:'heading'
        }
        , 'Hello');


<!-- Example 2 -->
<ul>
  <li>Javascript</li>
  <li>ReactJS</li>
</ul>

=====

const ulReact = React.creatElement(
    'h1',
    null,
    React.creatElement('li',null,'Javascript'),
    React.creatElement('li',null,'Reactjs')
)


<!-- Bài 11: React-DOM -->
Dùng để render react element sang html

        ReactDOM.render(ul, root)
        với root là rootElement của html dùng để chưa những thằng reactElement

<!-- Bài 12: JSX -->
Thư viện Babel dùng để chuyển đổi chuyển đổi jsx sang javascript

