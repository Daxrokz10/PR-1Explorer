import Navbar from './components/navbar'
import List from './components/List'
function App() {

  return (<>
    <header><Navbar></Navbar></header>
    <main className='container mt-4'>
      <div className="mx-auto col-6">
        <List></List>
      </div>
    </main>
  </>
  )
}

export default App
