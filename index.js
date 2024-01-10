// --------------swap function

function swap_content() {


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



//-------------------  #Routes-and-accommodation .content-section-Routes-and-accommodation

function show_resuts(){
    let Routes_and_accommodation = document.querySelector('#Routes-and-accommodation .content-section-Routes-and-accommodation');
    Routes_and_accommodation.style.left = "0px";

}



//  ----------------    return_filter()

function return_filter()
{
    let Routes_and_accommodation = document.querySelector('#Routes-and-accommodation .content-section-Routes-and-accommodation');
    Routes_and_accommodation.style.left = "-400px";
}
