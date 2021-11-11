export default function validateInfo(values) {
    let errors = {} 

    if(!values.name.trim()) {
        errors.name = "username required"
    }

    //email
    if(!values.email) {
        errors.email = "Email required"
    } else if (!/^[A-z0-9._%+_]+@[A-Z09.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "email address is inavlid"
    }

    if(!values.password) {
        errors.password = 'Password required'
    } else if(values.password.length < 6) {
        errors.password = 'Password needs to be atleast 6 characters or more';
    }

    if(!values.passwordConfirm) {
        errors.passwordConfirm = 'Password is required'
    } else if(values.passwordConfirm !== values.password) {
        errors.passwordConfirm = 'Passwords do not match'
    }


    return errors
}