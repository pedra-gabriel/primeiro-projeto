<?php

/*
*
* Controller do formulário de contato
*
* @author Code Universe
*
*/
class RegisterController extends Controller {

	//função para cadastro de formulário
	public function submitRegister() {
			$name = $_POST['name'];
			$email = $_POST['email'];
			$password = $_POST['password'];
			$passwordconf = $_POST['passwordconf'];

			$saveUser = new RegisterCrud;
			$saveUser = $saveUser->saveUser($name, $email, $password);

			echo json_encode(array(
				'result' => $saveUser,
			));

	}
}