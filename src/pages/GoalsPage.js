import React, { useState } from 'react';
import short from 'short-uuid';

const defaultGoals = [
  {
    name: 'Not be fat',
    id: '1',
    editing: false
  },
  {
    name: 'Not be fatter',
    id: '2',
    editing: false
  },
  {
    name: 'Not be fattest',
    id: '3',
    editing: false
  },

];

const GoalsPage = ({user}) => {
  const [goals, setGoals] = useState(defaultGoals);
  const [formState, setFormState] = useState({ name: '' });
  const { name } = formState;

  const onRemoveGoal = (id) => {
    setGoals(goals.filter(item => item.id !== id))
  }

  const handleChange = e => {
    const { target: { name, value }} = e;
    e.preventDefault();
    setFormState({...formState, [name]: value})
  }

  const submitForm = e => {
    e.preventDefault()
    const id = short.generate();
    setGoals([...goals, { name:formState['name'], id }])
    setFormState({ name: '' })
  }

  const setEditing = (id) => {
    let goalToUpdate = goals.find(goal => goal.id === id)
    goalToUpdate.editing = true;
    let newGoals = goals.filter(goal => goal.id !== id)
    newGoals = [...newGoals, goalToUpdate]
    setGoals(newGoals)
  }

  console.log(goals, ' This is goals')

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
                  value={name}
                  name="name"
                  placeholder="Goal to set"
                  onChange={handleChange}
                />
                <button type='submit'>Add a Goal</button>
              </form>
              {
                goals.map((goal, index) => {
                  const { name, id, editing } = goal;
                  return (
                    <div style={{ display: 'flex' }}>
                      {
                        editing ? (
                          <span> I'm being edited</span>
                        ) :
                          (
                            <span key={id}>{name}</span>
                          )
                      }
                      <button onClick={() => onRemoveGoal(id)}> - </button>
                      <button onClick={() => setEditing(id)}>{editing ? 'Set' : 'Edit'}</button>
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
