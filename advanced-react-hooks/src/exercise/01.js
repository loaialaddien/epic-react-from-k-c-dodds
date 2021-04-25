// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
const STATE_ACTIONS = {
  "INCREMENT":"INCREMENT"
}
function Counter({initialCount = 0, step = 3}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)
  const countReducer = (previous,next)=>{
    next = typeof next === "function" ? next(previous) : next;
    const {action} = next;
    switch (action) {
      case STATE_ACTIONS.INCREMENT:
        const {count} = previous;
        const {step} = next
        return {
          ...previous,
          count : count + step
        }
      default:
        return previous;
    }
  }
  const [state, dispatch] = React.useReducer(countReducer,{count:initialCount})
  const {count} = state;
  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => dispatch(()=>({step,action:STATE_ACTIONS.INCREMENT }))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
