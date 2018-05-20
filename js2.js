
var firstnumber;
var secondnumber;
var result;
var operations;

function numone(){

if (document.calform.sec.value == "0" || document.calform.sec.value == result){

document.calform.sec.value = "1";

}

else //if(document.calform.sec.value != "0")

{

document.calform.sec.value = document.calform.sec.value + "1";

}

}

function numtwo(){

if (document.calform.sec.value == "0" || document.calform.sec.value == result){

document.calform.sec.value = "2";

}

else //if(document.calform.sec.value != "0")

{

document.calform.sec.value = document.calform.sec.value + "2";

}

}

function numthree(){

if (document.calform.sec.value == "0" || document.calform.sec.value == result){

document.calform.sec.value = "3";

}

else //if(document.calform.sec.value != "0")

{

document.calform.sec.value = document.calform.sec.value + "3";

}

}

function numfour(){

if (document.calform.sec.value == "0" || document.calform.sec.value == result){

document.calform.sec.value = "4";

}

else //if(document.calform.sec.value != "0")

{

document.calform.sec.value = document.calform.sec.value + "4";

}

}

function numfive(){

if (document.calform.sec.value == "0" || document.calform.sec.value == result){

document.calform.sec.value = "5";

}

else //if(document.calform.sec.value != "0")

{

document.calform.sec.value = document.calform.sec.value + "5";

}

}

function numsix(){

if (document.calform.sec.value == "0" || document.calform.sec.value == result){

document.calform.sec.value = "6";

}

else //if(document.calform.sec.value != "0")

{

document.calform.sec.value = document.calform.sec.value + "6";

}

}

function numseven(){

if (document.calform.sec.value == "0" || document.calform.sec.value == result){

document.calform.sec.value = "7";

}

else //if(document.calform.sec.value != "0")

{

document.calform.sec.value = document.calform.sec.value + "7";

}

}

function numeight(){

if (document.calform.sec.value == "0"){

document.calform.sec.value = "8";

}

else if (document.calform.sec.value == result)

{

document.calform.sec.value = "8";

}

else //if(document.calform.sec.value != "0")

{

document.calform.sec.value = document.calform.sec.value + "8";

}

}

function numnine(){

if (document.calform.sec.value == "0" || document.calform.sec.value == result){

document.calform.sec.value = "9";

}

else //if(document.calform.sec.value != "0")

{

document.calform.sec.value = document.calform.sec.value + "9";

}

}

function numzero(){

if (document.calform.sec.value == "0"){

document.calform.sec.value = "0";

}

else if (document.calform.sec.value == result)

{

document.calform.sec.value = "0";

}

else //if(document.calform.sec.value != "0")

{

document.calform.sec.value = document.calform.sec.value + "0";

}

}

function floatingp(){

if (document.calform.sec.value == "0" || document.calform.sec.value == result){

return;

}

else //if(document.calform.sec.value != "0")

{

document.calform.sec.value = document.calform.sec.value + ".";

}

}

function clr(){

document.calform.sec.value = "0";

document.calform.first.value = "";

return;

}

function operationplus(){

operation = "+";

firstnumber = parseFloat(document.calform.sec.value);

document.calform.sec.value = "0";

document.calform.first.value = firstnumber + operation;

//alert(firstnumber);

}

function operationmult(){

operation = "*";

firstnumber =  parseFloat(document.calform.sec.value);

document.calform.sec.value = "0";

document.calform.first.value = firstnumber + operation;

}

function operationminus(){

operation = "-";

firstnumber =  parseFloat(document.calform.sec.value);

document.calform.sec.value = "0";

document.calform.first.value = firstnumber + operation;

}

function operationdivid(){

operation = "/";

firstnumber =  parseFloat(document.calform.sec.value);

document.calform.sec.value = "0";

document.calform.first.value = firstnumber + operation;

}


function inversee(){

operation = "1/x";

firstnumber =  parseFloat(document.calform.sec.value);

document.calform.sec.value =  parseFloat(1/firstnumber) ;

document.calform.first.value =  parseFloat(1/firstnumber) ;

}

function equalsto(){

secondnumber =  parseFloat(document.calform.sec.value);

if (operation == "+")

{

result = firstnumber + secondnumber;

}

else if (operation == "*"){

result = firstnumber * secondnumber;

}

else if (operation == "-"){

result = firstnumber - secondnumber;

}

else if (operation == "/"){

result = firstnumber / secondnumber;

}
else if (operation == "1/x"){

result = 1/firstnumber;

}




document.calform.sec.value ="";

document.calform.sec.value = result.toString();

document.calform.first.value = firstnumber + operation + secondnumber + " = " + result.toString();

return;

}

