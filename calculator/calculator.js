let Num1 , Num2 , result;
Num1=parseInt(document.getElementById('num1').value);
Num2=parseInt(document.getElementById('num2').value);
// Num2= document.getElementById("num2").value;
console.log(Num1);
console.log(Num2);
function Addition() {

    Num1=parseInt(document.getElementById('num1').value);
    Num2=parseInt(document.getElementById('num2').value);

    console.log(Num1);
console.log(Num2);
    result=(Num1+Num2);
    // document.write(result);
    document.getElementById("result").innerHTML = result;
    console.log(result);
}

function subtration() {
    Num1=parseInt(document.getElementById('num1').value);
    Num2=parseInt(document.getElementById('num2').value);
    console.log(Num1);
    result=(Num1-Num2);
    document.getElementById("result").innerHTML = result;
}

function multiplication() {
    Num1=parseInt(document.getElementById('num1').value);
    Num2=parseInt(document.getElementById('num2').value);
    console.log(Num1);
    result=(Num1*Num2);
    document.getElementById("result").innerHTML = result;
}

function division() {
    Num1=parseInt(document.getElementById('num1').value);
    Num2=parseInt(document.getElementById('num2').value);
    console.log(Num1);
    result=(Num1/Num2);
    document.getElementById("result").innerHTML = result;
}