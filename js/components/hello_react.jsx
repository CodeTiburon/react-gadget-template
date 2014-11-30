var React = require('react');
var VersalGadgetMixin = require('./mixins/versal');

var Name = require('./name');

var HelloReact = React.createClass({
  mixins: [VersalGadgetMixin],

  render: function() {
    var role = this.state.editable ? 'author' : 'learner';
    return (
      <div className="hello">
        <div>
          Hello ReactJs + Versal!
          <span refs="role" className="role">{role}</span>
        </div>
        <div>
          Author <Name name="Lulu" editable={this.state.editable} />
        </div>
      </div>
    );
  }
});

module.exports = HelloReact;
