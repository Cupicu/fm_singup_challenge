
const formButton  = document.querySelector("form > button");
const formInputs  = document.querySelectorAll("form > input");

console.log(formButton);

formButton.onclick = ( e ) => {
    e.preventDefault();
    console.log('click');

    cleanSpans();

    formInputs.forEach(element => {
        console.log(element);
        validateField(element);
    });
}


const validateField = ( element ) => {

    if( element.id === 'mail'){
        if(!validateEmail( formInputs[2].value)){
            console.log('no valid email');
            element.classList.add('error-field');
            let spanAlert = document.createElement('span');
            spanAlert.innerText = 'Looks like this is not an email';
            formInputs[2].parentNode.insertBefore(spanAlert,formInputs[2].nextSibling);
        }
        return;
    }


    if(element.value === ''){
        setErrorFieldState( element );
    }else{
        setValidFieldState( element );
    }
}

const setErrorFieldState = ( element ) => {
    element.classList.add('error-field');
    let spanAlert = document.createElement('span');
    spanAlert.innerText = `${element.name} Name cannont be empty`;
    element.parentNode.insertBefore(spanAlert,element.nextSibling);
}

const setValidFieldState = ( element ) => {
    element.classList.remove('error-field');
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const cleanSpans = _ => {
    const formInputs  = document.querySelectorAll("form > span");
    formInputs.forEach(element => {
        element.remove();
    });
}