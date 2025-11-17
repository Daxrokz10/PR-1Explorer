import react, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import List from './components/List'
import Demo from './components/Demo'
function App() {
  const [showComp, setShowComp] = useState(false);
  const toggleComp = () => {
    if (showComp) {
      setShowComp(false);
    } else {
      setShowComp(true);
    }
  }
  useEffect(()=>{
    if (!showComp) {
      console.log("unmounted")
    }
    else{
      console.log("mounted");
    }
  },[showComp])
  return (<>
    <header><Navbar></Navbar></header>
    <main className='container mt-4'>
      <div className="mx-auto col-6">
        <List></List>
      </div>
      {showComp ? <Demo></Demo> : null}
      <button onClick={toggleComp}>Toggle Component</button>

    </main>
  </>
  )
}

export default App
