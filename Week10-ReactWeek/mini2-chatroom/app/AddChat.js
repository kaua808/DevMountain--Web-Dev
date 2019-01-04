var React = require('react');
var $ = require('jquery');

var AddChat = React.createClass({
  protoTypes: {
  	url: React.protoTypes.string.isRequired
  },
  getDefaultProps: function() {
  	return {
  		url: ""
  	}
  }
  render: function(){
    return (
      <div className="form-group">
      </div>
    )
  }
});

module.exports = AddChat;