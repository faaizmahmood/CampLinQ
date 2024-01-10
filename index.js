// --------------swap function

function swap_content() {
    console.log("ghghh");

    let source = document.querySelector('#source');
    let destination = document.querySelector('#destination');

    // Store the original content of 'source'
    let sourceContent = source.value;

    // Set 'source' content to be the same as 'destination'
    source.value = destination.value;

    // Set 'destination' content to the original content of 'source'
    destination.value = sourceContent;
}



// -----------------new-fields


function add_new_fields(){

    let new_fields = document.querySelector("#new-fields");

    new_fields.style.display = "block"



}
