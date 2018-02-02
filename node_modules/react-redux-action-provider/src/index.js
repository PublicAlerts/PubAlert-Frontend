import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

export default (actionsToProvide) => {
  class ActionProvider extends Component {
    getChildContext() {
      return {
        actions: bindActionCreators(actionsToProvide, this.context.store.dispatch)
      }
    }

    render() {
      return Children.only(this.props.children)
    }
  }

  ActionProvider.contextTypes = {
    store: PropTypes.object.isRequired
  };

  ActionProvider.childContextTypes = {
    actions: PropTypes.object.isRequired
  };

  return ActionProvider;
}
