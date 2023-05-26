
   function openMenu() {
    document.getElementById("navmenu").style.left = "0px";
}
function closeMenu() {
    document.getElementById("navmenu").style.left = "-500px";
}
function linkhide() {
    let th =  document.getElementById("quicklinks");

    if (th.style.display != 'none') {
        th.style.display = 'none';
    }
    else{
        th.style.display = 'block';
    }
}
function parashide() {
    let paras =  document.getElementById("paras");

    if (paras.style.display != 'none') {
        paras.style.display = 'none';
    }
    else{
        paras.style.display = 'block';
    }
}
function serviceshide() {
    let cms =  document.getElementById("cms2");

    if (cms.style.display != 'none') {
        cms.style.display = 'none';
    }
    else{
        cms.style.display = 'block';
    }
    
}
