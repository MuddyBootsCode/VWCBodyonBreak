import * as Yup from 'yup';

const GoalsPageSchema = Yup.object().shape({
    goals: Yup.string()
    .min(3, 'Goal Description to short, please give more detail.')
    .required('Required')
  });


  export default GoalsPageSchema;