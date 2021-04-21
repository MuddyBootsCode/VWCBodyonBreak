import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage} from 'formik';
import GoalsPageSchema from '../utils/GoalsPageSchema';


// ErrorMessage can be used, need to look into it more to figure out how

const GoalsPage = () => (
   <div>
     <h1> Goals List </h1>
     <Formik
       initialValues={{ goals: 
        [
          'Greg is Awesome',
          'Fitz is cool',
          'Michael is Russian'
        ] 
      }}
      validationSchema={GoalsPageSchema}
       onSubmit={values =>
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
         }, 500)
       }
       render={({ values,errors, touched }) => (
         <Form>
           <FieldArray
             name="goals"
             render={arrayHelpers => (
               <div>
                
                   <button type="button" onClick={() => arrayHelpers.push("")}>
                     {/* show this when user has removed all goals from the list */}
                      Add a Goal
                   </button>
                 { errors.goals && touched.goals}
                 {values.goals && values.goals.length >= 0 ? (
                   values.goals.map((goal, index) => (
                     <div key={index}>
                       <Field name={`goals.${index}`} />
                       <button
                         type="button"
                         onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                       >
                         -
                       </button>
                       <button
                         type="button"
                         onClick={() => {
                           arrayHelpers.replace(index, values.goals[index])
                        }
                      }
                    // insert an empty string at a position
                       >
                         Edit
                       </button>
                     </div>
                   ))
                 ) : null }
                 <div>
                   
                   
                 </div>
               </div>
             )}></FieldArray>
                <ErrorMessage name="goals">{msg => <div>{errors.goals}</div>}</ErrorMessage>
         </Form>
       )}
     />
   </div>
 );


export default GoalsPage;