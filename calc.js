function addResult(x) {
  var display = document.getElementById("result");
  display.value = display.value + x;
  document.getElementById("main").style.backgroundColor = "brown";
}
 
function calculate() {
  var result = document.getElementById("result");
  result.value = eval(result.value);
  document.getElementById("main").style.backgroundColor = "purple";
  document.title = result.value;
}

function reset() {
  var result = document.getElementById("result");
  result.value = 0;
  document.getElementById("main").style.backgroundColor = "brown";
}