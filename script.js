
function convertNum() {
    const result = document.getElementById("output");
  
    const romanNumerals = [
      ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], 
      ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],     
      ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],     
      ["", "M", "MM", "MMM"]                                          
    ];
  
    if (inputNum === "") {
      result.innerText = "Digite um número válido";
      return;
    }
  
    const num = Number(inputNum);
  
    if (isNaN(num)) {
      result.innerText = "Digite apenas números";
      return;
    } else if (num < 1) {
      result.innerText = "Digite um número maior ou igual a 1";
      return;
    } else if (num > 3999) {
      result.innerText = "Digite um número menor ou igual a 3999";
      return;
    }
  
    const digits = [...inputNum].reverse();
    let roman = "";
  
    for (let i = 0; i < digits.length; i++) {
      roman = romanNumerals[i][Number(digits[i])] + roman;
    }
  
    result.innerText = roman;
    inputNum.innerText = "";
  }
  
  document.getElementById("number").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      convertNum();
      this.value = "";
    }
  });
  