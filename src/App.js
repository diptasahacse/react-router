import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PageNoteFound from './components/PageNotFound/PageNoteFound';
import Members from './components/Members/Members';
import Header from './components/Header/Header';
import Member from './components/Member/Member';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/members' element={<Members></Members>}></Route>
        <Route path='/member/:memberId' element={<Member></Member>}></Route>
        <Route path='*' element={<PageNoteFound></PageNoteFound>}></Route>
      </Routes>
      
      

    </div>
  );
}

export default App;
