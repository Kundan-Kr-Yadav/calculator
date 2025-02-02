const button = document.querySelectorAll(".item")
const input = document.querySelector("input")
const clear = document.getElementById("clear")
const equal = document.getElementById("equal")
const oprator = document.getElementsByClassName("oprator")
for (let i = 0; i < button.length; i++) {
    const element = button[i];
    // console.log(element);
    element.addEventListener("mouseover", function () {
        element.style.backgroundColor = "green"
    })

    element.addEventListener("mouseout", function () {
        element.style.backgroundColor = "black"

    })
    element.addEventListener('click', function () {
        // Get the value from the input field
        const inputValue = element.innerText;
        // console.log(inputValue);

        // Display the value in the <p> element
        input.value += inputValue;
    });
}
clear.addEventListener("click", function () {
    input.value = ""

});
equal.addEventListener("click", function () {
    try {
        const result = eval(input.value);
        console.log(result);  // Log the result to the console
        input.value = result; // Display the result in the input field
    } 
    catch (e) {
        input.value = "Error"; // Display an error message if the expression is invalid
    }
});
for (let i = 0; i < oprator.length; i++) {
    const element = oprator[i];
    element.addEventListener("mouseout", function () {
        element.style.backgroundColor = "rgb(252, 159, 72)";
    });
}