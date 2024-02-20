let age=document.getElementById("age")
let height =document.getElementById("height");
let weight=document.getElementById("weight");
let calculateButton=document.getElementById("button-1");
let resetButton=document.getElementById("button-2");
let bmiValue=document.getElementById("bmiValue");
let bmiStatus=document.getElementById("status");
let msgContainer=document.querySelector(".msg-container");
let bmiForm=document.getElementById("bmi-form")
let male=document.getElementById("male");
let female=document.getElementById("female");

function bmiCalculation(){
    if(height.value=="" || weight.value==""|| age.value==""||(male.checked==false&&female.checked==false)){
        alert("Please enter all the values to get BMI!");
    }
    else{
        let newHeight=height.value;
        let newWeight=weight.value;
        let heightMeters=newHeight/100;
        msgContainer.style.display="block";
        let bmi=(newWeight/(heightMeters**2));
        result="";
        if (bmi < 18.5){
            bmiStatus.style.color="blue";
            bmiStatus.innerHTML="Underweight";
        }
        else if (bmi >= 18.5 && bmi <= 24.9){
            bmiStatus.style.color="green";
            bmiStatus.innerHTML="Healthy";
        }
        else if (bmi >= 25 && bmi <= 29.9){
            bmiStatus.style.color="yellow";
            bmiStatus.innerHTML="Overweight";
        }
        else if (bmi >= 30 && bmi <= 34.99){
            bmiStatus.style.color="orange";
            bmiStatus.innerHTML="Obese";
        }
        else if(bmi  > 35){
            bmiStatus.style.color="red";
            bmiStatus.innerHTML="Extremely Obese";
        }
        console.log(bmi, newHeight,newWeight);
        bmiValue.innerHTML=Math.round(bmi*100)/100;
    }
}

calculateButton.addEventListener("click",bmiCalculation);
resetButton.addEventListener("click", function reset() {
   height.value = "";
   weight.value = "";
   age.value = "";
   male.checked=false;
   female.checked=false;
   msgContainer.style.display = "none";
});



