import React, { Component, PropTypes } from 'react';

import Select from '../../../../../common/Select';

export default class GeneralPage extends Component {
  static propTypes = {
    handleNextStep: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
  }
  handleCancel(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form className="general-form">
          <div className="group">
            <input type="text" required="required" />
            <label>{'Name'}</label>
          </div>
          <div className="group last">
            <input type="text" required="required" />
            <label>{'Description'}</label>
          </div>
          <div className="group-select">
            <Select label={'Language'} options={['English', 'Russia', 'Deutsch']} />
          </div>
          <div className="group-select">
            <Select label={'Category'} options={['Adult', 'All']} />
          </div>
          <div className="group-select">
            <Select label={'Subcategory'} options={['Cartoons', 'Movie']} />
          </div>
          <div className="buttons">
            <button className="btn success" onClick={this.props.handleNextStep.bind(this, 'general')}>{'next'}</button>
            <button className="btn cancel" onClick={this.handleCancel.bind(this)}>{'cancel'}</button>
          </div>
        </form>
      </div>
    );
  }
}
