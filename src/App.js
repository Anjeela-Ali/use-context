import './App.css';
import ComponentOne from './components/component1';
import ComponentSecond from './components/component2';
import ContextState from './context/state';

function App() {
  return (
    <div className="App">
      <ContextState>
        <ComponentOne />
        <ComponentSecond />
      </ContextState>


    </div>
  );
}

export default App;
