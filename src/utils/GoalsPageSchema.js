import * as Yup from 'yup';

const GoalsPageSchema = Yup.object().shape({
    goals: Yup.string()
    .min(3, 'Goal Description to short, please give more detail.')
    .max(50, 'Whoa there killer, going a little overboard with the Goal there!')
    .required('Required')
  });


  export default GoalsPageSchema;