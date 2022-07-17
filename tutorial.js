//  let b=36
//  let x=0
//    x=x+b
//     console.log(x)

//  let a = new Array(1,2,3,4,5)
//  //how to print no in  range and skip one point
//   let i=0
//  for(i=1;i<11;i++){
//   if(i==8){
//     continue;
//   }   
//    console.log(i); 
//  }

// reverse printing
// for(i=100;i>=10;i--){
//     if(i%10==0){
//         console.log(i)
//     }
// }

// function a1(){
//     let a=10
//     let b=20
//     let c=0
//     c=a+b
//     console.log(c)
// }
// a1()

//initializing array
// let arr= new Array(10,20,30,40,50);
// let x= 0;
// for(let i=0;i<arr;i++)
// {
//     x+= arr[i];
//     console.log(x);
// }

//initialize String type of array
// var1 = new Array("jags","arnav","baby hayat","vikky","komal","aloo");
// console.log(var1)

//user input
// let a=20;
// let b=10;
// console.log("which operation do u want to perform");
// console.log("1.add");
// console.log("2.subtract");
// console.log("3.multiply");
// console.log("4.divide")
// let x= prompt("enter a no");
// switch(x){
//     case 1: a=a+b;
//             console.log(a);
//             break;
//     case 2:a=a-b;
//             console.log(a);
//             break;
//     case 3:a=a*b;
//             console.log(a);
//             break;
//     case 4:a=a/b;
//              console.log(a);
//              break;
//     default: console.log("invalid choice");
//              break;

// }
// console.log(a);

//class program
// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//     // Getter
//     get area() {return this.Area();}
//     // Method
//     Area() { return this.height * this.width;}
//     get perimeter(){
//         return 2*this.height+2*this.width;
//     }
//   }
//   let rect = new Rectangle(10, 10);
//   console.log(rect.area); 
//   console.log(rect.perimeter);

//   class circle{
//      constructor(r){
//         this.r= r;  
//      }
//      get area(){return this.Area(); }
//         Area(){ return 3.14*this.r*this.r; }
    
//   }
//   let circle1 = new circle(10);
//     console.log(circle1.area);


//Initialize concat operation
// let arr1= new String("abc");
// let arr2= new String("def");
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// rest parameter i.e. triple dots -... //
// function sum(...input){
//     let sum = 0;
//     for(let i of input){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sum(1,2)); //3
// console.log(sum(1,2,3)); //6
// console.log(sum(1,9,5)); //15
// console.log(sum(1,2,3,4,5,5)); //20 
// console.log(sum(10,10,10)); //30


// INITIALIZE SPREAD
// concat with spread
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[...arr1,...arr2];
// console.log(arr3);

//for Each
// let a=[1,2,3];
// let b=[];
// a.forEach(function (fn){
//     b.push(fn+1);
// })
// console.log(b);

//map ex
// let a=[1,2,3];
// let b=[];
// a.map(function (fn){
//     b.push(fn+1);
// })
// console.log(b);

//problem wrong

// let a = [{name:"ritu raj", age: 20},{name:"shivani rani", age:22}];
// let b=[firstname, lastname]=a.map(function (fn){fn.name.split(" ");})
// console.log (b.firstname);
// console.log(b.lastname);

//problem how to split name in array by space
// let arr = [{name:"jagruti pancham", age:20}]
// let arr2= arr.map(ele=>{ let names= ele.name.split(" ");
// return {
// firstname: names[0],
// lastname: names[1],
// age: ele.age
// };
// })
// console.log(arr2);

// var promise = new Promise(function(resolve, reject) {
//     resolve('today we learnt new topics like promise ...restof');
// })
   
// promise
//     .then(function(Message) {
//               //success 
//         console.log(Message);//try
//     }, function(error) {
//         console.log(error);//catch
//     })

// var promise = new Promise(function(resolve, reject){
//     resolve("but pagalpanti bhi jaruri h bhaiiiii");
// })
// promise.then(function(msg){
//     console.log(msg);
// }
// .catch(function(error){
//     console.log(error);
// }))


//IIFE 
// (function (a){
//     var a;
//     console.log(a)
// })(10);


// const getData = async => {
// 	var data = "Hello World";
// 	return data;
// }
// getData().then(data => console.log(data));



