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

        //boton extraer
        let bextraer = document.getElementById("extraer");
        bextraer.addEventListener("click", extraer);

        function extraer() {
            const ApeNom = document.getElementById('ControlInput2');
            let ApeNombres = ApeNom.value;
            let NM = ApeNombres.split(/\s+/);
            const paterno = document.getElementById('ControlInput6');
            paterno.value = "";
            paterno.value = NM[0];
            const materno = document.getElementById('ControlInput8');
            materno.value = "";
            materno.value = NM[1];
            const NomCompletos = document.getElementById('ControlInput10');
            NomCompletos.value = "";
            for (let i = 2; i < NM.length; i++) {
                NomCompletos.value += NM[i] + " ";
            }

            //Sacamos la longitud del apellido

            document.getElementById("ControlInput12").value = ("Tiene " + (paterno.value + materno.value).length + " letras")

            //Sacamos la edad y el mes en letras
            let fe = document.getElementById("ControlInput4").value;
            let h = new Date();
            let cumple = new Date(fe);
            let edad = h.getFullYear() - cumple.getUTCFullYear();
            let mes = (h.getMonth() + 1) - (cumple.getMonth() + 1);
            console.log((h.getMonth() + 1) + "-" + (cumple.getMonth() + 1));
            if (mes < 0) {
                edad--;
            } else
            if (mes == 0) {
                if (h.getDate() < cumple.getDate()) {
                    edad--;
                }
            }

            document.getElementById("ControlInput14").value = (+edad + " años");
            let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ];
            let day = new Date(cumple);
            document.getElementById("ControlInput16").value = (meses[day.getMonth()]);

        }
    };

})();