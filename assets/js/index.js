const errorTags = document.querySelectorAll( ".lbl-error" );
const formTag = document.querySelector( "form" );

const validateEmail = ( email ) => {
    const regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test( email );
}

const validateInputsForm = () => {
    const inputTags = [ ...document.querySelectorAll( "input" ) ];
    inputTags.map( ( inputTag, index ) => {
        if ( inputTag.value.length < 3 ) {
            errorTags[ index ].innerHTML = `${ inputTag.placeholder } cannot be empty`;
            inputTag.classList.add( "error" );
            inputTag.placeholder = "";
        } else {
            inputTag.classList.remove( "error" );
            errorTags[ index ].innerHTML = "";
        }

        if ( inputTag.name === "email" ) {
            if ( !validateEmail( inputTag.value ) ) {
                errorTags[ index ].innerHTML = "Looks like this is not an email";
                inputTag.classList.add( "error" );
                inputTag.placeholder = "email@example.com";
            }
            else {
                errorTags[ index ].innerHTML = "";
                inputTag.classList.remove( "error" );
            }
        }
    })
}

const getValidateForm = ( event ) => {
    event.preventDefault();
    validateInputsForm();
}

formTag.addEventListener( "submit", getValidateForm, false );
