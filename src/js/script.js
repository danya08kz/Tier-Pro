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
    document.getElementById("light-r").className = "tire-radius__choice light-none";
    document.getElementById("suv-r").className = "tire-radius__choice suv-none";
    document.getElementById("comers-r").className = "tire-radius__choice comers";
  }
});
});

window.onclick = function onclickRadio() {
  let r = document.getElementsByName('radius');
  let oldCosts = document.querySelector('[data-old-cost]');
  let s = document.getElementById("count");
  let minus = document.getElementById('minus');
  let plus = document.getElementById('plus');
  let summ = 0;
  let value = 0;
  let econom = 0;
  let oldCost = 0;
  let salePercent = 0;
  plus.onclick = function(){
    s.value = parseInt(s.value)+1;
  };
  minus.onclick = function(){
      if(parseInt(s.value) > 1) {
          s.value = parseInt(s.value)-1;
      }
  };
  if(parseInt(s.value) == 1) {
    document.getElementById("total_summ").className = "total_summ total_summ_none";
  } else {
    document.getElementById("total_summ").className = "total_summ";
  }
  for (let i = 0; i < r.length; i++) {
    if (r[i].type === 'radio' && r[i].checked) {
        summ = r[i].value * s.value;
    }
  }
  for (let i = 0; i < r.length; i++) {
      if (r[i].type === 'radio' && r[i].checked) {
          value = r[i].value;
          oldCost = r[i].getAttribute('data-old-cost');
      }
  }
  econom = oldCost * s.value - summ;
  salePercent = 100-value/oldCost*100;
  salePercent = Math.round(salePercent);
  document.getElementById('sale-percent').innerHTML = salePercent;
  document.getElementById('old-cost').innerHTML = oldCost;
  document.getElementById('cost-per-one').innerHTML = value;
  document.getElementById('summ').innerHTML = summ;
  document.getElementById('econom').innerHTML = econom;
};