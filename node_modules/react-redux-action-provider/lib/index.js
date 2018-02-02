'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = actionsToProvide => {
  class ActionProvider extends _react.Component {
    getChildContext() {
      return {
        actions: (0, _redux.bindActionCreators)(actionsToProvide, this.context.store.dispatch)
      };
    }

    render() {
      return _react.Children.only(this.props.children);
    }
  }

  ActionProvider.contextTypes = {
    store: _propTypes2.default.object.isRequired
  };

  ActionProvider.childContextTypes = {
    actions: _propTypes2.default.object.isRequired
  };

  return ActionProvider;
};