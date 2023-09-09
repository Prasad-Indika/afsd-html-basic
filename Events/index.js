console.log("Helloo");

var golabal = 10;

function myFunction (){
    console.log("Hellooo..its a fun..");
    alert("Clicccccked");
}

function func1(){
   const num1 = document.getElementById("num1").value;
   const num2 = document.getElementById("num2").value;
  
   if(num1 == num2){
    console.log("Success...");
   }else{
    console.log("Fail");
   }
}

function greaterThan(){
   const num1 = parseInt(document.getElementById("num3").value);
   const num2 = parseInt(document.getElementById("num4").value);

   if(num1>num2){
        console.log("num1");
   }else{
        console.log("num2");
   }
  
}

function addition(){
    const num = document.getElementById("number").value;
    var sum = 0;
    for(let i=0; i<num.length; i++){
         sum = sum + parseInt(num[i]);
    }
    console.log(sum);
}

function abc(){

     var  elemnt = document.getElementById("txt");
     var btn = document.getElementById("btn1");
     

     //elemnt.disabled = true;
     if(elemnt.disabled){
          elemnt.disabled = false;
          btn.textContent = "Click for Disable";
         
     }else{
          elemnt.disabled = true;
          //btn.textContent = "Click for Enable";
          btn.innerHTML = "New";
     }

}


function grade() {
     
     const mark = parseInt( document.getElementById("mark").value);
     var grade = "";

     if(mark>=75){
          grade = "A";
     }else if(mark>=65){
          grade = "B";
     }else if(mark>=45){
          grade = "A";
     }else if(mark>=35){
          grade = "S";
     }else{
          grade = "Fail";
     }

     console.log("Student grade is " + grade);

}


function results() {
     
     const mark1 = parseInt( document.getElementById("mark1").value);
     const mark2 = parseInt( document.getElementById("mark2").value);
     

     if(mark1>=50 && mark2>= 50){
          console.log("A");
     }else if(mark1>=50 || mark2>=50){
          console.log("B");
     }else{
          console.log("C");
     }


}



function jobTitle(){

     const val =  document.getElementById("jobTitle").value;

     switch (val) {
          case "intern":
               console.log("Intern software engineer");
               break;
          
          case "AFS":
               console.log("Associate software engineer");
          break;

          case "SE":
               console.log("software engineer");
               break;
          
          case "SSE":
               console.log("Senior software engineer");
          break;

          case "ATL":
               console.log("Associate Tech Lead");
               break;
          
          case "TL":
               console.log("Tech Lead");
          break;
     
          default:
               break;
     }

}

var u_name = "prasad"
var p_word = "1234"

const userlogin = () =>{
    var uname = (document.getElementById("uname").value);
    var pword = document.getElementById("pword").value;

    if(u_name==uname && p_word==pword){
          alert("Login success");
    }else{
          alert("Incorect username or password");
    }


}


const getLetters = () =>{
     var val = document.getElementById("user-text").value;

     var textLetters = '';
     for(let i = 0;i<val.length;i++){
          textLetters += val.charAt(i) + " ";
     }

     document.getElementById("dsplay").innerHTML = textLetters;
}



var randomNumbers = [];

const loadRandomNumbers = () => {

     
     for(let i = 0;i<50 ; i++){
          num = Math.floor((Math.random()*100) + 1 ); 
          randomNumbers[i] = num;
          
     }

     document.getElementById("text-random").innerHTML = randomNumbers;
     
}

const filterNumbers = () => {
     inputNumber = document.getElementById("random-text").value;
     const filtrNum = randomNumbers.filter(num => num % inputNumber === 0);
     document.getElementById("filter-text-random").innerHTML = filtrNum;
}




