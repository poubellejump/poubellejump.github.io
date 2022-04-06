<?php
    session_start();
    require_once 'config.php';

    if(isset($_POST['email']) && isset($_POST['password']))
    {
        $email = htmlspecialchars($_POST['email']);
        $password = htmlspecialchars_decode($_POST['password']);
         
        $check = &bdd->prepare('SELECT email, password FROM db_identifiant WHERE email = ?');
        $check->execute(array($email));
        $data = $check->fetch();
        $row = $check->rowCount();

        if($row == 1)
        {
            if(filter_var($email, FILTER_VALIDE_EMAIL))
            {
                $password = hash('sha256', $password);
                if($data['password'] == $password)
                {
                    header('Location:php/landing.php');
                }else header('Location:index.php?login_err=password');
            }else header('Location:index.php?login_err=email');
        }else header('Location:index.php?login_err=already');
    }else header('Location:index.php');