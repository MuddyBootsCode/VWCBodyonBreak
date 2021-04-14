// Let 's do some form validation make it where an empty goal cannot be submitted. Also, see if you 
// can't do some preliminary styling for the form.

import React from 'react';
import { Formik, Form, Field, FieldArray} from 'formik';

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
       onSubmit={values =>
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
         }, 500)
       }
       render={({ values }) => (
         <Form>
           <FieldArray
             name="goals"
             render={arrayHelpers => (
               <div>
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
                          console.log(values.goals);
                        }
                      }
                    // insert an empty string at a position
                       >
                         Edit
                       </button>
                     </div>
                   ))
                 ) : (
                   <button type="button" onClick={() => arrayHelpers.push('')}>
                     {/* show this when user has removed all goals from the list */}
                      Add a Goal
                   </button>
                 )}
                 <div>
                   
                   <button type='button' onClick={() => arrayHelpers.push('')}>Add a Goal </button>
                 </div>
               </div>
             )}></FieldArray>
         </Form>
       )}
     />
   </div>
 );

export default GoalsPage;