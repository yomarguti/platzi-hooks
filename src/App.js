import './tailwind.output.css';
import Header from './components/Header';
import Characters from './components/Characters';

function App() {
  return (
    <div className="w-full md:w-mdw lg:w-lgw mx-auto">
      <Header />
      <Characters />
    </div>
  );
}

export default App;
