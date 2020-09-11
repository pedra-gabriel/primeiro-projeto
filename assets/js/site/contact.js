/**
*
* script do layout
*
* @author Code Universe
*
**/
(function($, URL,Helpers) {

	var submitContact = function() {

		$('body').on('click', '#btnSubmitContact', function() {
		var name = $('input[name="name"]').val();
		var email = $('input[name="email"]').val();
		var phone = $('input[name="phone"]').val();
		var message = $('textarea[name="message"]').val();

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

		if(message == ''){
			swal({
				type: 'error',
				title: 'Erro!',
				text: 'Escreva sua mensagem.',
			})
			return false;
		}

		});

	}

	$( document ).ready(function() {
		submitContact();
	});

})($, URL, Helpers)