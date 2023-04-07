const value = document.querySelector("#value")
const input = document.querySelector("#pi_input")
value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value
})
const value2 = document.querySelector("#value2")
const input2 = document.querySelector("#pi_input2")
value2.textContent = input2.value
input2.addEventListener("input", (event) => {
  value2.textContent = event.target.value
})

function length_function(){
    var x= (document.getElementById("pi_input").valueAsNumber);
    var length_zine= (document.getElementById("pi_input2").valueAsNumber);
    length_zine = length_zine/x;
    var A = 1.5;
    var cos = ((2 * Math.PI) / 10) * (x - 2.5);
    var length_result =Math.abs( A * Math.cos(cos));
    var deta = 0;
    deta += Math.sqrt(Math.pow(x,2)+Math.pow(length_result,2))*length_zine;
    console.log(deta);
    deta*=100000000;
    deta = Math.floor(deta);
    deta/=100000000;
    document.getElementById("inner_result").innerHTML=deta;
}
setTimeout(() => {
    document.getElementById("loader").style.display="none";
}, 3000);
