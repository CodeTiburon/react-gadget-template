var HelloReact = require('../../js/components/hello_react');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var findComponent = TestUtils.findRenderedDOMComponentWithClass;

describe('HelloReact', function() {
  it('should render', function() {
    var component = TestUtils.renderIntoDocument(<HelloReact />);
    var foundComponent = findComponent(component, 'hello-react');
    foundComponent.should.exist();
  });

  describe.skip('editable', function() {
    it('should indicate the user is an author', function() {
      var component = TestUtils.renderIntoDocument(<HelloReact />);
      var foundComponent = findComponent(component, 'role');
      foundComponent.props.children.should.eq('author');
    });
  });

  describe('not editable', function() {
    it('should indicate the user is an learner', function() {
      var component = TestUtils.renderIntoDocument(<HelloReact />);
      var foundComponent = findComponent(component, 'role');
      foundComponent.props.children.should.eq('learner');
    });
  });
});
