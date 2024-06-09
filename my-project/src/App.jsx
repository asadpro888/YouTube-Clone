import './index.css'
import MyComponent from './myapp'
import Videos from './Videos'
import Navbar from './Navbar'

function App() {
  return (
    <>
        <div className='flex flex-wrap bg-slate-950'>
        <MyComponent/>
        <section>
          <Navbar/>
        </section>
        
        <Videos/>
        </div>
    </>
  )
}

export default App
