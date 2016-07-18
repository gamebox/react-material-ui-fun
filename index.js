import React from 'react';
import ReactDOM from 'react-dom';

const Name = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  name: function() { return this.props.name ? this.props.name : 'World' },
  render: function() {
    return <span>{this.name()}!</span>;
  }
})


const Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello <Name name="Tony" /></h1>
      </div>
    );
  }
});

ReactDOM.render(<Main />,
                document.getElementById('app'));
