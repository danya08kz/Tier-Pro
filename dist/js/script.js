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
// let plus = document.getElementsById('plus');
// let minus = document.getElementsById('minus');
var elements = document.querySelectorAll("#light");
 
[].forEach.call(elements, function(element) {
  element.addEventListener('click', function () {
    if (this.checked) {
      document.getElementById("light-r").className = "tire-radius__choice light"
      document.getElementById("suv-r").className = "tire-radius__choice suv-none"
      document.getElementById("comers-r").className = "tire-radius__choice comers-none"
    }
  });
});

var elements = document.querySelectorAll("#suv");
 
[].forEach.call(elements, function(element) {
  element.addEventListener('click', function () {
    if (this.checked) {
      document.getElementById("light-r").className = "tire-radius__choice light-none"
      document.getElementById("suv-r").className = "tire-radius__choice suv"
      document.getElementById("comers-r").className = "tire-radius__choice comers-none"
    }
  });
});

var elements = document.querySelectorAll("#comers");
 
[].forEach.call(elements, function(element) {
  element.addEventListener('click', function () {
    if (this.checked) {
      document.getElementById("light-r").className = "tire-radius__choice light-none"
      document.getElementById("suv-r").className = "tire-radius__choice suv-none"
      document.getElementById("comers-r").className = "tire-radius__choice comers"
    }
  });
});

window.onclick = function onclickRadio() {
    let r = document.getElementsByName('radius');
    let s = document.getElementById("count").value;
    let summ = 0;
    let plname = 0;
    let value = 0;
    let sale = 0;
    for (let i = 0; i < r.length; i++) {
      if (r[i].type === 'radio' && r[i].checked) {
          summ = r[i].value * s;
      }
    }
    for (let i = 0; i < r.length; i++) {
        if (r[i].type === 'radio' && r[i].checked) {
            value = r[i].value;
        }
    }
    sale = Number(value) + Number(value * 0.1);
    // document.getElementById('planname').innerHTML = plname;
    document.getElementById('old-cost').innerHTML = sale;
    document.getElementById('cost-per-one').innerHTML = value;
  };