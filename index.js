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


    if ($(window).width() <= 768 ) { 

        if(Routes_and_accommodation.style.display = "none"){
            Routes_and_accommodation.style.display = "block"
        }

        Routes_and_accommodation.classList.add("col-12")

        let map_section = document.querySelector('#map-section');
        map_section.classList.remove("col-6");
        map_section.classList.add("col-12");

        let filter = document.querySelector('#filter');
        filter.classList.remove("col-6");
        filter.classList.add("col-12");
        filter.style.display = "none"


        Routes_and_accommodation.style.position = "relative"

        Routes_and_accommodation.style.left = "0px";
        Routes_and_accommodation.style.top = "0px";

map_section.style.height = "400px"
        
    }

}



//  ----------------    return_filter()

function return_filter()
{
    let Routes_and_accommodation = document.querySelector('#Routes-and-accommodation .content-section-Routes-and-accommodation');
    Routes_and_accommodation.style.left = "-1000px";


    if ($(window).width() <= 768 ) {
        Routes_and_accommodation.style.display = "none"
        
        let filter = document.querySelector('#filter');
        filter.style.display = "block"

        let main_section_col_reverse = document.querySelector('.main-section-col-reverse');
        main_section_col_reverse.classList.add("d-flex");
        main_section_col_reverse.classList.add("flex-column-reverse");
        // main_section_col_reverse.style.flexDirection  = column-reverse;
    }
}



// ------------------------------ responsive




