function formValidation()
{

 
var uname = document.registration.name;
var usname = document.registration.surname;
var udate = document.registration.date;
var uemail = document.registration.email;
var upsw = document.registration.psw;
var ugender = document.registration.gender; 
var uinte = document.registration.inte; 




if(allLetter(uname))
{		
if(allLetters(usname))
{
if(validateedate(udate)){
if(ValidateEmail(uemail))
{
if(userp_validation(upsw,6,15))
{
if(checkPsw(upsw))
{
if(genderselect(ugender))
{
if(checkinterest(uinte))

return true;	


} 
}

}
}
}
}
}


return false;

} 


function genderselect(ugender)
{
if(ugender.value == "-1")
{
alert('Select your  gender');
ugender.focus();
return false;
}
else
{
return true;
}
}

function checkinterest(uinte){
	if ( ( uinte[0].checked == false ) && ( uinte[1].checked == false ) &&( uinte[2].checked == false ))
{
alert ( "Please choose your interests" );
return false;
}
}
function validateedate(udate)
  {
	 

	  
	   var inputDate = udate;

  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
 
  if(inputDate.value.match(dateformat))
  {
 	if(inputDate.value=="" ){
	alert("date input fields can not leave empty!");
	udate.focus();
	return false;

	}
 
  var opera1 = inputDate.value.split('/');
  var opera2 = inputDate.value.split('-');
  var opera3 = inputDate.value.split('.');
  lopera1 = opera1.length;
  lopera2 = opera2.length;
  lopera3 = opera3.length;
  
  if (lopera1>1)
  {
  var pdate =inputDate.value.split('/');
  }
  else if (lopera2>1)
  {
  var pdate = inputDate.value.split('-');
  }
  else{
var pdate = inputDate.value.split('.');
  }
  var dd = parseInt(pdate[0]);
  var mm  = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
  
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
  alert('Invalid date format!');
  udate.focus();
  return false;
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  alert('Invalid date format!');
  return false;
  }
  if ((lyear==true) && (dd>29))
  {
  alert('Invalid date format!');
  udate.focus();
  return false;
  }
  }
  return true;
  }
  else
  {
  alert("Invalid date format!");
udate.focus();
  return false;
  
  }
  }
function checkPsw(upsw){
	 if(upsw.value != "" ) {
      if(upsw.value.length < 6  || upsw.value.length>15 ) {
        alert("Error: Password must contain at least six and at most 15 characters!");
        upsw.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(upsw.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        upsw.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(upsw.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        upsw.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(upsw.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        upsw.focus();
        return false;
      }
	   re = /[!@#$%^&*]/;
      if(!re.test(upsw.value)) {
        alert("Error: password must contain at least one special character!");
        upsw.focus();
        return false;
      }
 if (upsw.value==""){
      alert("Error: password is empty!");
     upsw.focus();
      return false;
    }
    }
	return true;

	
}
  function checkDate(udate)
  {
    
	var a = udate.value;
	if((a=="") || (a=='gg.aa.yy') ){
	alert("date input fields can not leave empty!");
	return false;

	}
	else{
	
    re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    if(udate.value != "" && !udate.value.match(re)) {
      alert("Invalid date format: " + udate.value);
      udate.focus();
      return false;
    }
	return true;
	}

  }
  

function userp_validation(upsw,mx,my)
{
var up_len = upsw.value.length;
if (up_len == 0 || up_len >= my || up_len < mx)
{
alert("User password should not be empty / length be between "+mx+" to "+my);
upsw.focus();
return false;
}
return true;
}

function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value==""){
	alert('Username can not left empty');
uname.focus();
return false;
}
if(uname.value.match(letters))
{
return true;
}
	
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function allLetters(usname)
{ 
var letters = /^[A-Za-z]+$/;

if(usname.value==""){
	alert('Surname can not left empty');
usname.focus();
return false;
}	
if(usname.value.match(letters))
{
return true;
}
else
{
alert('Surname must have alphabet characters only');
usname.focus();
return false;
}
}



function ValidateEmail(uemail)
{
	if(uemail.value==""){
		alert('Email can not left empty');
uemail.focus();
return false;
}	
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address or email place is empty!");
return false;
}
} 


