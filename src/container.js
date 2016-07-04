var React = require('react')

module.exports = React.createClass({
  displayName: 'CerebralContainer',
  childContextTypes: {
    controller: React.PropTypes.object.isRequired
  },
  propTypes: {
    app: React.PropTypes.func,
    controller: React.PropTypes.object.isRequired,
    children: React.PropTypes.node
  },
  getChildContext: function () {
    return {
      controller: this.props.controller
    }
  },
  render: function () {
    return this.props.app ? React.createElement(this.props.app) : this.props.children
  }
})
