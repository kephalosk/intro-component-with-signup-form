# Frontend Mentor - Social links profile solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS/hub). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### Screenshot

Desktop
![Desktop](./screenshots/screenshot_desktop.png)

Desktop Error
![Desktop Error](./screenshots/screenshot_desktop_error.png)

Mobile
![Mobile](./screenshots/screenshot_mobile.png)

Active
![Active](./screenshots/screenshot_active.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/kephalosk/intro-component-with-signup-form)
- Live Site URL: [Add live site URL here](https://kephalosk.github.io/intro-component-with-signup-form/)

## My process

1. download Project


2. move Project to target folder


3. open Project in IDE


4. read README


5. add .gitignore-file


6. check files


7. check design


8. initialize repo
* create repo on GitHub
* git init
* git add .
* git commit -m "initial commit"
* git remote add origin git@github.com:kephalosk/${projectname}.git
* git push -u origin master

9. check html
* build general structure
* open index.html in browser for comparison

10. check css
* image styling
* font styling
* color styling
* frame styling
* spacing styling

11. check transitions


12. check javascript


13. check mobile/responsive design


14. check accessability
* semantic html
* headings
* alternative texts
* language
* clear language
* link texts

15. extract css


16. add screenshots


17. update README


18. publish website

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Desktop-first workflow

### What I learned

I learned to validate multiple input fields
```javascript
function validate() {
contentFormFieldInputs.forEach(input => {
if(input.classList.contains('contentFormFirstName')) {
  hasFirstname = isEmpty(input.value);
updateClassList(hasFirstname, contentFormFirstNameMessage, contentFormFirstNameIcon);
}
if(input.classList.contains('contentFormLastName')) {
  hasLastname = isEmpty(input.value);
updateClassList(hasLastname, contentFormLastNameMessage, contentFormLastNameIcon);
}
if(input.classList.contains('contentFormEmail')) {
  hasEmail = isValidEmail(input.value)
  updateClassList(hasEmail, contentFormEmailMessage, contentFormEmailIcon);
}
if(input.classList.contains('contentFormPassword')) {
  hasPassword = isEmpty(input.value);
updateClassList(hasPassword, contentFormPasswordMessage, contentFormPasswordIcon);
}
});
this.blur();
}
```

I learned to set a Password input field:
```javascript
<input class="contentFormFieldInput contentFormPassword" placeholder="Password" type="password" tabindex="4">
```

I learned to create a form.

I improved html, css and javascript skills in general.

### Continued development

* improve html
* improve css

### Useful resources

- [w3schools](https://www.w3schools.com/) - HTML and CSS knowledge
- [selfhtml](https://wiki.selfhtml.org/wiki/HTML) - HTML knowledge

## Author

- Website - [kephalosk](https://easywebpath.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

None.