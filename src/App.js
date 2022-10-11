import './App.css';
import Nav from './components/Nav/Nav';


function App() {
  // useEffect( ()=> {
  //   fetch('https://openapi.programming-hero.com/api/quiz')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // } ,[])
  return (
      <div>
        <Nav></Nav>
      </div>
  )
}

export default App;
