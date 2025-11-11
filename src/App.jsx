import Navbar from './components/navbar'
import Form from './components/Form.jsx'
function App() {

  return (<>
    <header><Navbar></Navbar></header>
    <main className='container mt-4'>
      <div className="mx-auto col-6">
        <Form></Form>

      </div>
    </main>
  </>
  )
}

export default App
