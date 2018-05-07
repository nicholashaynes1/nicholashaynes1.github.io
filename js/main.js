// Selects all the images on the page
var images = document.getElementsByTagName("img");
var buttonTable = document.getElementById("buttonTable");
var buttons = document.getElementsByClassName("button");
var mainLandingPage = document.getElementById("mainLandingPage");
var resumePage = document.getElementById("resumePage");
var websitePage = document.getElementById("websitePage");
// an array to hold the buttons on a page.
var buttonArray = [];



// Optimized for loop to grab all images
for (var i = images.length - 1; i >= 0; i--) 
	{
		// adds attributes to the website preview images
		images[i].setAttribute("onmouseover","focusIn(this)");
		images[i].setAttribute("onmouseout", "reFocus(this)");
	}

// Optimized loop to grab all the buttons
for (var i = buttons.length - 1; i >= 0; i--) 
{
	// Adds the buttons on the page to the array.
	buttonArray.push(buttons[i]);
	buttons[i].setAttribute("onclick", "loadTransition(this)");
}

// Function called to give the apperance of the moused over image more focus
function focusIn(me)
{
	// Loops through all gathered images
	for (var i = images.length - 1; i >= 0; i--) 
	{
		// Checks to see if the curent image is the one being moused over
		if(images[i] != me)
		{
			// Adds an animation to all the photos not being moused over
			images[i].style.animation = "outOfFocus 1s 1";
			// Sets the opacity of the non moused over images
			images[i].style.opacity = ".5";
			//Changes the border on the website image preview to the pine green color
			me.style.borderColor = "white";
		} 
	}
}

// The function called when an image is no longer being moused over
function reFocus(me)
{
	// Loops through all of the images
	for (var i = images.length - 1; i >= 0; i--)
	{
		/*Checks to see if the image is the once being moused over,
		this avoids the image being moused over from fading out and in again.*/
		if(images[i] != me)
		{
			images[i].style.animation = "reFocus 1s 1"
			images[i].style.opacity = "1";
			me.style.borderColor = "#263260";
		}
	}
}

// This loads the transition to the next page on a button click.
function loadTransition(me)
{
	// Tests the button clicked to see which color to change to
	if(me.getAttribute("name") == "websitesButton")
	{
		buttonTable.style.backgroundColor="#a13403";
	}
	else
	{
		buttonTable.style.backgroundColor="#296f45";
	}

	// A for each loop to execute button fadeout on each button.
	buttonArray.forEach(function(button)
		{
			buttonFadeOut(button)
		});
	// starts the animation to transition pages
	buttonTable.style.animation = "toWebsiteTransition 2s 1";
	// Calls for the page to be loaded after a delay to give time to the animation.
	setTimeout(function(){ loadNextPage(me)}, 2000);
}
// Loads the page of the button clicked on the main page.
function loadNextPage(me)
{
	// Checks to see what page needs to be loaded.
	if(me.getAttribute("name") == "websitesButton")
	{
		// I set the html background to orange and fade everying out to avoid the webpage flashing bug.
		mainLandingPage.style.backgroundColor = "#a13403";
		mainLandingPage.style.opacity = "0";
		
		window.location = "file:///C:/Users/nick/Documents/WebsiteWorkspace/personalsite/webpages/website_page.html";
		
	}
	else
	{
		// I set the html background to green and fade everying out to avoid the webpage flashing bug.
		mainLandingPage.style.backgroundColor = "#296f45";
		mainLandingPage.style.opacity = "0";

		window.location = "file:///C:/Users/nick/Documents/WebsiteWorkspace/personalsite/webpages/resume_page.html"
	}
}

// Fades the buttons on the main screen.
function buttonFadeOut(me)
{
	me.style.animation = "fadeOut .5s 1"
	me.style.opacity = 0;
}

//This begins the transition to take the user back to the main screen
function backToMain(me)
{
	var currentPage;

	if(me.getAttribute("name") == "websiteBackBtn")
	{
		currentPage = "websitePage"
		websitePage.style.animation = "transitionBack 2s 1";
		setTimeout(function(){ backToLandingPage(currentPage)}, 1000);
	}
	else
	{
		currentPage = "resumePage"
		resumePage.style.animation = "transitionBack 2s 1";
		setTimeout(function(){ backToLandingPage(currentPage)}, 1000);
	}
}

// This is the actual functon that takes the user back.
function backToLandingPage(page)
{
	// page.style.color = "#132645";
	// page.style.opacity = "0";
	window.location = "file:///C:/Users/nick/Documents/WebsiteWorkspace/personalsite/index.html";
}

