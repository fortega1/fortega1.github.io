// document.addEventListener("DOMContentLoaded", (e) => {
// });
document.addEventListener("DOMContentLoaded", (event) => {

    var variable = document.getElementById("calculator");
    var buttons = document.querySelector(".buttons");
    var outputDisplay = document.getElementById("outputDisplay"); 
    var equalsButton = document.getElementById("equals");
    var clearButton = document.getElementById("clearButton");


    buttons.addEventListener("click", function(event){
      if(event.target.id !== "equals" && event.target.id !== "clearButton"){

        outputDisplay.innerText += event.target.innerText;

        }
      })

      // function claculate(mathExpression){
      //   return Function('return ' + mathExpression )();
      // }

    equalsButton.addEventListener("click", (event) => {
      var answer = eval(outputDisplay.innerText);
      outputDisplay.innerText = answer;
    })

    clearButton.addEventListener("click", () => {
      outputDisplay.innerText = "";
    })

})