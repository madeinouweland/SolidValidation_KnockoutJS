// return true if validation has succeeded
function ValidateRequired(value){
	if (value=="") {
		return false
	}
	return true;
}

// return true if validation has succeeded
function ValidateSalary(value){
	return isNumber(value);
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
