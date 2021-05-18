import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import GoalsPageSchema from "../utils/GoalsPageSchema";
import { isNonEmptyArray } from "@apollo/client/utilities";
// ErrorMessage can be used, need to look into it more to figure out how

const GoalsPage = () => (
  <div className="PageBody">
    <h1> Goals List </h1>
    <Formik
      initialValues={{
        goals: [
          "Greg is Awesome",
          "Fitz is cool",
          "Michael is Russian",
          "Jeff's shoulder is trashed",
        ],
      }}
      validationSchema={GoalsPageSchema}
      // validateOnBlur={false}
      onSubmit={() => {}}
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
                          <Field name={`goals.${index}`}>
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
                                  onClick={() => {
                                    arrayHelpers.replace(
                                      index,
                                      props.values.goals[index]
                                    );
                                  }}

                                  // insert an empty string at a position
                                >
                                  Set
                                </button>
                                {meta.touched && meta.error && (
                                  <div className="error">{meta.error}</div>
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
                </div>
              )}
            />
          </Form>
        );
      }}
    </Formik>
  </div>
);

export default GoalsPage;
