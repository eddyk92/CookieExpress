function validateFormOnSubmit (form){
	var reason = "";

	reason += validateEmail(form.email);
	reason += validatePassword(form.password);
	reason += validateConfirmEmail(form.confirmEmail);

	if (reason != ""){
		alert("Some fields need correction:\n" + reason);
		return false;
	}
	return true;
}

function validateEmpty(fld){
	var error == "";

	if (fld.value.length == 0){
		fld.style.background = 'yellow';
		error = "The required field has not been met";
	} else {
		fld.style background = 'white';
	}
	return error;
}

function validateEmail(fld){
	var error = "";
	var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
	var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/ ;

	if (fld.value == ""){
		fld.style.background = 'yellow';
		error = "You did not enter an email";
	} else if ((fld.value.match(illegalChars)) {
		fld.style.background = 'yellow';
		error = "Please enter a valid email";
	} else {
		fld.style.background = 'white';
	}
	return error;
}

function validatePassword(fld){
	var error = "";
	var illegalChars = /[\W_]/;

	if (fld.value == ""){
		fld.style.background = 'yellow';
		error = "You didn't enter a password";
	} else if{
		((fld.value.length < 8) || (fld.value.length > 15)){
			error = "The password you entered is invalid";
			fld.style.background = 'yellow';
		} else{
			fld.style.background = 'white';
		}
		return error;
	}
}

function validateConfirmPassword(fld){
	var error = "";

	if (fld.value == ""){
		fld.style.background = 'yellow';
		error = "You did not confirm your password";
	} else if{
		fld === validatePassword {
			error = "Your passwords do not match";
			fld.style.background = 'yellow';
		} else{
			fld.style.background = 'white';
		}
		return error;
	}
}


// if (document.form.email.value == ""){
// 	document.getElementById('errors').innerHTML="Please Enter your email";
// 	return false;
// }