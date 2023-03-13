import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import data from "./Data.json";

function App() {
  return (
    <>
      <div className="emp-container">
        {
          data.map((data,i) => (
            <Employee name={data.name} key={i} designation={data.designation}  img={data.image}/>
          ))
        }
      </div>
    </>
  );
}

export default App;
