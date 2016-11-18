import React, { Component, PropTypes } from 'react';

import SvgIcon from '../../../../../common/SvgIcon';

export default class TrafficTypePage extends Component {
  static propTypes = {
    handleNextStep: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
      tooltipName: ''
    };
  }
  handleShowTooltip(name) {
    this.setState({ showTooltip: true, tooltipName: name });
  }
  handleHideTooltip() {
    this.setState({ showTooltip: false });
  }
  renderTooltip() {
    const { showTooltip, tooltipName } = this.state;
    if (showTooltip) {
      return (
        <div className={tooltipName}>
          {'Pop-under popup is a plugin to load window behind the browser window of your website or second smaller browser window upon clicking your website.'}
          <SvgIcon className="icon-popunder" imageID="svgicon__popunder" />
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <div>
        <section className="active-page--traffic-type">
          <section className="active-page--traffic-type--web-ad type">
            <header>
              <SvgIcon imageID="svgicon__web-ad" className="icon-web-ad" />
              <h2>{'Web Ad'}</h2>
            </header>
            <ul>
              <li id="popunder">
                <button
                  onClick={this.props.handleNextStep.bind(this, 'trafficType')}
                  onMouseEnter={this.handleShowTooltip.bind(this, 'popunder')}
                  onMouseOut={this.handleHideTooltip.bind(this)}
                >
                  {'Popunder'}
                </button>
                { this.renderTooltip() }
              </li>
              <li><button>{'Text Ad'}</button></li>
              <li><button>{'Banner'}</button></li>
              <li><button>{'Instant Msg'}</button></li>
              <li><button>{'Interstitials'}</button></li>
              <li><button>{'Direct Link'}</button></li>
              <li><button>{'In-Video'}</button></li>
              <li><button>{'Notification Bar'}</button></li>
              <li><button>{'Sticky Banner'}</button></li>
            </ul>
          </section>
          <section className="active-page--traffic-type--mobile-ad type">
            <header>
              <SvgIcon className="icon-mobile-ad" imageID="svgicon__mobile-ad" />
              <h2>{'Mobile Ad'}</h2>
            </header>
            <ul>
              <li>
                <button>{'Mobile Banner'}</button>
              </li>
              <li>
                <button>{'Mobile Redirect'}</button>
              </li>
              <li>
                <button>{'Mobile Popunder'}</button>
              </li>
              <li>
                <button>{'Mobile Instant Msg'}</button>
              </li>
            </ul>
          </section>
          <section className="active-page--traffic-type--advertising type">
            <header>
              <SvgIcon className="icon-advertising" imageID="svgicon__advertising" />
              <h2>{'In-App Advertising'}</h2>
            </header>
            <ul>
              <li>
                <button>{'In-App Banner'}</button>
              </li>
            </ul>
          </section>
        </section>
      </div>
    );
  }
}
