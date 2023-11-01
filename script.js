function checkNumber(num) {
  //your code here
	if( num > 0 || num < 0 || num === 0)
	{
		if(num % 2 === 0 && num % 5 === 0)
		{
			return true;
		}
		else{
			return false;
		}
	}
	if(isNaN(num))
	{
		return false;
	}
	else{
		return true;
	}
	
}
 
const num = parseInt(prompt("Enter a number."));
alert(checkNumber(num)); 

              
