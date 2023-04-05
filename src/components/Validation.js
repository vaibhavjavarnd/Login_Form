
const Validation = (values) => {
     let errors = {}

     if(!values.username) {
          errors.username = "UserName Required"
     }
     else if(values.username.length < 5) {
        errors.username = "UserName must be more than 5 char"
     }

    

     if(!values.password) {
        errors.password = "Password Required"
   }
   return errors;
}

export default Validation