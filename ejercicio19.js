//menu
let op = document.getElementById("op");

const operaciones = () => {

    let op = prompt(

        "Escribe: \n 1 - Suma \n 2 - Resta \n 3 - Multiplicacion \n 4 - Division \n 5 - Salir"

    );

    while (op !== "1" && op !== "2" && op !== "3" && op !== "4" && op !== "5") {

        alert("Selecciona la opcion valida");

        let op = prompt(

            "Escribe: \n 1 - Suma \n 2 - Resta \n 3 - Multiplicacion \n 4 - Division \n 5 - Salir"

        );

    }

    if (op === "1" || op === "2" || op === "3" || op === "4" || op === "5") {

        if (op === "5") {

            alert("Ten buen dia");

            return 0;

        }

        let num1 = parseFloat(prompt("Ingrese numero 1"));

        let num2 = parseFloat(prompt("Ingrese numero 2"));

        let resultado = 0;

        if (op === "1") {

            resultado = num1 + num2;

        }

        if (op === "2") {

            resultado = num1 - num2;

        }

        if (op === "3") {

            resultado = num1 * num2;

        }

        if (op === "4") {

            if (num2 != 0) {

                resultado = num1 / num2;

            } else {

                return alert("No seas bestia, no puedes dividir entre 0, duh");

            }

        }

        alert("El resultado es " + resultado);

    }

}

//eventos

op.onclick = function() {

    operaciones();

}