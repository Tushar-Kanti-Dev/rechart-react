import logo from './logo.svg';
import './App.css';
import Rechart from './components/Rechart/Rechart';
import BarChart from './components/BarChart/BarChart';
import AreaCharts from './components/AreaCharts/AreaCharts';
import SpecialChart from './components/SpecialChart/SpecialChart';

function App() {
  return (
    <div className="App">
      <h2>Learn Rechart</h2>
      <Rechart></Rechart>
      <h2>Area Chart </h2>
      <AreaCharts></AreaCharts>
      {/* <BarChart></BarChart> */}

      <h2>Create AREA CHART using JSON DATA</h2>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
