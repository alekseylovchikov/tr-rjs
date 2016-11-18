import React, { Component } from 'react';
import autosize from 'autosize';
import Clipboard from 'clipboard';
// components
import SvgIcon from '../../../../../common/SvgIcon';
// fake data
const types = {
  standard: '<script type="text/javascript">\r\n\tvar ad_idzone = "2047823",\r\n\tad_width = "468",\r\n\tad_height = "60";\r\n</script>\r\n<script type="text/javascript" src="https://ads.exoclick.com/ads.js"></script>\r\n<noscript><a href="http://main.exoclick.com/img-click.php?idzone=2047823" target="_blank"><img src="https://syndication.exoclick.com/ads-iframe-display.php?idzone=2047823&output=img&type=468x60" width="468" height="60"></a></noscript>',
  iframe: '<iframe frameborder="0" scrolling="no" width="130" height="198"\r\n\tsrc="../images/eightball.gif" name="imgbox" id="imgbox">\r\n\t<p>iframes are not supported by your browser.</p>\r\n</iframe>'
};

export default class GetCodePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copySuccessShow: false,
      checked: 'standard',
      formValue: types.standard
    };
  }
  componentDidMount() {
    autosize(document.querySelector('textarea'));
    const clipboard = new Clipboard('.copy');
  }
  componentDidUpdate() {
    const ta = document.querySelector('textarea');
    var evt = document.createEvent('Event');
    evt.initEvent('autosize:update', true, false);
    ta.dispatchEvent(evt);
  }
  handleCopyToClipboard() {
    this.setState({ copySuccessShow: true });
  }
  handleToggleCheckbox(from) {
    const standard = types.standard;
    const iframe = types.iframe;
    const { checked } = this.state;
    if (checked === 'standard' && from !== 'standard') {
      this.setState({
        checked: 'iframe',
        formValue: types.iframe
      });
    } else if (checked === 'iframe' && from !== 'iframe') {
      this.setState({
        checked: 'standard',
        formValue: types.standard
      });
    } else {
      this.setState({
        checked: 'standard'
      });
    }
  }
  renderCopySuccess() {
    setTimeout(() => {
      this.setState({ copySuccessShow: false });
    }, 2000);
    return (
      <div className="alert-message">
        <div>{'Copied!'}</div>
      </div>
    );
  }
  render() {
    const { checked, formValue, copySuccessShow } = this.state;
    return (
      <div className="get-code">
        <div className="get-code__left">
          <h3>To add Ad Zone paste this HTML code above into the {'<body>'} of your site</h3>
          <form>
            <textarea
              type="text"
              id="htmlCode"
              value={formValue}
              readOnly
            />
            <span onClick={this.handleCopyToClipboard.bind(this)} className="copy" data-clipboard-action="copy" data-clipboard-target="#htmlCode">
              { copySuccessShow && this.renderCopySuccess() }
              <SvgIcon imageID="svgicon__copy" className="copy--icon" />
            </span>
          </form>
          <div className="buttons">
            <button className="btn success">add</button>
            <button className="btn cancel">cancel</button>
          </div>
        </div>
        <div className="get-code__right">
          <div className={`checkbox-block ${checked === 'standard' ? 'active' : ''}`}>
            <input
              className="checkbox"
              type="checkbox"
              checked={checked === 'standard' ? true : false}
              readOnly
            />
            <label onClick={this.handleToggleCheckbox.bind(this, 'standard')}></label>
            <span>Standard</span>
          </div>
          <div className={`checkbox-block ${checked === 'iframe' ? 'active' : ''}`}>
            <input
              className="checkbox"
              type="checkbox"
              checked={checked === 'iframe' ? true : false}
              readOnly
            />
            <label onClick={this.handleToggleCheckbox.bind(this, 'iframe')}></label>
            <span>iFrame</span>
          </div>
        </div>
      </div>
    );
  }
}
