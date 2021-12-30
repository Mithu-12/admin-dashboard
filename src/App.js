import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Slidebar from './Slidebar/Slidebar';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Slidebar/>
                  <Dashboard/>
                
             </div>
            </div>  
        </div>  
        );
}

export default App;
