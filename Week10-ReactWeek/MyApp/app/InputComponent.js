var React = require('react');

var InputComponent = React.createClass({
	getInitialState: function() {
		return {
			newItem: ''
		}
	},
	handleChange: function(e) {
		this.setState({
			newItem: e.target.value
		});
	},
	handleSubmit: function() {
		this.props.addThing(this.state.newItem);
		//this is where we clear the input field after its been submitted
		this.setState({
			newItem: ''
		})
	},
	render: function(){
		return (
			<div>
				<input type="text" value={this.state.newItem} onChange={this.handleChange} />
				<button onClick={}> Submit </button>
			</div>
		)
	}
})

module.exports = InputComponent;