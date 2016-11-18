import React, { Component } from 'react';
import { Link } from 'react-router';

import GetCodePage from './types/GetCodePage';
import TrafficTypePage from './types/TrafficTypePage';
import GeneralPage from './types/GeneralPage';

import SvgIcon from '../../../../common/SvgIcon';

export default class CreateZonePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
      tooltipName: '',
      step: 'trafficType'
    };
  }
  handleNextStep(prevStep, e) {
    e.preventDefault();
    if (prevStep === 'trafficType') {
      this.setState({
        step: 'general'
      });
    } else if (prevStep === 'general') {
      this.setState({
        step: 'getCode'
      });
    } else if (prevStep === 'getCode') {
      this.setState({
        step: 'general'
      });
    } else {
      this.setState({
        step: 'trafficType',
        showTooltip: false
      });
    }
  }
  render() {
    const { step } = this.state;
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
          <h1 className="active-page--title">{'New AdZone'}</h1>
        </header>
        <section className="active-page--add-zone">
          <ul className="active-page--add-zone--choice">
            <li><button onClick={this.handleNextStep.bind(this, '')} className={step === 'trafficType' ? 'active' : ''}>{'traffic type'}</button></li>
            <li><button onClick={this.handleNextStep.bind(this, 'getCode')} className={step === 'general' ? 'active' : ''}>{'general'}</button></li>
            <li><button onClick={this.handleNextStep.bind(this, 'general')} className={step === 'getCode' ? 'active' : ''}>{'get code'}</button></li>
          </ul>
        </section>
        { step === 'trafficType' && <TrafficTypePage handleNextStep={this.handleNextStep.bind(this)} /> }
        { step === 'general' && <GeneralPage handleNextStep={this.handleNextStep.bind(this)} /> }
        { step === 'getCode' && <GetCodePage /> }
      </div>
    );
  }
}
