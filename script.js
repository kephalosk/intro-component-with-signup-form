document.addEventListener('DOMContentLoaded', () => {
    const contentFormFieldInputs = document.querySelectorAll('.contentFormFieldInput');
    const contentFormFirstNameMessage = document.querySelector('.contentFormFirstNameMessage');
    const contentFormLastNameMessage = document.querySelector('.contentFormLastNameMessage');
    const contentFormEmailMessage = document.querySelector('.contentFormEmailMessage');
    const contentFormPasswordMessage = document.querySelector('.contentFormPasswordMessage');
    const contentFormFirstNameIcon = document.querySelector('.contentFormFirstNameIcon');
    const contentFormLastNameIcon = document.querySelector('.contentFormLastNameIcon');
    const contentFormEmailIcon = document.querySelector('.contentFormEmailIcon');
    const contentFormPasswordIcon = document.querySelector('.contentFormPasswordIcon');
    const button = document.querySelector('button');

    let hasFirstname, hasLastname, hasEmail, hasPassword;

    button.addEventListener('click',validate);
    button.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' '){
            validate.call(this);
        }
    });

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

    function isEmpty(input) {
        return !!input;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function updateClassList(value, message, icon) {
        if(value){
            message.classList.remove('error');
            icon.classList.remove('error');
        } else {
            message.classList.add('error');
            icon.classList.add('error');
        }
    }
});