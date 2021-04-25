// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'


function useLocalStorageState(key){
  const saveInLocal = (key,value)=>window.localStorage.setItem(key,value);
  const getFromLocal = ()=>window.localStorage.getItem(key);
  let toBeSaved = getFromLocal();
  const setInLocalStorage = (value)=>{
    toBeSaved = value;
    saveInLocal(key,value);
  }
  return[
    toBeSaved,
    setInLocalStorage
  ]
}
function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [name, setName] = React.useState(initialName)

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰
  const [localStorageValue,setInLocalStorage] = useLocalStorageState('name')
  React.useEffect(()=>{
    setName(localStorageValue)
  },[]);

  React.useEffect(()=>{
    setInLocalStorage(name);
  },[name,setInLocalStorage]);

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
