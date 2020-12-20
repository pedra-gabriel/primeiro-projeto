<?php

/**
*
* Controller do site.
*
* @author Code Universe
*
**/
class SiteController extends Controller
{

	public function index()
	{		

		$this->setLayout('site/shared/layout.php');
		$this->view('site/home/index.php');

	}

	public function contacts()
	{

		$this->setLayout('site/shared/layout.php');
		$this->view('site/contacts/index.php');
	}

	public function about()
	{

		$this->setLayout('site/shared/layout.php');
		$this->view('site/about/index.php');
	}

	public function register()
	{

		$this->setLayout('site/shared/layout.php');
		$this->view('site/register/index.php');
	}

	public function login()
	{
		$data = new loginController;

		$this->setLayout('site/shared/layout.php');
		$this->view('site/login/index.php');
	}

	public function perfil()
	{

		$this->setLayout('site/shared/layout.php');
		$this->view('site/perfil/index.php');
	}

}