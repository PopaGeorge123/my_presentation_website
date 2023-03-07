var menu_btn = document.getElementById('menu_icon_id');
var header = document.getElementById("header_menu");
var menu_expanded = false;

menu_btn.onclick = () =>{
    if(menu_expanded){
        header.classList.remove('expand_menu');
        header.classList.add('inpand_menu');
        menu_expanded = false;
    }
    else{
        menu_expanded = true;
        header.classList.remove('inpand_menu');
        header.classList.add('expand_menu');
    }
}