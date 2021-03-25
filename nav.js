const hamburger = document.getElementById("menu-btn");
const menuContainer = document.getElementById("menu-lists-container");
let menuOpen = false;

if(screen.width < 768 ) {
    // åben burger menu on click
    hamburger.addEventListener('click', () => {
        console.log(menuOpen);
        if (menuOpen == false){
            menuContainer.style.left = 0;
            menuOpen = true;
            console.log(menuOpen);
        } else {
            menuContainer.style.left = -100 + "%";
            menuOpen = false;
            console.log(menuOpen);
        }
    });

    

    // åben dropdown on clicks
    const servOpener = document.getElementById("serv-opener");
    const dropdownServ = document.getElementById('dropdown-serv');
    let dropdownOpen2 = false;

    servOpener.addEventListener('click', () => {
        if (dropdownOpen2 == false){
            dropdownServ.style.display = "list-item";
            dropdownOpen2 = true;
        } else {
            dropdownServ.style.display = "none";
            dropdownOpen2 = false;
        }
    })
}
    
    //const casesOpener = document.getElementById("cases-opener");
    //const dropdownCases = document.getElementById('dropdown-cases');
    //let dropdownOpen1 = false;
    

    //casesOpener.addEventListener('click', () => {
    //       if (dropdownOpen1 == false){
    //          dropdownCases.style.display = "list-item";
    //          dropdownOpen1 = true;
    //      } else {
    //          dropdownCases.style.display = "none";
    //          dropdownOpen1 = false;
    //      }
    // })