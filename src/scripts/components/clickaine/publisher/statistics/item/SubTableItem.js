import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class SubTableItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    displays: PropTypes.string,
    hits: PropTypes.string,
    cpm: PropTypes.string,
    cpc: PropTypes.string,
    earnings: PropTypes.string,
    onShowAddZoneButton: PropTypes.func,
    onHideAddZoneButton: PropTypes.func
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { name, hits, earnings, displays, cpm, cpc, onHideAddZoneButton, onShowAddZoneButton } = this.props;
    return (
      <tr className="sub-table-item" onMouseLeave={onHideAddZoneButton} onMouseEnter={onShowAddZoneButton}>
        <td>
          <span className="site">
            <Link className="site-link" to="/publisher/sites/1/zones/9/update">{name}</Link>
          </span>
        </td>
        {/* <td><span></span></td> */}
        <td><span>{displays}</span></td>
        <td><span>{hits}</span></td>
        <td><span>{cpm}</span></td>
        <td><span>{cpc}</span></td>
        <td><span>{earnings}</span></td>
      </tr>
    );
  }
}
