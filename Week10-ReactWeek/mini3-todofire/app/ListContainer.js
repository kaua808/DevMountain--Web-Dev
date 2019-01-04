var React = require('react'),
	AddItem = require('./AddItem'),
	List = require('./List'),
	AddList = require('./AddList'),
	Firebase = require('firebase');

var ListContainer = React.createClass({
	getInitialState: function() {
		return {
			list: []
		}
	},
	handleAddItem: function(newItem) {
		this.firebaseRef.push(newItem);
	},
	handleRemoveItem: function(index) {
		var item = this.state.list[index];
		this.firebaseRef.child(item.key).remove();
	},
	componentDidMount: function() {
		var firebaseRef = new Firebase('https://kaleotodofire.firebaseio.com/');
		this.firebaseRef.on('child_added', function(snapshot) {
			this.setState({
				list: this.state.list.concat([{key: snapshot.key(), val: snapshot.val()}])
			})
		}.bind(this));

		this.firebaseRef.on('child_removed', function(snapshot) {
			var key = snapshot.key();
			var newList = this.state.list.filter(function(item) {
				return item.key !== key;
			});
			this.setState({
				list: newList
			});
		}.bind(this));
	},
	render: function() {
		var styles = {
  				container: {
				    border: "1px solid rgb(208, 208, 208)",
				    marginTop: 10,
				    marginBottom: 10,
				    borderRadius: 5,
				    background: this.props.bg
  				},
  			remove: { 
	 			top: 15,
				color: "rgb(222, 79, 79)",
			    float: "left",
			    cursor: 'pointer'	 			
  		}
	};
		return (
			<div className="col-sm-6">
				<div className="col-sm-12" style={styles.container}>
				    <span
		            className="glyphicon glyphicon-remove"
		            style={styles.remove}
		            onClick={this.props.remove.bind(null, this.props.index)}>
		            </span>
					<h3 className="text-center"> {this.props.title} </h3>
					<AddItem add={this.handleAddItem}/>
					<List items={this.state.list} remove={this.handleRemoveItem}/>
				</div>
			</div>
		)
	}
});

module.exports = ListContainer;
































