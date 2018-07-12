$(document).ready(function(){
	function resetCalc(curValue) { //purge any functions to start a fresh calculator
		$("#display").val(curValue)
		$(".function").removeClass("pendingFunction")
		$("#display").data("isPendingFunction", false)
		$("#display").data("thePendingFunction", '')
		$("#display").data("num1Ready", false)
		$("#display").data("num2Ready", false)
		$("#display").data("num1", curValue)
		$("#display").data("num2", 0)
		$("#display").data("fromPrevious", false)
	}

	resetCalc("0") //reset the initial calculator value to display zero

	$(".digit").click(function(){

		if ($("#display").data("fromPrevious") == true) {
			resetCalc($(this).text()) //starts new calc if the display shows a previous answer
		} else if (($("#display").data("isPendingFunction") == true) && 
			($("#display").data("num1Ready") == false)) {

			$("#display").data("num1", $("#display").val())
			$("#display").data("num1Ready", true)
			$("#display").val($(this).text())
			$("#display").data("num2", $("#display").val())
			$("#display").data("num2Ready", true) // lock in the digit as the first value of the calculation

		} else if (($("#display").data("isPendingFunction") == true) &&
			($("#display").data("num1Ready") == true)) {

			var curValue = $("#display").val()
			var toAdd = $(this).text()

			var newValue = curValue + toAdd

			$("#display").val(newValue)

			$("#display").data("num2", $("#display").val())
			$("#display").data("num2Ready", true) // lock in the digit as the second value of the calculation

		} else {
			var curValue = $("#display").val()
			if (curValue === '0') {
				curValue = ""
			}
			var toAdd = $(this).text()

			var newValue = curValue + toAdd // if no pending function append this digit, unless display digit is zero

			$("#display").val(newValue)
		}
	})

	$(".clear").click(function(){

		resetCalc('0') // clear button will resetcalc to zero
	})

	$(".function").click(function(){

		if ($("#display").data("fromPrevious") == true) {
			resetCalc($("#display").val()) //do not clear screen if appending a function onto a previous answer

			$("#display").data("num1Ready", false)
			$("#display").data("fromPrevious", false)
		}

		var pendingFunction = $(this).text()
		$("#display").data("isPendingFunction", true)
		$("#display").data("thePendingFunction", pendingFunction)

		$(".function").removeClass("pendingFunction")
		$(this).addClass("pendingFunction") //clicking function button instead of equals will replace the original operator with a new one

	})

	$(".equals").click(function(){
		if (($("#display").data("num1Ready") == true) && 
			($("#display").data("num2Ready") == true)) { // if two digits are ready, follow the correct line below according to the function button pushed

			if ($("#display").data("thePendingFunction") == "+") {
				var finalValue = parseFloat($("#display").data("num1")) + 
				parseFloat($("#display").data("num2"))
			
			} else if ($("#display").data("thePendingFunction") == "-") {
				var finalValue = parseFloat($("#display").data("num1")) - 
				parseFloat($("#display").data("num2"))

			} else if ($("#display").data("thePendingFunction") == "X") {
				var finalValue = parseFloat($("#display").data("num1")) * 
				parseFloat($("#display").data("num2"))

			} else if ($("#display").data("thePendingFunction") == "/") {
				var finalValue = parseFloat($("#display").data("num1")) / 
				parseFloat($("#display").data("num2"))
			}

			$("#display").val(finalValue)

			resetCalc(finalValue) // reset the calculator and show it as final value
			$("#display").data("fromPrevious", true)

		}	else { // do nothing

		}

	})


})