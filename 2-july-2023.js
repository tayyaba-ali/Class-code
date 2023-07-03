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

var lessText = '';
function getData() {
	
	var para = document.getElementById('para');
	var fullText =
		' <b>laboriosam </b>aspernatur rem facilis beatae alias illum quisquam vel consequatur sequi nostrum veniam id sit, explicabo officia expedita.';
	var btn = document.getElementById('btn');
    if (lessText) {
        para.innerHTML = lessText;
        btn.innerText = "See More";
        lessText = '';
	} else {
		lessText = para.innerHTML;
		para.innerHTML += fullText;

		btn.innerText = 'See less';
	}
}