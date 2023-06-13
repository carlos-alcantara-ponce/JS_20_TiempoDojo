function falert_city() {

    alert("Loading weather report...");

}

function fshowcookieswin() {
    var cookieswin = document.querySelector('#cookies-window');
    cookieswin.style.display = 'flex';
}

function fhidecookieswin() {
    var cookieswin = document.querySelector('#cookies-window');
    cookieswin.style.display = 'none';
}


var select_initial = document.getElementById("temp_unit_option");
var unit_initial = select_initial.value;

console.log("Fuera de la funcion: Initial = " + unit_initial);

function fchange_units() {

    const temp_select = document.getElementById("temp_unit_option");
    const temp_select_value = temp_select.value;

    // console.log("change = " + temp_select_value);

    var elements_temp_max = document.getElementsByClassName('day_temp_max');

    console.log("Dentro de la funcion: Initial = " + unit_initial);
    console.log("Dentro de la funcion: temp_select_value = " + temp_select_value);


    if (unit_initial != temp_select_value) {

        console.log("entra a rutina");

        for (var i = 0; i < elements_temp_max.length; i++) {
            var value_temp_max = elements_temp_max[i];

            const valor_orig = value_temp_max.innerHTML.slice(0, -1);
            // console.log("Antes = " + valor_orig);
            if (temp_select_value === "C" + "\u00B0") {
                var valor_nuevo = (valor_orig * 9 / 5) + 32;
            }
            else if (temp_select_value === "F" + "\u00B0") {
                var valor_nuevo = (valor_orig - 32) * 5 / 9;
            }

            valor_nuevo = Math.round(valor_nuevo);
            // console.log("Despues = " + valor_nuevo);
            value_temp_max.innerHTML = valor_nuevo + "\u00B0";


        }


        var elements_temp_min = document.getElementsByClassName('day_temp_min');
        for (var i = 0; i < elements_temp_min.length; i++) {
            var value_temp_min = elements_temp_min[i];
            const valor_orig = value_temp_min.innerHTML.slice(0, -1);
            // console.log("Antes = " + valor_orig);

            if (temp_select_value === "C" + "\u00B0") {
                var valor_nuevo = (valor_orig * 9 / 5) + 32;
            }
            else if (temp_select_value === "F" + "\u00B0") {
                var valor_nuevo = (valor_orig - 32) * 5 / 9;
            }

            valor_nuevo = Math.round(valor_nuevo);
            // console.log("Despues = " + valor_nuevo);
            value_temp_min.innerHTML = valor_nuevo + "\u00B0";
        }

        unit_initial = temp_select_value;

        console.log("Saliendo de if : Initial = " + unit_initial);
        console.log("Saliendo de if : temp_select_value = " + temp_select_value);

    }
}