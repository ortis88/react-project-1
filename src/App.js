import { useState } from "react";

//項目的根組件
//被index.js引入->public/index.html渲染

//count是狀態變數
//setCount 修改狀態變數方法
function App() {
  const[count,setCount]=useState(0)

  function handleCount(){
    setCount(count+1)
  }

  const[form,setForm]=useState({name:'Alex'});

  function handleForm(){
    setForm(
      {...form,name:'John'}
    )
  };

  return (
    <div className="App">
      <button onClick={handleCount}>{count}</button>
      <button onClick={handleForm}>修改為{form.name}</button>
    </div>
  );
}

export default App;