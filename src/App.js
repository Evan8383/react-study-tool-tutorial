import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import NoteDetails from './NoteDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/notes/:id' element={<NoteDetails />}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;