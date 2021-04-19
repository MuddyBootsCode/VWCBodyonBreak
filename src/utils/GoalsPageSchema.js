import * as Yup from 'yup';

const GoalsPageSchema = Yup.object().shape({
    goals: Yup.array().of(Yup.string().min(3, 'Goal too short').max(50, 'Too long').required('Required'))
  });

  export default GoalsPageSchema;
