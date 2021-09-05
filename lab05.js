//botón colorear
"use estrict";
(function() {
    window.onload = function() {
        let boton = document.getElementById("colorear");
        let apynom = document.getElementById("ControlInput1");
        let fecha = document.getElementById("ControlInput3");
        let apPat = document.getElementById("ControlInput5");
        let apMat = document.getElementById("ControlInput7");
        let nombres = document.getElementById("ControlInput9");
        let longitud = document.getElementById("ControlInput11");
        let edad = document.getElementById("ControlInput13");
        let mes = document.getElementById("ControlInput15");


        boton.addEventListener("click", colorearcaja);
        let c = 0;

        function colorearcaja() {
            if (c % 2 == 0) {
                apynom.style.backgroundColor = "chocolate";
                fecha.style.backgroundColor = "chocolate";
                apPat.style.backgroundColor = "chocolate";
                apMat.style.backgroundColor = "chocolate";
                nombres.style.backgroundColor = "chocolate";
                longitud.style.backgroundColor = "#4682b4";
                edad.style.backgroundColor = "#4682b4";
                mes.style.backgroundColor = "#4682b4";
            }

            if (c % 2 != 0) {
                apynom.style.backgroundColor = "#4682b4";
                fecha.style.backgroundColor = "#4682b4";
                apPat.style.backgroundColor = "#4682b4";
                apMat.style.backgroundColor = "#4682b4";
                nombres.style.backgroundColor = "#4682b4";
                longitud.style.backgroundColor = "chocolate";
                edad.style.backgroundColor = "chocolate";
                mes.style.backgroundColor = "chocolate";
            }
            c += 1;
        }
    }
})();