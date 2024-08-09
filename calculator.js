document.addEventListener("DOMContentLoaded", () => {
  const lb_calculate = (num11, num12, num21, num22, result1, result2) => {
    let x = 0;
    let y = 0;
    let operator = document.querySelector(".operation").value;
    let produit2 = num21 * num12;
    let produit3 = result1 * num12;
    let produit5 = num22 * num11;
    let produit6 = result2 * num11;
    let oneEqu2 = produit2 - produit5;
    let oneEquResult = produit3 - produit6;
    y = lb_getY(oneEqu2, oneEquResult);
    x = lb_getX(num11, operator, num21, result1, y);
    return `x = ${x}\ny = ${y}`;
  };
  const lb_getX = (num1, op, num2, resulter, yer) => {
    let result = 0;
    if (op === "add") {
      result = (resulter - num2 * yer) / num1;
    } else if (op === "sous") {
      result = num1 - num2;
    } else if (op === "multi") {
      result = num2 / num1;
    } else {
      result = 1 / (num2 / num1);
    }
    return result;
  };
  const lb_getY = (num1, num2) => {
    return num2 / num1;
  };
  document.querySelector(".buttonXY").addEventListener("click", () => {
    if (
      document.querySelectorAll(".theNum")[0].value === "" ||
      document.querySelectorAll(".theNum")[1].value === "" ||
      document.querySelectorAll(".theNum")[2].value === "" ||
      document.querySelectorAll(".theNum")[3].value === "" ||
      document.querySelector(".result").value === ""
    ) {
      alert("Enter a number !");
    } else {
      alert(
        lb_calculate(
          parseFloat(document.querySelectorAll(".theNum")[0].value),
          parseFloat(document.querySelectorAll(".theNum")[1].value),
          parseFloat(document.querySelectorAll(".theNum")[2].value),
          parseFloat(document.querySelectorAll(".theNum")[3].value),
          parseFloat(document.querySelectorAll(".result")[0].value),
          parseFloat(document.querySelectorAll(".result")[1].value)
        )
      );
    }
  });
});
