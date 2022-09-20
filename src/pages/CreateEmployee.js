import Header from '../components/header.js'
import Form from '../components/Form.js'
import Footer from '../components/Footer.js'

function App() {
  return (
    <div className="App">
      <Header link='/currentEmployees' linkText='View Current Employees'/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
