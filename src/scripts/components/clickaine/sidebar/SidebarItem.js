import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class SidebarItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object,
    notification: PropTypes.number,
    switchToCurrentPage: PropTypes.func,
    activeClass: PropTypes.bool,
    type: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
  }
  switchToPage(title) {
    this.props.switchToCurrentPage(title);
  }
  render() {
    const { title, icon, notification, activeClass, type } = this.props;
    return (
      <Link
        to={`/${type}/${title.toLowerCase()}`}
        activeClassName="active"
        className="sidebar-item"
        onClick={this.switchToPage.bind(this, title)}
      >
        <div>
          <span className={`sidebar-item--icon ${activeClass ? 'active' : ''}`}>{icon}</span> <span className="item--heading">{title}</span> {notification ? <span className="item--notification">{notification}</span> : null}
        </div>
      </Link>
    );
  }
}
