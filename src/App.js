import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data.js";

const datalist = data.map((item) => {
	return <div><Card key={item.id} {...item} /><hr className="line"/></div>;
});

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="card-list">{datalist}</div>
		</div>
	);
}

export default App;
