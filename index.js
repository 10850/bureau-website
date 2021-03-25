let lukKnapper = document.querySelectorAll(".luk-overlay")


// grab all the buttons
let ikoner = document.querySelectorAll(".service-ikon");

// loop through the buttons using for..of 
for (let ikon of ikoner) {

 // listen for a click event 
 ikon.addEventListener('click', (e) => {
  // Store the event target in a const

  // select all classes with the name content
  let allContent = document.querySelectorAll('.overlay');

  // loop through all content classes
  for (let content of allContent) {

    /* display the content if the value in the data attribute of the button and content are the same */
    if(content.getAttribute('data-number') === ikon.getAttribute('data-number')) {
      content.style.display = "block";
     }
     // if it's not equal then hide it.
     else {
        content.style.display = "none";
      }
    }
 });

 
}

for (let lukKnap of lukKnapper) {
        lukKnap.addEventListener('click', (e)=> {
                // Store the event target in a const

                // select all classes with the name content
                let allContent = document.querySelectorAll('.overlay');

                // loop through all content classes
                for (let content of allContent) {

                        /* display the content if the value in the data attribute of the button and content are the same */
                        if(content.getAttribute('data-number') === lukKnap.getAttribute('data-number')) {
                                content.style.display = "none";
                        }

                }
        })
}