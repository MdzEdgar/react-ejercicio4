import './App.css'
import FavoriteFood from './components/FavoriteFood'
import Hobbies from './components/Hobbies';
import Personal from './components/Personal';
import StackTech from './components/StackTech';

function App() {
  
  return (
    <div className="App">
      <div className="container">
        <Personal title='Personal'/>

        <Hobbies title='Hobbies'/>

        <FavoriteFood title='Mi Stack Tech' />
        
        <StackTech title='Comida favorita'/>
      </div>
    </div>
  )
}

export default App
