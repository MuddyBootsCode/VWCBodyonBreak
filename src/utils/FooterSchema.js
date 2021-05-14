import * as Yup from 'yup';


const FooterSchema = Yup.object().shape({
    firstName: Yup
    .string("First Name")
    .firstName('Enter your First Name')
    .required('First name is required.'),
    lastName:Yup
    .string('Last Name')
    .lastName('Enter your Last Name')
    .required('Last name is required.'),
    email: Yup
    .string('Email address')
    .email("Enter a valid email address")
    .required('An email address is required.')
})

export default FooterSchema;


