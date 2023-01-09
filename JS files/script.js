// get hold of the like and bookmark buttons
const likeBtns = document.querySelectorAll("button.like-btn");
const bookmarkBtns = document.querySelectorAll(".bookmark-btn");
// initialize empty arrays for liked and bookmarked destinations, and for comments added
let likedDestinations = [];
let bookmarkedDestinations = [];
let commentsArray = [];
// get hold of the div from the save for later page where the bookmarked items will be added
let savedDestinationsContainer = document.getElementById("dynamic-destination-cards");

// add an event listener for when the page loads
// if it is the first time loading set key value pairs for the arrays and for the key codeRanBefore to session storage
// otherwise retrieve the correct values for the arrays from session storage
addEventListener("load", function(){
    if (sessionStorage.getItem("codeRanBefore") === null) {
        sessionStorage.setItem("codeRanBefore", true);
        sessionStorage.setItem("likedDestinations", JSON.stringify(likedDestinations));
        sessionStorage.setItem("bookmarkedDestinations", JSON.stringify(bookmarkedDestinations));
        sessionStorage.setItem("commentsArray", JSON.stringify(commentsArray));
    } else {
        likedDestinations = JSON.parse(sessionStorage.getItem("likedDestinations"));
        bookmarkedDestinations = JSON.parse(sessionStorage.getItem("bookmarkedDestinations"));
        commentsArray = JSON.parse(sessionStorage.getItem("commentsArray"));
    }
});


// when the page is refreshed or loaded, execute two function which mark the items that have been liked or bookmarked previously
addEventListener("load", fillLikedDestinations);
addEventListener("load", fillBookmarkedDestinations);

// create a constructor function for bookmarked items, where we will save information about 
// location id, image source, image alt text, and location text
function NewFavorite(id, src, alt, text){
    this.id = id;
    this.src = src;
    this.alt = alt;
    this.text = text;
};

// create a constructor function for the comments that will be added
// this will hold the location as a string, and the comments for that location as an array
function CommentSection(location, comments=[]) {
    this.location = location;
    this.comments = comments;
};

// for each click on a bookmark icon we will save an object with relevant info to session storage
// using this session storage array we can create elements for the save for later page
bookmarkBtns.forEach(bookmarkBtn => {
    // add an event listener to each bookmark button
    bookmarkBtn.addEventListener("click", function(e) {

        // get the updated bookmarked destinations array from session storage
        bookmarkedDestinations = JSON.parse(sessionStorage.getItem("bookmarkedDestinations"));
        // when the button is clicked toggle a blue fill class, that will change the color of the icon
        e.target.classList.toggle("blue-fill");

        // get the destination card container and save it in a variable
        let destinationCard = e.currentTarget.parentNode.parentNode;
        // can get the id of the destination card, which is the name of the location
        let destinationId = destinationCard.id;
        // get hold of the image alt text, the image source, and location text
        let imageAlt = destinationCard.children[1].children[0].attributes[2].value;
        let imageSrc = destinationCard.children[1].children[0].attributes[1].value;
        let imageText = destinationCard.children[2].innerHTML;
        // create a new object, passing in as argument the rerieved values from above
        let newBookmarkedItem = new NewFavorite(destinationId, imageSrc, imageAlt, imageText);
        
        // in order to not have duplicates once a destination is bookmarked for the second time
        // we will try to find the index of a matching object in the bookmarked destinations array based on the location name
        // if the bookmark icon has the blue fill class, and if the index is greater than -1, also meaning there was a match
        // we will remove that specific object from the array
        // otherwise if the destination has the blue fill class on, and there is no index found then
        // we will push the object to the array and alert how many items are in the saved destinations page
        let i = bookmarkedDestinations.findIndex(newBookmarkedItem => newBookmarkedItem.id === destinationId);
        
        if(e.target.classList.contains("blue-fill")) {
            if (i > -1) {
                bookmarkedDestinations.splice(i, 1);
                
            } else {
                bookmarkedDestinations.push(newBookmarkedItem);
                alert(`You have ${bookmarkedDestinations.length} items in your saved folder`);
                
            }
        // otherwise remove the object from the array
        } else {
            bookmarkedDestinations.splice(i, 1);
        }
        
        // update the session storage array
        sessionStorage.setItem("bookmarkedDestinations", JSON.stringify(bookmarkedDestinations));
    })
});

// the displayFavorites function is called when loading the save for later page
// the function will display the bookmarked items
function displayFavorites() {
    // get the updated values for the bookmarked destinations and comments array from session storage
    let bookmarkedDestinations = JSON.parse(sessionStorage.getItem("bookmarkedDestinations"));
    commentsArray = JSON.parse(sessionStorage.getItem("commentsArray"));
    // for each bookmarked item we will create html elements and pass in the correct information
    bookmarkedDestinations.forEach(bookmarkedItem => {
        // create a div container for the bookmarked destination and add two classes to it
        let destinationDiv = document.createElement("div");
        destinationDiv.classList.add("destination-card");
        destinationDiv.classList.add("favorite-card");
        // set the id of the container to the id from the object
        destinationDiv.id = bookmarkedItem.id;
        // create a div container for the image, add a class to the div, and set the inner html containing the source and alt text for the image
        let imageDiv = document.createElement("div");
        imageDiv.classList.add("destination-card-img-container");
        imageDiv.innerHTML = `<image class="destination-card-img" src=${bookmarkedItem.src} alt="${bookmarkedItem.alt}">`;
        // create a p tag for the destination text, add classes to it and set the inner html to the destination text from the object
        let detsinationText = document.createElement("p");
        detsinationText.classList.add("destination-card-text");
        detsinationText.classList.add("align-center");
        detsinationText.innerHTML = `${bookmarkedItem.text}`;
        // create a div tag for the comments section, add a class, and set the inner html to contain a label, input, button and p tag
        let comment = document.createElement("div");
        comment.classList.add("comment-section");
        comment.innerHTML = `
        <label class="comment-prompt">Leave a comment for this destination: </label>
        <br>
        <input type="text" class="comment-input" placeholder="Write a comment...">
        <button class="comment-btn">Add</button>
        <p class="your-comments">Your comments:</p>`;
        // append the image, destination text, comment section to the destination div container
        destinationDiv.appendChild(imageDiv);
        destinationDiv.appendChild(detsinationText);
        destinationDiv.appendChild(comment);
        // append the destination div container to the main wrapper for the bookmarked items
        savedDestinationsContainer.appendChild(destinationDiv);

        // add click listener to the comments section
        comment.addEventListener("click", function(e){
            // if the clicked item was the button, call a function getComment
            if(e.target.nodeName === "BUTTON") {
                getComment(e);
                // after function finished executing set back the comment input field to empty
                e.target.previousElementSibling.value = "";
            };
        })
    });

    // if there have been comments added (and these were saved in the comments array)
    if (commentsArray.length > 0) {
        // for each comment object we will check if there is any matching bookmarked object based on location name
        commentsArray.forEach(commentObject => {
            // get hold of the destination card
            let destinationContainer = document.getElementById(commentObject.location);
            bookmarkedDestinations.forEach(bookmarked => {
                // if the location name in the bookmarked object and location name in the comments object matches
                // then we will display the comments 
                if (commentObject.location === bookmarked.id) {
                    // set the comments array to the variable notes
                    let notes = commentObject.comments;
                    // for each comment in the array create a p tag and set the inner html to the array items, finally append it to the destination card
                    notes.forEach(item => {
                        let commentDisplay = document.createElement("p");
                        commentDisplay.innerHTML = item;
                        destinationContainer.appendChild(commentDisplay);
                    })
                }
            })
        })
    }
}

// the function getComment will save the comments to the session storage
function getComment(e) {
    // get the updated comments array value from session storage
    commentsArray = JSON.parse(sessionStorage.getItem("commentsArray"));
    
    // get hold of the destination div container on the save for later page
    let savedDestinationDiv = e.target.parentNode.parentNode;
    // get the input value
    let inputValue = e.target.previousElementSibling.value;
    // set the location title to the id of the destination div
    let locationTitle = savedDestinationDiv.id;
    // create a html p tag for new comments, and set the inner html to the input value
    let newComment = document.createElement("p");
    newComment.innerHTML = inputValue;
    
    // create a new comment object, by passing in as argument the location title, and an array with the input value
    let newCommentSection = new CommentSection(locationTitle, [inputValue])
    
    // check if there are already any comments in the array that we are saving to session storage
    if (commentsArray.length === 0) {
        // if there are no elements in the array, push the new comment object to it
        commentsArray.push(newCommentSection);
    // otherwise check if the array already has an object with current location name 
    } else {
        // try to find the index of the object with the same location name as the destinations id
        let i = commentsArray.findIndex(newCommentSection => newCommentSection.location === locationTitle);
        // if there is no match, just push the new comments object to the array
        if(i === -1) {
            commentsArray.push(newCommentSection);
        // otherwise push the input value to the array that is inside the comments object
        } else {
            (commentsArray[i].comments).push(inputValue);
        };
    };
    
    // append the new comment to the destinations div container
    savedDestinationDiv.appendChild(newComment);
    // update the comments array in the session storage
    sessionStorage.setItem("commentsArray", JSON.stringify(commentsArray));
};


// add click event listeners to each of the heart buttons, which act as a like button
likeBtns.forEach(likeBtn => {
    likeBtn.addEventListener("click", function(e) {
        // get the liked destinations array updated from session storage
        likedDestinations = JSON.parse(sessionStorage.getItem("likedDestinations"));

        // toggle the red fill class based on clicks
        e.target.classList.toggle("red-fill");
        
        // get the value of the p tags from the specific destination container that was clicked, which is the location name
        let destinationName = e.currentTarget.parentNode.parentNode.lastElementChild.textContent;
        
        // if the item was liked and has the red fill class on it
        if (e.target.classList.contains("red-fill")) {
            // check if the liked destinations array does not include that destination name, if not, add it to the array
            if(!likedDestinations.includes(destinationName)) {
                likedDestinations.push(destinationName);
            // else if the array contains that destination name already remove it from the array
            } else {
                let index = likedDestinations.indexOf(destinationName);
                likedDestinations.splice(index, 1);
            };
        // else if it does not have the red fill on, remove the item using the index of the item
        } else {
            let index = likedDestinations.indexOf(destinationName);
            likedDestinations.splice(index, 1);
        };

        // update the liked destinations array in the session storage
        sessionStorage.setItem("likedDestinations", JSON.stringify(likedDestinations));
    });
});

// Below two functions are called when the page reloads
// the functions check which items are liked or bookmarked and add the color fill to the icons

// the fillLikedDestinations will fill the heart icon on reload if they have been previously clicked
function fillLikedDestinations() {
    // get the updated liked destinations array from session storage
    likedDestinations = JSON.parse(sessionStorage.getItem("likedDestinations"));
    // for each liked destination get hold of the destination container, and the heart icon and add the red fill class
    likedDestinations.forEach(destination => {
        // convert the destination name to have same formatting as the id of destination containers
        let idName = destination.toLowerCase().replace(" ", "");
        let destinationDiv = document.getElementById(idName);
        let heartIcon = destinationDiv.firstChild.nextElementSibling.children[0].children[0];
        heartIcon.classList.add("red-fill");
    });
};

// the fillBookmarkedDestinations will fill the bookmark icon on reload if they have been previously clicked
function fillBookmarkedDestinations() {
    // get the updated bookmarked destinations from session storage
    let bookmarkedDestinations = JSON.parse(sessionStorage.getItem("bookmarkedDestinations"));
    // for each bookmarked item, get hold of the bookmark icon and add the blue fill class
    bookmarkedDestinations.forEach(bookmarkedDestination => {
        let destinationDiv = document.getElementById(bookmarkedDestination.id);
        let bookmarkIcon = destinationDiv.firstChild.nextElementSibling.children[1].children[0];
        bookmarkIcon.classList.add("blue-fill");
    });
};