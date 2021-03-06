var _ = require('underscore');
var React = require('react');
var HelloReact = require('./components/hello_react');
var VersalGadgetMixin = require('./mixins/versal');

// This is an incubator. Some things can be extracted up
// into the mixin. It's the place where where we set attributes
// on the app.

var HelloReactController = React.createClass({
  mixins: [VersalGadgetMixin],

  getDefaultAttributes: function() {
    return {
      numberOfSmiles: 3
    };
  },

  getPropertySheetAttributes: function() {
    return {
      numberOfSmiles: { type: 'Select',
        options: [1, 2, 3, 4]
      }
    };
  },

  onAuthorNameChange: function(authorName) {
    this.player.setAttributes({ authorName: authorName });
  },

  onLearnerNameChange: function(learnerName) {
    this.player.setLearnerState({ learnerName: learnerName });
  },

  render: function() {
    if (!this.state.ready) {
      return null;
    }

    return (
      <HelloReact
        {...this.state}
        onAuthorNameChange={this.onAuthorNameChange}
        onLearnerNameChange={this.onLearnerNameChange} />
    );
  }
});

React.render(
  <HelloReactController />,
  document.getElementById('app')
);
