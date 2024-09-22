function converttemp() {
    let inputValue = +(document.getElementById('temp').value);
    let forValue = document.getElementById('first').value;
    let toValue = document.getElementById('second').value;

    

    if (forValue === "fahren" && toValue === "celsius"){
        answer1 = (inputValue - 32) * 5/9;
        document.getElementById('result').innerHTML = `${inputValue}F = ${answer1}C`;
     
    }
    
    else if (forValue === "celsius" && toValue === "fahren"){
        answer2 = (inputValue * 9/5) +32;
       
        document.getElementById('result').innerHTML = `${inputValue}C = ${answer2}F`;
       
    }

    else{
        document.getElementById('result').innerHTML = `Please select a valid value`;
    }
}

function reset(){
    document.getElementById('temp').value = "";
    document.getElementById('first').value = "";
     document.getElementById('second').value = "";
     document.getElementById('result').innerHTML="";
}

  

