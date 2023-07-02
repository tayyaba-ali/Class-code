// var userPassword = prompt("Enter your number");
// var validpassword = "Tayyaba123";
// var i=0;

// while (userPassword !== validpassword) {

//     userPassword = prompt("Enter your password");
//     i++;

// }

// document.write("Correct Password")


// function singHappyBirthday(name){
//     alert(name)
// }


// function getValue(){
//    var userInput= document.getElementById("userValue");
//    if(userInput.value.trim() ===""){
//     alert("This field can't be empty")
//    }
//    else{
//     console.log(userInput.value);
//    }
//     // console.log(userInput.value);
// }

//  function fillCity() {
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch (zipEntered) {
//     case "60608" :
//     cityName = "Chicago";
//     break;
//     case "68114" :
//     cityName = "Omaha";
//      break;
//      case "53212" :
//      cityName = "Milwaukee";
//      }
//      document.getElementById("city").value = cityName;
//      }


function getData() {

    var lessText='';
    var fullText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus enim, adipisci rerum aperiam obcaecati cupiditate rem asperiores iure. Dolor iure, earum minima explicabo natus ipsa mollitia necessitatibus placeat fuga fugit.'
    var para = document.getElementById("para");


    if(lessText){
        lessText=para.innerHTML ;
        para.innerHTML= fullText;
    }
    else{
        para.inner
    }

    // console.log(para.innerHTML);
    // console.log(para.innerText);
}