<?php
/*
$_POST['action'] = Change page
$_POST['page']   = nom de la page

$_POST['action'] = Montrer prochaine rep

$_POST['action'] = Montrer bonne rep
*/
switch ($_POST['action']) {
    case 'changePage':
        # Changer redirection sur index et forcer refresh (fichier avec boolean check tous les X temps par la page front)
        break;
    
    default:
        # code...
        break;
}
?>
