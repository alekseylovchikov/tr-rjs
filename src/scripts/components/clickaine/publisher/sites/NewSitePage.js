import React, { Component } from 'react';
import { Link } from 'react-router';
import autoBind from 'react-autobind';
import Clipboard from 'clipboard';

import SvgIcon from '../../../common/SvgIcon';

export default class NewSitePage extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      url: '',
      description: '',
      showProveOwnershipBtn: false,
      popupShow: false,
      htmlCode: '<meta name="brabtraffic" content="847286172669c098c7deff7" />'
    };
  }
  componentDidMount() {
    const clipboard = new Clipboard('.copy');
  }
  handleChangeUrl(e) {
    const url = e.target.value;
    const checkUrl = /(((http|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/;
    if (checkUrl.test(url)) {
      this.setState({ showProveOwnershipBtn: true })
    } else {
      this.setState({ showProveOwnershipBtn: false })
    }
    this.setState({ url });
  }
  handleChangeDescription(e) {
    const description = e.target.value;
    this.setState({ description });
  }
  handleCloseModal() {
    this.setState({ popupShow: false });
  }
  handleTogglePopupWindow(e) {
    e.preventDefault();
    this.setState({ popupShow: true });
  }
  renderPopup() {
    const { popupShow, htmlCode } = this.state;
    if (popupShow) {
      return (
        <div className="popup">
          <div className="popup--modal">
            <section className="popup--actions">
              <span className="close-modal" onClick={this.handleCloseModal}>
                <SvgIcon imageID="svgicon__close" />
              </span>
            </section>
            <h3>{'Copy/paste this HTML code right after the tag of your page'}</h3>
            <form className="popup--form">
              <input className="form-input" id="htmlCode" type="text" value={htmlCode} />
              <span className="copy" data-clipboard-action="copy" data-clipboard-target="#htmlCode">
                <SvgIcon imageID="svgicon__copy" className="copy--icon" />
              </span>
            </form>
            <h3>{'Or download the file and upload it to server'}</h3>
            <Link>
              <button className="btn default">{'download file'}</button>
            </Link>
            <span className="file-info">{'.txt, 325 Kb'}</span>
            <div className="verified-info">
              <span><SvgIcon imageID="svgicon__not-verified" className="not-verified" /> {'Your ownership was not verified. Check out'} <a href="#">{'Common verification errors'}</a></span>
            </div>
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
          <h1 className="active-page--title">{'New site'}</h1>
        </header>
        <section className="new-page-form padding">
          <form className="form">
            <input
              className="form-input"
              type="text"
              placeholder="Site URL"
              value={this.state.url}
              onChange={this.handleChangeUrl}
            />
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
              <Link className="btn success" to="/publisher">{'add'}</Link>
              <Link className="btn cancel" to="/publisher/statistics">{'cancel'}</Link>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
