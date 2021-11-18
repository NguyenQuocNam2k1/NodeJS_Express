import { useState } from "react";

function App() {
  const [listWord, setListWork] = useState([]);
  const [work, setWork] = useState();
  const handleChangeWork = (value) => {
    setWork(value);
  };
  const addWork = () => {
    setListWork((pev) => {
      return [...pev, work];
    });
  };

  return (
    <div className='App' style={{ margin: "30px" }}>
      <input
        type='text'
        onChange={(event) => handleChangeWork(event.target.value)}
      />
      <button onClick={() => addWork()}>Add</button>
      <ul>{listWord.map((item,key)=>{
        return(
          <li key={key}>{item}</li>
        )
      })}</ul>
    </div>
  );
}

export default App;
