// function myFunction() {
button.addEventListener("click", function () {
    let inputCantidad = document.querySelector("#cantidad").value;
    let inputColor = document.querySelector("#color").value;
    let inputPrecio = document.querySelector("#precio").textContent;

    let total = inputCantidad * parseInt(inputPrecio);
    let color = inputColor.toString().toLowerCase();


    let s = new Option().style;
    s.color = color;

    if ((s.color == color) == true) {
        document.querySelector("#labelTotal").textContent = "$" + total;
        document.querySelector("#labelCantidad").textContent = inputCantidad;
        document.querySelector("#labelColor").style.backgroundColor = color;
    } else {
        alert("Ingrese un color válido");
    }
});