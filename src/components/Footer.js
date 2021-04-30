import React from 'react';
import { useFormik } from 'formik';
import ScrollToTopButton from "./ScrollToTopButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};


const Footer = () => {

// part of Formik simple newsletter sign-up form straight from docs
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    //  Left Section of footer
    <div className="Footer">
        <div className="footerSection footerSectionLeft">
            This is the footer
         
        </div> 

        {/* Middle Section of footer */}
        <div className="footerSection footerSectionMiddle">
          <h3>Sign-Up Now</h3>
            <p>Join our newsletter for important news!</p>

        {/* Formik simple newsletter sign-up form straight from docs */}
     <form onSubmit={formik.handleSubmit}>
     <li className="form-row">
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       </li>
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
       <li className="form-row">
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
       </li>
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
       <li className="form-row">
       <label htmlFor="email">Email </label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       </li>
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
       <li className="form-row">
       <button type="submit">Submit</button>
       </li>
     </form>
        </div>

        {/* Right Section of Footer */}
          <div className="footerSection footerSectionRight">
              <ScrollToTopButton />
            <div className="socialIconsFooter">
            <a href="https://facebook.com" >
              <FontAwesomeIcon icon={faFacebook} size="4x" color="#000" />
              </a>
            </div>
            <div className="socialIconsFooter">
            <a href="https://instagram.com" >
              <FontAwesomeIcon icon={faInstagram} size="4x" color="#000"/>
              </a>
            </div>
            <div className="socialIconsFooter">
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="4x" color="#000"/>
              </a>
              </div>
            </div>
        </div>
  );
};

export default Footer;