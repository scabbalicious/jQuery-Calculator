$(document).ready(function(){

	$("#add").on('click', function(){

		var a = parseInt($("#num1").val(), 10) 
		var b = parseInt($("#num2").val(), 10)
		
		var answer = a + b
		$('#answer').val(answer)
	})

	$("#subtract").on('click', function(){

		var a = parseInt($("#num1").val(),10)
		var b = parseInt($("#num2").val(),10)
		
		var answer = a - b
		$(`#answer`).val(answer)
	})

	$("#multiply").on('click', function(){

		var a = parseInt($("#num1").val(),10)
		var b = parseInt($("#num2").val(),10)
		
		var answer = a * b
		$(`#answer`).val(answer)
	})

	$("#divide").on('click', function(){

		var a = parseInt($("#num1").val(),10)
		var b = parseInt($("#num2").val(),10)
		
		var answer = a / b
		$(`#answer`).val(answer)
	})

})