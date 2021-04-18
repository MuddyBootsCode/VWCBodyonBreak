import * as Yup from 'yup';

const GoalsPageSchema = Yup.object().shape({
    goals: Yup.object().shape({
    name: Yup.string().min(3, 'Goal too short').max().required('Required')
  });


  export default GoalsPageSchema;