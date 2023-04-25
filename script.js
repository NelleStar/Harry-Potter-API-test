 //this is the function where I make the call to the API and bringing back data
 function makeCall() {
    $.ajax({
        url:'https://hp-api.onrender.com/api/characters', //end url
        method: 'GET', //type of request
        success: function(response) { //on a success
            for(let character of response) { //loop over the objects
                createCharCard(character); //calling the function below
            }            
        },
        error: function(error) { //or else give me an error
            console.error(error);
        },
    })
}

let mainContainer = $('#charContainer'); 

//
function createCharCard(charData) { // making a new function for each character card
    let characterCard = $('<div>'); // declaring variable to create new div using jquery for each

    characterCard.addClass('card')
    characterCard.css('background-image', `url(${charData.image})`)
    characterCard.text(charData.name) //adding text to each character div using the name from the API object

    mainContainer.append(characterCard); // appending the character which is the new div to maincontainer which is the empty div in HTML file
}