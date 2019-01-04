var React = require('react');

var ContentToggle = React.createClass({
	render () {
		return (
			<div>
				<div className="contentToggle__Summary">summery</div>
				<div className="contentToggle__Detail">details</div>
			</div>
		);
	}
})

React.render(<ContentToggle/>, document.getElementById('app'));