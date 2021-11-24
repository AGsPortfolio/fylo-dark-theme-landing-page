
function emailValidation (email) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(emailFormat)) {
        document.getElementById('emailMessage').style="visibility:hidden";
        document.getElementById('thanks').style="visibility:visible";
        return true;
    }
    if(email.value == "") {
        document.getElementById('emailMessage').style="visibility:visible";
        return false;
    }
    else {
        document.getElementById('emailMessage').style="visibility:visible"
        return false;
    }
}