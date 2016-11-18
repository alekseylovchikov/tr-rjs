import React, { Component, PropTypes } from 'react';

import SvgIcon from './SvgIcon';

export default class Select extends Component {
  static propTypes = {
    label: PropTypes.string,
    options: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      active: 0
    };
  }
  handleShowOptions(active) {
    const { open: currentState } = this.state;
    this.setState({ open: !currentState, active });
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    const { label, options } = this.props;
    const { open, active } = this.state;
    const renderOptions = options.map((el, i) => {
      return (
        <li
          className={`${open && 'show'} ${active === i && 'active'}`}
          key={i}
          onClick={this.handleShowOptions.bind(this, i)}
        >{ el } {(active === i && !open) && <span className="shape"><SvgIcon className="" imageID="svgicon__filters--shape" /></span>}</li>
      );
    });
    return (
      <div className="select">
        <span>{ label }</span>
        <ul className={open && 'opened'} onMouseLeave={this.handleClose.bind(this)}>
          { renderOptions }
        </ul>
      </div>
    );
  }
}
