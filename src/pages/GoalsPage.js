import React, { useState } from "react";
import { Formik, Form, Field, FieldArray, setIn } from "formik";
import GoalsPageSchema from "../utils/GoalsPageSchema";
import { isNonEmptyArray } from "@apollo/client/utilities";
// ErrorMessage can be used, need to look into it more to figure out how

const GoalsPage = () => {
  const initialGoals = {
    goals: [
      {goal:"Greg is Awesome", edited: false},
      {goal:"Fitz is cool", edited: true},
      {goal:"Michael is Russian", edited: false},
      {goal:"Jeff's shoulder is trashed", edited: false},
    ],
  };

  return (
    <div className="PageBody">
      <h1> Goals List </h1>
      <Formik
        initialValues={initialGoals}
        validationSchema={GoalsPageSchema}
        onSubmit={(values, actions) => {
          const { setSubmitting } = actions;
          setTimeout(() => {
            setSubmitting(false);
          }, 500);
        }}
      >
        {(props) => {
          return (
            <Form onSubmit={props.handleSubmit}>
              <FieldArray
                name="goals"
                render={(arrayHelpers) => (
                  <div>
                    {props.values.goals && props.values.goals.length >= 0
                      ? props.values.goals.map((goal, index) => (
                          <div key={index}>
                            <Field name={`goals.${index}.goal`}>
                              {({ field, meta }) => (
                                <div style={{ display: "flex" }}>
                                  <input
                                    title="Goal, click to edit"
                                    className="goals-list-text-area"
                                    type="text"
                                    {...field}
                                    placeholder="Click to enter new goal."
                                  />
                                  <button
                                    title="Remove Goal"
                                    className="remove-goal-button"
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                  >
                                    -
                                  </button>
                                  <button
                                    className="set-goal-button"
                                    type="button"
                                    disabled={props.isSubmitting}
                                    onClick={() => {
                                      props.values.goals[index].edited = false
                                      arrayHelpers.replace(
                                        index,
                                        props.values.goals[index]
                                      );
                                    }}

                                    // insert an empty string at a position
                                  >
                                    {props.isSubmitting ? "..." : goal.edited ===  true ? "Set" : "Edit"}
                                  </button>
                                  {meta.touched && meta.error && (
                                    <div className="error-goals-list">
                                      {meta.error}
                                    </div>
                                  )}
                                </div>
                              )}
                            </Field>
                          </div>
                        ))
                      : null}
                    <button
                      className="goals-list-add-goal-button"
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                    >
                      {/* show this when user has removed all goals from the list */}
                      Add a Goal
                    </button>
                    <button className="goals-list-submit-button" type="submit">
                      Submit
                    </button>
                  </div>
                )}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default GoalsPage;
