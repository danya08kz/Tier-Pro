// window.onclick = function onclickRadio() {
//     let r = document.getElementsByName('r');
//     let s = document.getElementById("nums").value;
//     let summ = 0;
//     let plname = 0;
//     for (let i = 0; i < r.length; i++) {
//       if (r[i].type === 'radio' && r[i].checked) {
//           summ = r[i].value * s;
//           plname = r[i].id;
//       }
//     }
//     document.getElementById('planname').innerHTML = plname;
//     document.getElementById('cost').innerHTML = summ;
//   };


var rates = document.getElementsByName('car');
var rate_value;
for(var i = 0; i < rates.length; i++){
    if (rates[i].checked) {
        rate_value = rates[i].value;
    }
}
console.log(rate_value);