function validateName() {
    /*Check whether name is entered or not.
    Throw an error if name field is empty.
    Error message will be "Full name is required."*/
    /*SINCE WE ALREADY IMPLEMENTED A NON-EMPTY CHECK, THERE IS NO USE OF THIS FUNCTION*/
    const name = document.getElementById("fullName");
    if (name.value.length==0)
    {
        throw("Full name is required.")
    }
}

function validateEmail() {
    /*Check whether email is valid or not, as per the rules stated in problem statement.
    Use regex and test() function to validate the email address.
    Throw an error if email is invalid.
    Error message will be "Invalid Email Address."*/
    let pattern = /^([^@]*)([a-z]|[0-9])@([a-z]+)(\.)([a-z]{3})$/;
    if(!pattern.test(document.getElementById("email").value)){
        throw("Email invalid");
    }
}

function validatePassword() {
    /*Check whether password is made of atleast 8 characters.
    /If not, throw an error.
    Error message will be "Password must be at least 8 characters"*/
    const pass=document.getElementById("password");
    if (pass.value.length<8)
    {
        throw("Password must be at least 8 characters.")
    }
}

function ConfirmPassword() {
    /*Check whether the re-entered password is same as the password entered first.
    If not, throw an error.
    Error message will be "Passwords do not match"*/
    const pass=document.getElementById("password");
    const conpass=document.getElementById("confirmPassword");
    if (pass.value!=conpass.value)
    {
        throw("Passwords do not match.")
    }
}

function validateForm() {
    try {
        /*Check whether all fields are entered or not*/
        //Your code here
        const name=document.getElementById("fullName");
        const email=document.getElementById("email");
        const pass=document.getElementById("password");
        const confpass = document.getElementById("confirmPassword");
        if ((name.value.length==0) || (email.value.length==0) || (pass.value.length==0) || (confpass.value.length==0))
        {
            throw("All fields are required");
        }
        validateName();
        validateEmail();
        validatePassword();
        ConfirmPassword();
        document.getElementById("feedback").innerHTML="<span style='color: green;'>Registration Successful</span>";

        // Additional validation rules can be added here

        //After checking all the rules, if the program throws no error, it will reach this part of code.
        //Using "innerHTML" and "span" tag, give the message "Registration successful!" in GREEN colour to the div container "feedback" in index.html.
        //Your code here
    } catch (error) {
        //After checking all the rules, if the program throws an error, it will reach this part of code.
        //Using "innerHTML" and "span" tag, give the error message in RED colour to the div container "feedback" in index.html.
        //Your code here
        document.getElementById("feedback").innerHTML="<span style='color: red;'>"+error+"</span>";
    }
}
