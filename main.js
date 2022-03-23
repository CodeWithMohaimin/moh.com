
var menuButton = document.getElementById("menuButton");
var sideNavLinks = document.getElementById("sideNavLinks");

sideNavLinks.style.right = "-250px";
menuButton.onclick = function() {
    if (sideNavLinks.style.right == "-250px") {
        sideNavLinks.style.right = "0"
    }else{
        sideNavLinks.style.right = "-250px"
    }    
}
