console.log("hello");

var buttonCollapse = document.querySelector("#button")

console.log(buttonCollapse);

var navigation = document.querySelector("#navbar")

buttonCollapse.addEventListener("click", navbarToggle)

function navbarToggle () {
    navigation.classList.toggle("show")
}