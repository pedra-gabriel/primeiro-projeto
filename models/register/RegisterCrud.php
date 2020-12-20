<?php

/**
*
* Classe que configura o crud do contato
*
* @author 
*
*/
class RegisterCrud {

	private $pdoCrud;
	private $table = 'user';

	public function __construct() {

		$this->pdoCrud = new PDOCrud;

	}

	public function saveUser($name, $email, $password) {

		$pdo = array(
			':name' => $name,
			':email' => $email,
			':password' => $password,
		);

		$columns = 'name, email, password';
		$values = ':name, :email, :password';

		return $this->pdoCrud->insert($this->table, $columns, $values, $pdo);
	}
}