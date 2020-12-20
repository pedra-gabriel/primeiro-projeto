<?php

Class loginCrud
{
	public function login($email, $password)
	{
		$pdoValues = array(
			':email' 	=> $email,
			':password'	=> $password,
		);

		$select = 'SELECT id_user, name FROM user WHERE email = :email AND password = :password';

		$data_login = new PDOQuery;
		return $data_login->fetch($select, $pdoValues);
	}
}