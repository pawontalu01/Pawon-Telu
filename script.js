const menuIcon = document.getElementById( "menu-icon" );
const menuList = document.getElementById( "menu-list" );

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("list")
});

const menuLainya = document.getElementById( "menu-lainya" );
const menuBrowsur = document.getElementById( "menu-browsur" );

menuLainya.addEventListener("click", () => {
    menuBrowsur.classList.toggle("browsur")
});
