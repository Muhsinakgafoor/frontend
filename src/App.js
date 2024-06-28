/*import logo from './logo.svg';
import './App.css';
import Nav from './component/navbar.jsx'
import Banner from './component/banner.jsx';
import Description from './component/description.jsx';
import Founder from './component/founder.jsx';

function App() {
  return (
    <>
   <Nav/>
   <Banner/>
   <Description/>
   <Founder/>
   </>
   

  );
}

export default App;*/

/*import logo from './logo.svg';
import './App.css';
import Signup2 from './component/signup2';
import Login from './component/login';
import Aboutme from './component/aboutme';
import Aboutme2 from './component/aboutme2';

function App() {
  return (
    <>
    <Aboutme/>
    <Aboutme2/>
    </>
  );
}

export default App; */

import react from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './component/login';
import Signup2 from './component/signup2';
import NotFound from './component/NotFound';
import Aboutme2 from './component/aboutme2';
import Aboutme from './component/aboutme';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup2" element={<Signup2/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
      <Route path="/aboutme" element={<Aboutme/>} />
      <Route path="/aboutme2" element={<Aboutme2/>} />

    </Routes>


    </BrowserRouter>

  );
}

export default App; 

