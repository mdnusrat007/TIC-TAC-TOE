//for loops

//let sum=0;
//let n=100;
//for(let i=0;i<=n;i++){
//    sum=sum+i;
//}
//console.log("adding numbers :" + sum );
/*
for (let i=1;i<=5;i++){
    console.log("i = " + i);
}
//the i doesnot prnt because its in the block scope of for loop.
console.log(i);*/

/*
//while loop
let i=1;
while(i<=5){
    console.log("i = ", i);
    i++
}*/


//do while loop
// let i=0;
// do{
//     console.log("i = ", i);
//     i++;
// }while(i<=5);

// for of loop

// let str="nusratulla";
// let sum=0;
// for(let i of str){
//     console.log("val = ", i);
//     sum++;
// }
// console.log("lenght of the name is " , sum);

// for in loops
// let student={
//     name:"nusratulla",
//     roll:51,
//     year:2020,
//     passed:true
// };
// for (let key in student){
//     console.log("key = " , key , "value = ", student[key]);
// }

//print even numbers upto 100.
// for (i=0;i<=100;i++){
//     if(i%2!==0){
//         console.log("value = ",i);
//     }
// }

//game using while loop
// let guessnum=25;
// let usernum=prompt("enter the your number:");
// while(guessnum != usernum){
//     usernum=prompt("you entered wrong number try again.");
// }
// console.log("congratulations you guessed the number its :" );

//template literals                                                                        -------Strings
// let obj={
//     pen:"fountain",
//     price:10
// };
// let str="nusratulla";
// console.log(typeof str.length);
// console.log( typeof str[2])
// console.log(typeof "the name of the pen is  ",obj.pen, "and price is",obj.price);
// console.log(`the name of th pen is ${obj.pen} and the price is ${obj.price}`); 

//esc characters in strings
// let str="mohammed\nusratulla"
// console.log(str);
// console.log(str.length);

//upper case lower case and trim.
// let str="     nusratTUlla"; //given string
// console.log(str);
// let newlstr=str.toLowerCase();  //lower case
// console.log(newlstr);
// let newustr=str.toUpperCase(); //uppercase
// console.log(newustr);
// console.log(str.trim()); //trim
// console.log(str.slice(1,9)); //slice
// console.log(newlstr.concat(newustr)); //concat or adding strings
// console.log(newlstr+newustr); //normal adding strings
// console.log(str.replace("nusrat","mohmad")); //replace strings
// console.log(str[9]);  //character search
// console.log(str.charAt(9)); //character search

//practice question

// let str=prompt("enter your name:");
// let len=str.length;
// console.log((`@${str}${len}`));

// //important
// let num=prompt("enter the number:");
// let sum=0;
// for (let i=1;i<=num;i++){
//     if(i%5==0||i%7==0){
//         sum=sum+1;
//     }
// }
// console.log(sum);

// //arrays for loop
// let gross=["hyderabad","delhi","mumbai","gurgaon","vijayawada"];

// for (let i=0;i<gross.length;i++){
//     console.log(gross[i]);
// }

// //for of loop
// for (let i of gross){
//     console.log(i.toUpperCase());
// }

// //for in loop
// for (let i in gross){
//     console.log(i);
// }

// //practice question.
// let stu=[85,97,44,37,76,60];
// let sum=0;
// for (let i of stu){
//     sum=sum+i;
// }
// let avg=sum/stu.length;
// console.log(`the average marks of the students is ${avg}`);

// //practice question
// let stu=[85,97,44,37,76,60];
// let i=0;
// for (let val of stu){
//     let offer=val/10;
//     stu[i]=stu[i]-offer;
//     console.log(stu[i]);
//     i++;
// }

// //practice questions
// let marks=[94,92,85,78,96,87];
// for ( let i=0;i<marks.length;i++){
//     let offer=marks[i]/10;
//     marks[i] -= offer;
// }
// console.log(marks);

// // push,pop,to  string
// let veg=["tomatos","potatos","apples","mangos"];
// let marks=[40,895,894,9348];
// console.log(veg);
// console.log(veg.toString());
// console.log(marks);
// marks.push(5676);
// console.log(marks);

//concat,slice,splice
// let marvel=["iron-man","ant-man","spider-man","super-man","bat-man","deadpool","hawkeye"];
// let superm=["thor","hella","loki"];
// let indianheroes=["saktiman"];
// let allheroes=marvel.concat(superm,indianheroes); //concat strings in arrays.
// console.log(allheroes.toString());
// console.log(marvel);
// console.log(superm);
// marvel.unshift("heman"); //adding in the starting of array.
// marvel.shift();          //deleting from the begining.
// marvel.push("sheman");   //adding at the end of the array.
// marvel.pop();            //deleting from the end of the array.
// console.log(marvel);
// console.log(marvel.slice(1,3))      //slicing the arrays.


// let arr=[1,2,3,4,5,6,7,8,9];         
// arr.splice(2,2,102,103);           //syntax: starting,deleting,adding.
// console.log(arr);     

// arr.splice(2,0,102);
// console.log(arr);        //adding an array.

// //practie question
// let arr=["bloomberg","microsoft","uber","google","ibm","netflix"];
// arr.shift();
// arr.splice(1,1,"ola");
// arr.push("amazon");
// console.log(arr);

// chapter 5
// functions and methods

// function myfunction(){
//     console.log("hi mr muhammed");
//     console.log("its an honorto meet you in heaven");
// }
// myfunction();   

// function myfunction(msg){
//     console.log(msg);                             NAn // not a number
// }
// myfunction("i hate programming");

// function  sum(x,y){
//     s=x-y;
//     return s;
// }
// let val=sum(3,7);
// console.log(val);

// arrow function
// const sum=(x,y)=>{
//     console.log(x+y);
//     return x;
// };

//multiplication

// const mul=(a,b)=>{
//     return a+b;
// };

// //vowels finder with normal function.

// function vowels(str){
//     let count=0;
//     for(let  Char of str){
//         if(Char==="a"||Char==="e"||Char==="i"||Char==="o"||Char==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// find vowels with arrow functions.

// const vowelsfun=(str)=>{
//     let count=0;
//     for (let char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// //forEach call back function

// let num=[1,2,3,4,5];

// num.forEach(function printval(val){
//     console.log(val);
// });

//arrow function  primary call back function
// let num=[1,2,3,4,5];

// num.forEach((val)=>{
//     console.log(val);
// });

// //string

// let num=["sdfdsfs","sfsdfs","hshsh","ggdgger"];

// num.forEach((val,idx,arr)=>{
//     console.log(val[2].toUpperCase(),val[3],idx,arr);
// });

// //pratice qiestion
// let arr=[2,4,6,8,10];

// arr.forEach((val)=>{
//     console.log("The square of this value is:",val*val);
// });

// //map to print

// let nums=[1,2,6,3,7];

// let newarr=nums.map((val)=>{
//     return val*2;                        //return new values
// });
// console.log(newarr);                   // Prints new array
 
//filter function in array

// let aed=[2,3,6,4324,535,10];

// let newaed=aed.filter((val)=>{
//     return val%2===0;                  //filter everything in the array by condition.
// });
// console.log(newaed);                // printing the return value.

//reduce array methods.

// let num=[1,2,3,4];

// const output=num.reduce((res,cur)=>{
//     return res>cur?res:cur;                    //if res greater(>) than cur return(?) res else(:) return cur.
// });
// console.log(output);

// //practice question 
// let marks=[94,54,96,86,93,36];

// let toppers=marks.filter((val)=>{
//     return val>90;
// });
// console.log(toppers);

// //pratice questions
// let n=prompt("enter a number:");                   //printing reduced arrays.
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log("reduced array is:",arr);

// const sum=arr.reduce((res,cur)=>{                      //sum using reduce.
//     return res+cur;                                 
// });
// console.log("the sum of the numbers is:",sum);

// const factorial=arr.reduce((res,cur)=>{
//     return res*cur;                                           //product using reduce.
// });
// console.log("the product of the numbers is",factorial);

//array comparision

// Array.prototype.includesOneOf = function(arr) {
//     if (arr.length === 0) {
//       return false;
//     }
//     return arr.some(element => this.includes(element));
//   };
//   const arr = [1, 2, 3, 4, 5,"apple", 6];

// console.log(arr.includesOneOf([2, 8, 10])); // true, because 2 is in arr
// console.log(arr.includesOneOf([10, 11, 12])); // false, none of these are in arr
// console.log(arr.includesOneOf(["apple"])); // false, as the input array is empty
// console.log(arr.includesOneOf([]));


// //dom(DOCUMENT OBJECT model)
// let header=document.getElementById("heading");
// console.dir(header);

// let headings=document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// let newp=document.getElementsByTagName("p");
// console.dir(newp);
// console.log(newp);

// let firstelements=document.querySelector("p");
// console.dir(firstelements);


// let elements=document.querySelectorAll("p");
// console.dir(elements);

// let tags=document.querySelectorAll(".heading-class");
// console.dir(tags);

// let myclass=document.querySelector(".heading");
// console.dir(myclass);

// let element=document.querySelector("div");
// console.dir(element);
 
// let h1=document.querySelector("h1");
// console.dir(h1.innerText);
// h1.innerText=h1.innerText + "apna college and nusrath!";

// let divs=document.querySelectorAll(".box");
// divs[0].innerText="new value 1";
// divs[1].innerText="new value 2";
// divs[2].innerText="new value 3";
                                                                     //attribtes in DOM
// let para=document.querySelector("h1");
// console.log(para);                                               //get attributes
// let clas=para.getAttribute("name");
// console.log(clas);  

// let para=document.querySelector("h1");
// console.log(para);                                                //set attributes
// let id=para.setAttribute("class","money");
// console.log(id);


//adding element prepend,append,before and after.
// let el=document.createElement("div");
// el.innerText="newdiv";
// let divs=document.querySelector("div");
// divs.after(el);

// //removing element
// let heading=document.querySelector("ul");
// heading.removeChild(heading.children[0])

//practice questions.
// let newbtn=document.createElement("button");
// newbtn.innerText="click me!";
// newbtn.style.color="white";
// newbtn.style.backgroundColor="red";

// document.querySelector("body").prepend(newbtn);

// //practicee questions
// let para=document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));         //replaces class
// para.classList.add("content","reduce");                      //adds class
// para.classList.remove("reduce");                                //removes class


// let btn1=document.querySelector("#btn1");
// btn1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     // console.log("btn was clicked");
//     // let a=25;
//     // a++;
//     // console.log(a);
// }

// practice daaark light mode.
// let btn1=document.querySelector("#btn1");
// let currmode="light";
// let body=document.querySelector("body");

// btn1.addEventListener("click" ,()=>{
//     if(currmode==="light"){
//         currmode="dark";
//         body.classList.add("dark");
//         body.classList.remove("white");
//     } else{
//         currmode="light";
//         body.classList.add("white");
//         body.classList.remove("dark");
//     }
//     console.log(currmode);
// });

let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;
let count=0;    
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame=()=>{
    turno=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turno){
            box.innerText="o";
            box.style.color="blue";
            turno=false;
        } else {
            box.innerText="x";
            box.style.color="red";
            turno=true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkwinner();
    
        if (count === 9 && !isWinner) {
          gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableboxes();
  };

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showwinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disableboxes();
};

const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!=""  && pos3val!=""){
            if (pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
                return true;
            }
        }
    }
};



resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);

