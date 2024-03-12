import './App.css';
import { Card } from './components/Card';
import { ShowHide } from './components/ShowHide';
import vehicles from './data/vehicles';

function App() {
  const vehicleList = vehicles.map((v) => {
    return <Card key={v.name} title={v.name} description={v.description} />;
  });

  return (
    <>
      <h1>Hola soy el padre</h1>
      <div className="container">{vehicleList}</div>
      <div></div>
      <ShowHide />
    </>
  );
}

export default App;
