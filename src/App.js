import './App.css';
import Cards from './Componets/Cards';


function App() {
  return (
    <div className='w-full h-full bg-gradient-to-r from-sky-500 to-indigo-500'>
      <div className=" App flex flex-col items-center">
      <h1 className='App-header'>Chunk Norris</h1>
      <Cards/>
    </div>
    </div>
  );
}

export default App;
