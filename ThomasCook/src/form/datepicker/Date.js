var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

var Depart = React.createClass({
  displayName: 'Example',

  getInitialState: function() {
    return {
      startDate: moment()
    };
  },

  handleChange: function(date) {
    this.setState({
      startDate: date
    });
  },

  render: function() {
    return <DatePicker dateFormat="D MMMM YYYY" locale='fr'
        selected={this.state.startDate}
        onChange={this.handleChange} />;
  }
});

export default Depart
