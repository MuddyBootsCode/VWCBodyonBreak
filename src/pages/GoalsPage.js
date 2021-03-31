import React, {useState} from 'react';
import short from 'short-uuid';

const defaultGoals = [
  {
    goal: 'Not be fat',
    id: '1',
    editing: false,
  },
  {
    goal: 'Not be fatter',
    id: '2',
    editing: false,
  },
  {
    goal: 'Not be fattest',
    id: '3',
    editing: false,
  },

];

const GoalsPage = ({user}) => {
  const [goals, setGoals] = useState(defaultGoals);
  const [formState, setFormState] = useState({goal: '', editedGoal: ''});
  const {goal, editedGoal} = formState;

  const onRemoveGoal = (id) => {
    setGoals(goals.filter(item => item.id !== id))
  }

  const handleChange = e => {
    const {target: {name, value}} = e;
    e.preventDefault();
    setFormState({...formState, [name]: value})
  }

  const submitForm = e => {
    e.preventDefault()
    const id = short.generate();
    setGoals([...goals, {goal: formState['goal'], id, editing: false}])
    setFormState({goal: ''})
  }

  const setEditing = (id, index) => {
    let goalToUpdate = goals.find(goal => goal.id === id)
    goalToUpdate.editing = true;
    let newGoals = [...goals].filter(goal => goal.id !== id)
    newGoals.splice(index, 0, goalToUpdate)
    setGoals(newGoals)
  }

  
  const editGoal = (id, index) => {
    let goalToUpdate = goals[index]
    goalToUpdate.goal = editedGoal;
    goalToUpdate.editing= false;
    let newGoals = [...goals].filter(goal => goal.id !== id)
    newGoals.splice(index, 0, goalToUpdate)
    setGoals(newGoals)
  }

  return (
    <div className="PageBody">
      Goals
      {
        user ? (
            <div>
              <ul>
                <form onSubmit={submitForm}>
                  <input
                    type='text'
                    value={goal}
                    name="goal"
                    placeholder="Goal to set"
                    onChange={handleChange}
                  />
                  <button type='submit'>Add a Goal</button>
                </form>
                {
                  goals.map((g, index) => {
                    const {goal, id, editing} = g;
                    return (
                      <div style={{display: 'flex'}}>
                        {
                          editing ? (
                              <input
                                type='text'
                                value={editedGoal}
                                name='editedGoal'
                                placeholder={goal}
                                onChange={handleChange}
                              />
                            ) :
                            (
                              <span key={id}>{goal}</span>
                            )
                        }
                        <button onClick={() => onRemoveGoal(id)}>-</button>
                        {
                          editing ? (
                              <button onClick={() => editGoal(id, index)}>Set</button>
                            )
                            :
                            (
                              <button onClick={() => setEditing(id, index)}>Edit</button>
                            )
                        }
                      </div>
                    )
                  })
                }
              </ul>

            </div>
          )
          :
          (
            <div> Not Logged in</div>
          )
      }
    </div>
  );
};

export default GoalsPage;
