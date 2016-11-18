import React, { Component } from 'react';
import { Link } from 'react-router';
import SvgIcon from '../../../../common/SvgIcon';

export default class TableItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>
          <span className="site">
            <Link className="site-link" to="/publisher/sites/10/update">
              {'brabdev.com'}
            </Link>
          </span>
          <span className="active-page--content--table--zones">
            <span>
              {'3 sites'}
              <span className="btn-icon">
                <SvgIcon imageID="svgicon__filters--shape" className="filters--shape" />
              </span>
            </span>
            <span className="active-page--content--table--zones--add">
              {/* {this.renderAddZone()} */}
            </span>
          </span>
        </td>
        <td>{'2,748,522'}</td>
        <td>{'33,665'}</td>
        <td>{'$0.090'}</td>
        <td>{'$0.30'}</td>
        <td>{'$7,115.77'}</td>
      </tr>
    );
  }
}
