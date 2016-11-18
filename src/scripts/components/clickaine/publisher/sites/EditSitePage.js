import React, { Component } from 'react';
import { Link } from 'react-router';
import autoBind from 'react-autobind';
import SvgIcon from '../../../common/SvgIcon';

export default class EditSitePage extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      url: '',
      description: '',
      showProveOwnershipBtn: true,
      popupShow: false,
      htmlCode: '<meta name="brabtraffic" content="847286172669c098c7deff7" />'
    };
  }
  handleChangeDescription(e) {
    const description = e.target.value;
    this.setState({ description });
  }
  handleTogglePopupWindow(e) {
    e.preventDefault();
  }
  handleCloseModal() {
    this.setState({ popupShow: false });
  }
  handleDeleteSite(e) {
    e.preventDefault();
    this.setState({ popupShow: true });
  }
  renderPopup() {
    const { popupShow } = this.state;
    if (popupShow) {
      return (
        <div className="popup">
          <div className="popup--modal--confirm">
            <section className="popup--actions">
              <span className="close-modal" onClick={this.handleCloseModal}>
                <SvgIcon imageID="svgicon__close" className="" />
              </span>
            </section>
            <h3>{'Delete'} <a href="#">{'optionarium.com'}</a>{'?'}</h3>
            <section className="popup--modal--confirm--content">
              <span>{'All settings for this site will be removed.'}</span>
            </section>
            <section className="popup--modal--confirm--actions">
              <button className="btn danger confirm">{'delete'}</button>
              <button className="btn cancel" onClick={this.handleCloseModal}>{'cancel'}</button>
            </section>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    const { showProveOwnershipBtn } = this.state;
    return (
      <div className="active-page--container">
        { this.renderPopup() }
        <header className="active-page--header">
          <section className="active-page--header--breadcrumb">
            <h5 className="padding active-page--title--small"><Link className="breadcrumb" to="/publisher/sites">{'Sites'}</Link></h5>
          </section>
          <h1 className="active-page--title">{'Edit Site'}</h1>
        </header>
        <section className="new-page-form padding">
          <form className="form">
            <span className="form--title">
              <a href="#">
                {'optionarium.com'}
              </a>
            </span>
            { showProveOwnershipBtn ? <button className="btn prove" onClick={this.handleTogglePopupWindow}>{'prove ownership'}</button> : null }
            <div className="status">
              <h3>{'Status:'}<SvgIcon imageID="svgicon__waiting" className="waiting" />{'Waiting for proving ownership'}</h3>
              <small>{'Please approve your site before sending traffic'}</small>
            </div>
            <input
              className="form-input"
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChangeDescription}
            />
            <div className="form-actions">
              <Link className="btn success" to="/publisher">{'update'}</Link>
              <Link className="btn cancel" to="/publisher/statistics">{'cancel'}</Link>
              <button className="btn danger btn-right" onClick={this.handleDeleteSite}>{'delete'}</button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
