import React, { useState } from 'react';

const defaultGoals = [
  {
    name: 'Not be fat',
    id: '1',
  },
  {
    name: 'Not be fatter',
    id: '2',
  },
  {
    name: 'Not be fattest',
    id: '3',
  },

]

const GoalsPage = ({user}) => {
  const [goals, setGoals] = useState(defaultGoals);
  const [formState, setFormState] = useState({ name: '' });
  const { name } = formState;

  const onRemoveGoal = (id) => {
    setGoals(goals.filter(item => item.id !== id))
  }

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.name
    const value = e.target.value
    setFormState({...formState, [name]: value})
  }


  return (
    <div className="PageBody">
      Goals
      {
        user ? (
          <div>
            <ul>
              <form>
                <input
                  value={name}
                  name="name"
                  placeholder=" x value"
                  onChange={handleChange}
                  className="border border-black border-2 rounded m-0 shadow-lg"
                />
                <button>Add a Goal</button>
              </form>

              {
                goals.map((goal) => {
                  const { name, id, } = goal;
                  return (
                    <div style={{ display: 'flex' }}>
                      <span key={id}>{name}</span><button onClick={() => onRemoveGoal(id)}> - Remove Goal</button>
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