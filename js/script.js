

function add(){
    var x = document.getElementById('number_1').value;
    var y = document.getElementById('number_2').value;
   
    z = parseInt(x) + parseInt(y);
    window.alert("The result is "+ z);
    document.getElementById('result').innerHTML = ("x " + "+" + " y" +" = " + z);
    document.getElementById('op_image').style.display = "inline-block";
    document.getElementById('op_image').src = "plus.jpg";
}


function sub(){
    var x = document.getElementById('number_1').value;
    var y = document.getElementById('number_2').value;
   
    z = parseInt(x) - parseInt(y);
    window.alert("The result is "+ z);
    document.getElementById('result').innerHTML = ("x " + "-" + " y" +" = " + z);
    document.getElementById('op_image').style.display = "inline-block";
    document.getElementById('op_image').src = "minus.jpg";
}
    


function multi(){
    var x = document.getElementById('number_1').value;
    var y = document.getElementById('number_2').value;
   
    z = parseInt(x) * parseInt(y);
    window.alert("The result is "+ z);
    document.getElementById('result').innerHTML = ("x " + "*" + " y" +" = " + z);
    document.getElementById('op_image').style.display = "inline-block";
    document.getElementById('op_image').src = "multiply.jpg";
}


function divide(){
    var x = document.getElementById('number_1').value;
    var y = document.getElementById('number_2').value;
   
    z = parseInt(x) / parseInt(y);
    window.alert("The result is "+ z);
    document.getElementById('result').innerHTML = ("x " + "/" + " y" +" = " + z);
    document.getElementById('op_image').style.display = "inline-block";
    document.getElementById('op_image').src = "div.jpg";
}
 

