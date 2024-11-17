import './App.css';
import Navbar from './components/Navbar'
import propsType from 'prop-types';
import TextForm from './components/TextForm';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Content from './components/content';

function App() {
  return (<>
  
<Router>
<Navbar title="Home"/>
<Routes>
  <Route path='/' element={ <div className='container'>
  <TextForm heading='Enter Text'/>
  </div>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/content' element={<Content/>}></Route>

</Routes>
</Router>
    {/* <Navbar/>  */}

    </>
  );
}

export default App;

Navbar.propType={
  title: propsType.string
}
// if we don't give any props then defoult props get execut
Navbar.defaultProps={
  title: 'Home1'
}
