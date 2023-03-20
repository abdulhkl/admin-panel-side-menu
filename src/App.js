import Sidebar from './components/Sidebar/Sidebar'
import AnimalList from './components/Animals/AnimalList'
import { AnimalProvider } from './context/AnimalContext';

function App() {

  return (
    <AnimalProvider>
      <div className="wrapper">
        <Sidebar />
        <div className='main-content'>
          <AnimalList />
        </div>
      </div>
    </AnimalProvider>
  )
}

export default App