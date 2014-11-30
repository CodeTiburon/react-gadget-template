var React = require('react');
var VersalGadgetMixin = require('./mixins/versal');

var HelloReact = React.createClass({
  mixins: [VersalGadgetMixin],

  render: function() {
    var role = this.state.editable ? 'author' : 'learner';
    return (
      <div className="hello">
        Hello ReactJs + Versal!
        <span refs="role" className="role">{role}</span>
      </div>
    );
  }
});

module.exports = HelloReact;
