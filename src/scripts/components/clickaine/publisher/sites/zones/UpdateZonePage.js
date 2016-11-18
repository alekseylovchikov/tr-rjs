import React, { Component } from 'react';
import { Link } from 'react-router';

import SvgIcon from '../../../../common/SvgIcon';

export default class UpdateZonePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
      tooltipName: '',
      step: 'general'
    };
  }
  handleShowTooltip(name) {
    this.setState({ showTooltip: true, tooltipName: name });
  }
  handleHideTooltip() {
    this.setState({ showTooltip: false });
  }
  handleNextStep(prevStep) {
    if (prevStep === 'trafficType') {
      this.setState({
        step: 'general',
        showTooltip: false
      });
    } else if (prevStep === 'general') {
      this.setState({
        step: 'getCode',
        showTooltip: false
      });
    } else {
      this.setState({
        showTooltip: false
      });
    }
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
    const { step } = this.state;
    const trafficType = (
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
                  onClick={this.handleNextStep.bind(this, 'trafficType')}
                  onMouseEnter={this.handleShowTooltip.bind(this, 'popunder')}
                  onMouseLeave={this.handleHideTooltip.bind(this)}
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
    return (
      <div className="active-page--container">
        <header className="active-page--header">
          <section className="active-page--header--breadcrumb">
            <h5 className="padding active-page--title--small">
              <Link className="breadcrumb" to="/publisher/sites">{'Sites'}</Link>
              <span>&rarr;</span>
              <Link to="/publisher/sites" className="breadcrumb">{'by site'}</Link>
              <span>&rarr;</span>
              <Link to="/publisher/sites" className="breadcrumb">{'domain.com'}</Link>
            </h5>
          </section>
          <h1 className="active-page--title">{'Edit AdZone'}</h1>
        </header>
        <section className="active-page--add-zone">
          <ul className="active-page--add-zone--choice">
            <li><button className={step === 'trafficType' ? 'active' : ''}>{'traffic type'}</button></li>
            <li><button className={step === 'general' ? 'active' : ''}>{'general'}</button></li>
            <li><button className={step === 'getCode' ? 'active' : ''}>{'get code'}</button></li>
          </ul>
        </section>
        { step === 'trafficType' && trafficType }
      </div>
    );
  }
}
