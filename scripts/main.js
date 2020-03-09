
let myButton = document.querySelector('button');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    var myHeading = document.querySelector('h1');
    alert("name is " + myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }


myButton.onclick = function()
{
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    var myHeading = document.querySelector('h1');
    alert("name is " + myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}


//myHeading.textContent = 'Hello world!';
// alert("some some");

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

  multiply(4, 7);
multiply(20, 20);
let res = multiply(0.5, 3);
// alert(res);
// if(!localStorage.getItem('name')) {
//     setUserName();
//   } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
//   }

