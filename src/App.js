import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PageNoteFound from './components/PageNotFound/PageNoteFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<PageNoteFound></PageNoteFound>}></Route>
      </Routes>
      
      

    </div>
  );
}

export default App;
