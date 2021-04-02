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

    let navLinks = document.querySelectorAll(".nav-link");

    // loop through the buttons using for..of 
    for (let navLink of navLinks) {

        // listen for a click event 
        navLink.addEventListener('click', (e) => {
            console.log(menuOpen);
            if (menuOpen == true){
                menuContainer.style.left = -100 + "%";
                menuOpen = false;
                console.log(menuOpen);
            }

        });

    }
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