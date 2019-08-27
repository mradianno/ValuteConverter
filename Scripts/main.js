/***************************
****************************
** Author: Istrati Adrian **
****************************
***************************/
function myFunction() {
	setInterval(convert, 300);
}

function convert() {
	if (document.getElementById("first-input").value === "") {
		document.getElementById("last-input").value = "Introduceti suma valutei in caseta Nr.1";
	} else {
		var MDL = {
			EUR: 19.4948,
			USD: 17.3658,
			MDL: 1,
			RUB: 0.265321,
			UAH: 0.641834
		}
		var EUR = {
			EUR: 1,
			USD: 0.0512761,
			MDL: 0.0512761,
			RUB: 0.0136138,
			UAH: 0.0329131
		}
		var USD = {
			EUR: 1.12304,
			USD: 1,
			MDL: 0.0575844,
			RUB: 0.0152878,
			UAH: 0.0369595
		}
		var RUB = {
			EUR: 73.4626,
			USD: 65.4137,
			MDL: 3.76681,
			RUB: 1,
			UAH: 2.41766
		}
		var UAH = {
			EUR: 30.3866,
			USD: 27.0566,
			MDL: 1.55804,
			RUB: 0.413639,
			UAH: 1
		}
		var valut = document.getElementById("last-button").innerHTML;
		if (valut == "MDL") {
			document.getElementById("last-input").value = parseFloat(MDL[document.getElementById("first-button").innerHTML] * document.getElementById("first-input").value).toFixed(2);
		} else
			if (valut == "EUR") {
				document.getElementById("last-input").value = parseFloat(EUR[document.getElementById("first-button").innerHTML] * document.getElementById("first-input").value).toFixed(2);
			}
			else
				if (valut == "USD") {
					document.getElementById("last-input").value = parseFloat(USD[document.getElementById("first-button").innerHTML] * document.getElementById("first-input").value).toFixed(2);
				}
				else
					if (valut == "RUB") {
						document.getElementById("last-input").value = parseFloat(RUB[document.getElementById("first-button").innerHTML] * document.getElementById("first-input").value).toFixed(2);
					}
					else
						if (valut == "UAH") {
							document.getElementById("last-input").value = parseFloat(UAH[document.getElementById("first-button").innerHTML] * document.getElementById("first-input").value).toFixed(2);
						}

	}

}
function changefirst(obj) {
	var valuta = obj.innerHTML;
	document.getElementById("first-button").innerHTML = valuta;
}
function changelast(obj) {
	var valuta = obj.innerHTML;
	document.getElementById("last-button").innerHTML = valuta;
}