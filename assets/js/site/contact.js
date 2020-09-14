/**
*
* script do layout
*
* @author Code Universe
*
**/
(function($, URL,Helpers) {

	var form = $('form[name="formContact"]');

	var submitContact = function() {

		$('body').on('click', '#btnSubmitContact', function() {
		var name = $('input[name="name"]').val();
		var email = $('input[name="email"]').val();
		var phone = $('input[name="phone"]').val();
		var message = $('textarea[name="message"]').val();

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

		if(phone == ''){
			swal({
				type: 'error',
				title: 'Erro!',
				text: 'Preencha seu telefone.',
			})
			return false;
		}

		if(isNaN(phone)){
			swal({
				type: 'error',
				title: 'Erro!',
				text: 'Telefone inválido.',
			})
			return false;
		}

		if(phone.length<9){
			swal({
				type: 'error',
				title: 'Erro!',
				text: 'Telefone inválido.',
			})
			return false;
		}

		if(message == ''){
			swal({
				type: 'error',
				title: 'Erro!',
				text: 'Escreva sua mensagem.',
			})
			return false;
		}

		$.ajax({
			url: URL + '/submitContact',
			type: 'POST',
			dataType: 'JSON',
			data: form.serialize(),
			complete: function(response) {
				if (response.responseJSON.result) {
					swal({
						title: 'Enviado!',
						text: 'Obrigado por entrar em contato.',
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
		submitContact();
	});

})($, URL, Helpers)