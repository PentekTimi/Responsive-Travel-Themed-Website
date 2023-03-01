# Responsive Travel themed Website

<img src="https://user-images.githubusercontent.com/107998811/211320181-ee083ac5-784d-42cc-81a4-c4f24dd21dbc.png" />


## Description

### A modern and responsive travel website.

A website that was developed to allow visitors to easily flow around its content. It consists of multiple pages, implementing functionalities such as liking,
bookmarking, and commenting. The project makes use of session storage to store data in the browser and will be cleared once the page is closed.
The website aims to transmit the excitement that one feels when traveling through the use of lively images of destinations.

## 🚩 Table of Contents

- [Installation](#-installation)
- [Usage](#-usage)
- [Credits](#-credits)


## 🔧 Installation


### Setup

Fork `main` branch into your personal repository. Clone it to local computer. Before starting development, you should check if there are any errors.

```sh
$ git clone https://github.com/PentekTimi/finalCapstone.git
```

### View Project

Navigate to the directory named HTML

Open index.html in your browser to land on the website´s home page




## 🤖 Usage

### Liking functionality

* **Clicking on heart icon** : Items will be filled with red color.
![liking](https://user-images.githubusercontent.com/107998811/211562836-06270404-3fb2-41a6-8900-12a2c6b58eed.png)

The heart icon acts as a like button. Once pressed it will fill the heart with red color. The liked items are saved into an array and are sent to session storage.
When the page is reloaded the liked items are restored from the session storage, and the red fill is applied to them. If the page or browser gets closed, the data from
session storage is lost.

### Bookmarking functionality

* **Clicking on bookmark icon** : A pop up will show the number of items saved.
![bookmarking](https://user-images.githubusercontent.com/107998811/211566608-16fdb7ba-bce1-40aa-ab5e-a25c06425b8c.png)

* **After bookmarks** : Bookmark icons will be filled with blue color after pressed.
![bookmarking2](https://user-images.githubusercontent.com/107998811/211566644-e9391ddc-c251-4a40-adbb-8bb1b8664ab2.png)

The save icon acts as a save for later or bookmark button. When the bookmark button is pressed for a destination, this will be added to an array and will be sent to
session storage. In addition an alert will pop up and show the number of items that are currently saved. All bookmarked items will be visible on the Save for Later
page. When the page is reloaded the bookmarked items will be restored from session storage and the bookmark icons will be filled with blue color. 
If the page or browser gets closed, the data from session storage is lost.


### Commenting functionality
* **Before comments** : The page layout looks as follows.
![saveforlater](https://user-images.githubusercontent.com/107998811/211566783-a0fc18c1-4e6c-42ed-a23e-96c43aaa0715.png)

* **After comments** : The page layout looks as follows.
![commenting](https://user-images.githubusercontent.com/107998811/211566840-adea64e3-0d30-4e4f-88e3-eaf9e085db4b.png)

The commenting functionality can be found on the Save for Later page, below the bookmarked items. If there are no bookmarked items the comment section will not be 
visible. The notes or comments added will show up under the input field. If the page is reloaded all the comments added will appear under the right destination. This 
is achieved using session storage. If the page or browser gets closed, the data from session storage is lost.


### Sign up form submission

* **Sign up form submit** : A pop up will show the details entered.
![contact](https://user-images.githubusercontent.com/107998811/211569377-8c1bf122-60ea-4d3c-92e8-bb126564c9e8.png)

The sign up form validates for making sure both fields are completed, and that the user entered a correct email. Error messages are displayed below the 
sign up button if either or both of these validations failed. Additional validations may be added to the JavaScript file that is linked to this page.
If the validations passed, an alert will show up with the details that the user entered.




## 📜 Credits

Image credits and sources:
* Photo by <a href="https://unsplash.com/@thesologirlstravelguide?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexa West</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@arthurbrognoli?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Arthur Brognoli</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@chesterho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chester Ho</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@davidgaviphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Gavi</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/es/@errbodysaycheese?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dele Oluwayomi</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@_fabian_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fabian Struwe</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@jackdelulio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jack Delulio</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@jareddrice?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jared Rice</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@photosbykev?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kevin Sanon</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@kylefrederick10?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">kylefromthenorth</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@maksymiv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maksym Ivashchenko</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@varmamanyu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Manyu Varma</a> on <a href="https://unsplash.com/@varmamanyu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@caraxmarc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marc Schorr</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@marvelous?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marvin Meyer</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@nickkane?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Kane</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by Bruno Joseph: https://www.pexels.com/photo/worm-s-eye-view-of-the-barcelona-cathedral-1338393/
* Photo by Ian Turnell: https://www.pexels.com/photo/assorted-fruits-stall-709567/
* Photo by Ignacio Palés: https://www.pexels.com/photo/photo-of-canyon-during-daytime-2877375/
* Photo by mamunurpics: https://www.pexels.com/photo/boats-floating-on-lake-surrounded-by-trees-at-sundown-4192491/
* Photo by Oleksandr Pidvalnyi: https://www.pexels.com/photo/woman-wearing-blue-dress-with-umbrella-during-sunset-2070485/
* Photo by <a href="https://unsplash.com/@saudedum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Saud Edum</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@tlisbin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tommy Lisbin</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@willshirley?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Will Shirley</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@yasmine_photo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yasmine Arfaoui</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* Photo by <a href="https://unsplash.com/@dead____artist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Z</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
