import logo from './logo.svg';
import './App.css';

function App() {
  
  const courseListData = fetch('http://localhost:5000/api//courses')
    .then(res =>res.json())
    .then(data => console.log(data.courses));

  return (
    <div className="App">
      <h1>sd</h1>
    </div>
  );
}

export default App;
