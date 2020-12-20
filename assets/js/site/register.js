/**
*
* script do layout 
*
* @author Code Universe
*
**/
(function($, URL,Helpers) {

	var form = $('form[name="formRegister"]');

	var submitRegister = function() {

		$('body').on('click', '#btnSubmitRegister', function() {
		var name = $('input[name="name"]').val();
		var email = $('input[name="email"]').val();
		var password = $('input[name="password"]').val();
		var passwordconf = $('input[name="passwordconf"]').val();

		var resultado = email.indexOf("@");
		function arroba(){
			if (resultado==-1) {
				return false;
			}		
		}

		if(name == ''){
			swal({
				type: 'error',
				title: 'Erro!',
				text: 'Preencha seu nome.',
			})
			return false;
		}

		if(email == ''){
			swal({
				type: 'error',
				title: 'Erro!',
				text: 'Preencha seu e-mail.',
			})
			return false;
		}

		if(arroba() == false){
			swal({
				type: 'error',
				title: 'Erro!',
				text: 'E-mail inválido.',
			})
			return false;
		}

		if(password.length<8){
			swal({
				type: 'error',
				title: 'Erro!',
				text: 'Sua senha deve ter pelo menos 8 caracteres.',
			})
			return false;
		}

		if(password != passwordconf){
			swal({
				type: 'error',
				title: 'Erro!',
				text: 'A confirmação da senha não corresponde.',
			})
			return false;
		}

		$.ajax({
			url: URL + '/submitRegister',
			type: 'POST',
			dataType: 'JSON',
			data: form.serialize(),
			complete: function(response) {
				if (response.responseJSON.result) {
					swal({
						title: 'Feito!',
						text: 'Cadastro realizado com sucesso.',
						type: 'sucess',
					}).then(function() {
						window.location.reload();
						return true;
					})
				} else {
					swal({
						title: 'Erro!',
						text: 'Ocorreu um erro',
						type: 'error',
					});
					return false;
				}
				
				
			}
		})



		});

	}

	$( document ).ready(function() {
		submitRegister();
	});

})($, URL, Helpers)