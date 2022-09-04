// let inputText = document.getElementById('email__input');
// // let button = document.getElementById('email__button');
// let messageError = document.getElementById('error__text');


// let email = document.getElementById('email');

// // inputText.addEventListener('submit', e => {
// //     e.preventDefault();

// //     let emailValue = email.value;

// //     if (!validateEmail(emailValue)) {
// //         messageError.style.display = "block";
// //     } else {
// //         messageError.style.display = "none";
// //     }
// // });

// // function validateEmail(email) {
// //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[[0-9]{1,3}]\.[[0-9]{1,3}]\] ) ))
// // }

// // let addMessage = () => {

// // }

// // let messageFunction = () => {
// //     button.addEventListener("click", () => {
// //         if (inputText.value = ' ') {
// //             messageError.style.display = "block";
// //          } else if (inputText.value = '1') {
// //             messageError.style.display = "none";
// //          }
// //       })
// // }


// messageFunction();


// let ValidMail = () => {
//     let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
//     let myMail = document.getElementById('email').value;
//     let valid = re.test(myMail);
//     if (valid) output = 'Адрес эл. почты введен правильно!';
//     else output = 'Адрес электронной почты введен неправильно!';
//     document.getElementById('message').innerHTML = output;
//     return valid;
// } 

// ValidMail();

// let email = document.getElementById("email");

// let regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;


// if (regexEmail.test(email.value)) {
//     alert("It's Okay")
// } else {
//     alert("Not Okay")

// }