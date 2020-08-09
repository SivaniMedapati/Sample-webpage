/***let a = 'hello buddy!';
alert(a); 

alert(10-1);
let a = 10; b = 30; let sum = a + b ; alert(sum);
function add(a , b ) {
    let sum = a + b ;
    return sum;
}

let a = 2;
let b = 3;
let sum = add(a, b);
alert(sum);

let personDetails = {
    fullName: {
        firstName: 'John',
        lastName: 'Doe' 
    },
    alertMessage: function(message) {
        alert(message);
    }
}
personDetails.alertMessage('Hello buddy'); ***/
let submitButton = document.querySelector('#submit-button');

function clickListener(event) {
    event.preventDefault();
    console.log('Button clicked');
}

submitButton.addEventListener('click', clickListener);

function emailValidate(email) {
    if(email.includes('@')) {
        return true;
    }
    else {
        return false;
    }
}