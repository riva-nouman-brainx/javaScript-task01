document.addEventListener('DOMContentLoaded', function() {
    var validateMessage;
    var fnameVal=false;
    document.getElementById("first-name").addEventListener("input", checkFirstName);
    function checkFirstName(event) {
        let fname = document.getElementById("first-name").value;
        console.log(fname);
        validateMessage = document.getElementById("fnameError");
        const alphaNumeric = /^(?![0-9])[a-zA-Z0-9]+$/;
        if(fname.length==0){
            validateMessage.innerHTML = "Don't leave the field empty";
        }
        else{
            if (fname.match(alphaNumeric)) {
                validateMessage.innerHTML = "";
                document.getElementById("first-name").style.borderColor = ""; // Reset border color
                fnameVal=true;
                updateSubmitButton();
            } else {
                document.getElementById("first-name").style.borderColor = "red";
                validateMessage.innerHTML = "Invalid Entry";
                fnameVal=false;
            }
        }
    }
    var lnameVal=false;
    document.getElementById("last-name").addEventListener("input", checkLastName);
    function checkLastName(event) {
        let fname = document.getElementById("last-name").value;
        validateMessage = document.getElementById("lnameError");
        const alphaNumeric = /^(?![0-9])[a-zA-Z0-9]+$/;
        if(fname==""){
            validateMessage.innerHTML = "Don't leave the field empty";
        }
        else if (fname.match(alphaNumeric)) {
            validateMessage.innerHTML = "";
            document.getElementById("last-name").style.borderColor = ""; // Reset border color
            lnameVal=true;
            updateSubmitButton();
        } 
        else {
            document.getElementById("last-name").style.borderColor = "red";
            validateMessage.innerHTML = "Invalid Entry";
            lnameVal=false;
        }
    }
    var passwordVal=false;
    document.getElementById("password").addEventListener("input", checkPassword);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    function checkPassword(event){
        let password=document.getElementById("password").value;
        validateMessage = document.getElementById("passwordError");
        if(password==""){
            validateMessage.innerHTML = "Don't leave the field empty";
            passwordVal=false;
        }
        else if(password.match(passwordRegex)){
            validateMessage.innerHTML = "";
            document.getElementById("password").style.borderColor = ""; // Reset border color
            passwordVal=true;
            updateSubmitButton();
        }
        else{
            document.getElementById("password").style.borderColor = "red";
            validateMessage.innerHTML = "Password must be at least 8 characters with alphanumeric values and at least one upper and one lower case character ";
            passwordVal=false;
        }
    }
    var confirmVal=false;
    document.getElementById("confirm-password").addEventListener("input", confirmPassword);
    function confirmPassword(event){
        let password=document.getElementById("password").value;
        let confirmPass=document.getElementById("confirm-password").value;
        validateMessage = document.getElementById("confirmPasswordError");
        if(confirmPass===""){
            validateMessage.innerHTML = "Don't leave the field empty";
            confirmVal=false;
        }
        else if(password === confirmPass){
            validateMessage.innerHTML = "";
            document.getElementById("confirm-password").style.borderColor = ""; // Reset border color
            confirmVal=true;
            updateSubmitButton();
        }
        else{
            document.getElementById("confirm-password").style.borderColor = "red";
            validateMessage.innerHTML = "Password doesn't match";
            confirmVal=false;

        }
    }
    var ageVal=false;
    document.getElementById("age").addEventListener("input", checkAge);
    function checkAge(event){
        let age=document.getElementById("age").value;
        validateMessage = document.getElementById("ageError");
        if(age==""){
            validateMessage.innerHTML = "Don't leave the field empty";
            ageVal=false;
        }
        else if(parseInt(age)>=18 && parseInt(age)<=151){
            validateMessage.innerHTML = "";
            document.getElementById("age").style.borderColor = ""; // Reset border color
            ageVal=true;
            updateSubmitButton();
        }
        else{
            document.getElementById("age").style.borderColor = "red";
            validateMessage.innerHTML = "You don't lie in the age bracket";
            ageVal=false;
        }
    }
    var contactVal=false;
    document.getElementById("contact").addEventListener("input", checkContact);
    function checkContact(event){
        let contact=document.getElementById("contact").value;
        validateMessage = document.getElementById("contactError");
        if(contact==""){
            validateMessage.innerHTML = "Don't leave the field empty";
            contactVal=false;
        }
        else if(contact.length==11){
            validateMessage.innerHTML = "";
            document.getElementById("contact").style.borderColor = ""; // Reset border color
            contactVal=true;
            updateSubmitButton();
        }
        else{
            document.getElementById("contact").style.borderColor = "red";
            validateMessage.innerHTML = "Invalid Phone Number";
            contactVal=false;
        }
    }
    var emailVal=false;
    document.getElementById("email").addEventListener("input", checkEmail);
    function checkEmail(event){
        let inputEmail=document.getElementById("email").value;
        validateMessage = document.getElementById("emailError");
        let emails=inputEmail.split(",");
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        for(let i=0;i<emails.length;i++){
            if (!emails[i].match(emailRegex)) {
                document.getElementById("email").style.borderColor = "red";
                validateMessage.innerHTML = "Invalid Email Address";
                emailVal=false;
                updateSubmitButton();

                return; // Exit the loop early if any email is invalid
            }
        }
        console.log("test");
        emailVal=true;
        updateSubmitButton();
        validateMessage.innerHTML = "";
        document.getElementById("email").style.borderColor = "";
    }
    let submitButton = document.getElementById("submit");
    function updateSubmitButton() {
        if (fnameVal==true && lnameVal==true && emailVal==true && passwordVal==true && confirmVal==true && ageVal==true && contactVal==true) {
            submitButton.removeAttribute("disabled")
        } else {
            submitButton.setAttribute("disabled", "disabled")
        }
    }
})
















