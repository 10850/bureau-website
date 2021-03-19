const hamburger = document.getElementById("menu-btn");
const menuContainer = document.getElementById("menu-lists-container");
let menuOpen = false;

if(screen.width < 768 ) {
    console.log(hamburger)
    // åben burger menu on click
    hamburger.addEventListener('click', () => {
        if (menuOpen == false){
            menuContainer.style.left = 0;
            menuOpen = true;
        } else {
            menuContainer.style.left = -100 + "%";
            menuOpen = false;
        }
    });

    // åben dropdown on click
    const servOpener = document.getElementById("serv-opener");
    const casesOpener = document.getElementById("cases-opener");
    const dropdownServ = document.getElementById('dropdown-serv');
    const dropdownCases = document.getElementById('dropdown-cases');
    let dropdownOpen1 = false;
    let dropdownOpen2 = false;

    casesOpener.addEventListener('click', () => {
            if (dropdownOpen1 == false){
                dropdownCases.style.display = "list-item";
                dropdownOpen1 = true;
            } else {
                dropdownCases.style.display = "none";
                dropdownOpen1 = false;
            }
        })

    servOpener.addEventListener('click', () => {
            if (dropdownOpen2 == false){
                dropdownServ.style.display = "list-item";
                dropdownOpen2 = true;
            } else {
                dropdownServ.style.display = "none";
                dropdownOpen2 = false;
            }
        })

    }else {
            menuContainer.style.left = 0;
          }

    