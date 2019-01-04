var React = require('react');
var InputComponent = require('./InputComponent')

var App = React.createClass({
	getInitialState: function() {
		return {
			items: []
		}
	},
	propTypes: {
		addThing: React.PropTypes.Func.isRequired
	},
	updateState: function(newItem) {
		var newArr = this.state.items.concat([newItem]); 
		this.state({
			items: newArr
		})	
	},
	render: function() {
		var ourList = this.state.items.map(function(item, index) {
			return (
				<li key={index}>
					{item}
				</li>
				)
		});
		return (
			<div>
				Hello World
				<InputComponent addThing={this.updateState}/> 
				{ourList}
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));