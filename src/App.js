import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav'

import MyWelcome from './components/MyWelcome'
import MyFooter from './components/MyFooter';
import Prova from "./components/Prova"


function App() {
  return (
    <div className="App">
      <MyNav />
      <main>
     <MyWelcome />
      </main>
      < Prova />
   
      <MyFooter />
      
     
     
     
       
        
       
    </div>
  );
}

export default App;
