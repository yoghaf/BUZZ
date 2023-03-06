const buttonclick = document.getElementById("button");

buttonclick.addEventListener("click", function (event) {
  event.preventDefault();
  const result = document.getElementById("result");
  const input = document.getElementById("number").value;
  const parap = document.createElement("p");

  if (input == 0 || isNaN(input) || input === "") {
    parap.style.color = "red";
    parap.innerText = "invalid input";
    result.appendChild(parap);
  } else if (input % 3 === 0 && input % 5 === 0) {
    parap.innerText = "FizzBuzz!";
    result.appendChild(parap);
  } else if (input % 5 === 0) {
    parap.innerText = "Buzz!";
    result.appendChild(parap);
  } else if (input % 3 === 0) {
    parap.innerText = "Fizz!";
    result.appendChild(parap);
  } else {
    parap.innerText = input;
    result.appendChild(parap);
  }
});
