import React, { Component } from 'react';
import Form from "./Form";
import Recipes from "./Recipes";
import "../css/App.css";

const API_KEY = "afd334e362b16ba74ea84165428b91e8";
class App extends Component {

	state = {
    	recipes: []
  	}
 	getRecipe = async (e) => {
	    const recipeName = e.target.elements.recipeName.value;
	    e.preventDefault();
	    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`);
	    const data = await api_call.json();
	    this.setState({ recipes: data.recipes });
 	}
 	componentDidUpdate = () => {
 		const recipes = JSON.stringify(this.state.recipes);
    	localStorage.setItem("recipes", recipes);
 	}
 	componentDidMount(){
 		const json = localStorage.getItem("recipes");
 		const recipes = JSON.parse(json);
 		this.setState({recipes : recipes});
 	}
  	render() {
	    return (
	      <div className="App">
	        <header className="App-header">
	          <h1 className="App-title">Recipe Search</h1>
	        </header>
	    	<Form getRecipe={this.getRecipe}/>
	    	<Recipes recipes={this.state.recipes}/>
	      </div>
	    );
  	}
}
export default App;