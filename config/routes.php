<?php

/**
*
* Definição das rotas e seus respectivos controllers e actions
*
* @author Code Universe
*
**/

// rotas normais
$commonRoutes = array(
	'/'      		=> 'SiteController/index',
	'contato'     	=> 'SiteController/contacts',
	'about'			=> 'SiteController/about',
	'register'		=> 'SiteController/register',
	'login'			=> 'SiteController/login',	
	'perfil'		=> 'SiteController/perfil',	
);

// rotas POST
$commonPost = array(
	'submitContact'		=> 'ContactController/submitContact',
	'submitRegister'	=> 'RegisterController/submitRegister',
	'submitLogin'		=> 'RegisterController/submitLogin',
);

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;

?>