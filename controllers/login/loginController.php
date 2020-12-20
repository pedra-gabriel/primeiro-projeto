<?php

Class loginController extends Controller
{

	public function __construct()
	{
		$this->submitLogin();
	}

	public function submitLogin()
	{

		if(isset($_POST['submitLogin']))
		{
			$email 		= $_POST['email'];
			$password 	= $_POST['password'];

			$login_data = new loginCrud;
			$result = $login_data->login($email, $password);

			$user_session = $result['id_user'];

			$set = new UserSession;
			$set->saveUser($user_session);
		}
	}

	
}