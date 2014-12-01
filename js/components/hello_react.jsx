var _ = require('underscore');
var React = require('react');
var Name = require('./name');

var HelloReact = React.createClass({
  renderAuthorName: function() {
    return (
      <Name
        className="authorName"
        name={this.props.authorName}
        editable={this.props.editable}
        onNameChange={this.props.onAuthorNameChange} />
    );
  },

  renderLearnerName: function() {
    return (
      <Name
        className="learnerName"
        name={this.props.learnerName}
        editable={!this.props.editable}
        onNameChange={this.props.onLearnerNameChange} />
    );
  },

  renderSmilies: function() {
    var smilies = [];
    _.each(_.range(this.props.numberOfSmilies), function() {
      smilies.push('(:');
    });
    return (
      <span className="smilies">{smilies.join('')}</span>
    );
  },

  render: function() {
    var role = this.props.editable ? 'author' : 'learner';
    return (
      <div className="hello">
        <div>
          Hello ReactJs + Versal!
          <span className="role">{role}</span>
        </div>
        <hr />
        <div>
          Author: {this.renderAuthorName()}
        </div>
        <div className="smilies">{this.renderSmilies()}</div>
        <div>
          Learner: {this.renderLearnerName()}
        </div>
      </div>
    );
  }
});

module.exports = HelloReact;
