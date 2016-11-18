import React, { Component } from 'react';
import { Link } from 'react-router';
import autoBind from 'react-autobind';
// components
import Button from '../../../common/Button';
import TableItem from './item/TableItem';
import SubTableItem from './item/SubTableItem';
// icon
import SvgIcon from '../../../common/SvgIcon';
// random displays
function getRandomAmount() {
  const randomNum = Math.floor((Math.random() * 19999999) + 10000000).toString();
  let result = '';
  // check arguments
  if (arguments.length !== 0) {
    if (arguments[0] === 'amount') {
      // if arguments equals amount
      result += '$' + randomNum.charAt(0) + ',';
    } else {
      // if arguments is not amount
      result += randomNum.charAt(0) + ',';
    }
  } else {
    // if no arguments
    result += randomNum.charAt(0) + ',';
  }
  // add ,
  for (var i = 1; i < randomNum.length; i++) {
    if (i % 4 === 0) {
      result += ',';
    } else {
      result += randomNum.charAt(i)
    }
  }
  return result;
}
// fake data
const optionariumSites = [
  {
    id: 1,
    name: 'Leaderbord 728x90',
    displays: getRandomAmount(),
    hits: '105,645',
    cpm: '$0.051',
    cpc: '$0.31',
    earnings: getRandomAmount('amount')
  },
  {
    id: 2,
    name: 'Vertical Skyscraper 300x600',
    displays: getRandomAmount(),
    hits: '105,645',
    cpm: '$0.051',
    cpc: '$0.31',
    earnings: getRandomAmount('amount')
  },
  {
    id: 3,
    name: 'Mobile Instant Msg',
    displays: getRandomAmount(),
    hits: '105,645',
    cpm: '$0.051',
    cpc: '$0.31',
    earnings: getRandomAmount('amount')
  },
  {
    id: 4,
    name: 'Direct LinkBanner',
    displays: getRandomAmount(),
    hits: '105,645',
    cpm: '$0.051',
    cpc: '$0.31',
    earnings: getRandomAmount('amount')
  },
  {
    id: 5,
    name: 'Banner Ad 100x60',
    displays: getRandomAmount(),
    hits: '105,645',
    cpm: '$0.051',
    cpc: '$0.31',
    earnings: getRandomAmount('amount')
  },
  {
    id: 6,
    name: 'Mobile Instant Msg 2',
    displays: getRandomAmount(),
    hits: '105,645',
    cpm: '$0.051',
    cpc: '$0.31',
    earnings: getRandomAmount('amount')
  }
];

export default class StatisticsPage extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      showAddZone: false,
      'optionarium': {
        showInfo: false
      }
    };
  }
  toggleInfo(site) {
    const currentState = this.state[site].showInfo;
    const newObject = Object.assign({}, this.state[site], { showInfo: !currentState });
    const updObj = { [site] : newObject };
    this.setState(updObj);
  }
  handleShowAddZoneButton() {
    this.setState({ showAddZone: true });
  }
  handleHideAddZoneButton() {
    this.setState({ showAddZone: false });
  }
  renderFilterShape(optionarium) {
    if (!optionarium.showInfo) {
      return <SvgIcon imageID="svgicon__filters--shape" className="filters--shape" />;
    } else {
      return <SvgIcon imageID="svgicon__shape--up" className="filters--shape" />;
    }
  }
  renderAddZone() {
    const { showAddZone } = this.state;
    return showAddZone && <Link to="/publisher/sites/1/zones/create"><button className="btn add-zone">{'add zone'}</button></Link>;
  }
  render() {
    const { optionarium } = this.state;
    return (
      <div className="active-page--container">
        <header className="active-page--header">
          <h1 className="active-page--title">{'Statistics'}</h1>
          <Button
            className="btn filter"
            title="by site"
            icon={<SvgIcon imageID="svgicon__filters--shape" className="filters--shape" />}
          />
          <a className="active-page--header--filter" href="#">{'Last week: 21 October, 2016 - 28 October, 2016'}</a>
          <Link to="/publisher/sites/create">
            <Button className="btn add" icon={<SvgIcon imageID="svgicon__button--add" className="add-site" />} title="add site" />
          </Link>
        </header>
        <section className="active-page--filters">
          <Button
            className="btn filters"
            title="23 zones"
            icon={<SvgIcon imageID="svgicon__filters--shape" className="filters--shape" />}
          />
          <Button
            className="btn filters"
            title="Safari 10.0"
            icon={<SvgIcon imageID="svgicon__filters--shape" className="filters--shape" />}
          />
          <Button
            className="btn filters"
            title="8 providers"
            icon={<SvgIcon imageID="svgicon__filters--shape" className="filters--shape" />}
          />
          <Button
            className="btn filters"
            title="5 locations"
            icon={<SvgIcon imageID="svgicon__filters--shape" className="filters--shape" />}
          />
          <Button
            className="btn filters"
            title="Add filter"
            icon={<SvgIcon imageID="svgicon__filters--shape" className="filters--shape" />}
          />
        </section>
        <section className="active-page--content">
          <table className="active-page--content--table">
            <thead>
              <tr>
                <th>{'Site'} <span className="filter"><SvgIcon imageID="svgicon__table--filter" className="icon--filter" /></span></th>
                <th>{'Displays'} <span className="filter"><SvgIcon imageID="svgicon__table--filter" className="icon--filter" /></span></th>
                <th>{'Hits'} <span className="filter"><SvgIcon imageID="svgicon__table--filter" className="icon--filter" /></span></th>
                <th>{'CPM'} <span className="filter"><SvgIcon imageID="svgicon__table--filter" className="icon--filter" /></span></th>
                <th>{'CPC'} <span className="filter"><SvgIcon imageID="svgicon__table--filter" className="icon--filter" /></span></th>
                <th>{'Earnings'} <span className="filter"><SvgIcon imageID="svgicon__table--filter" className="icon--filter" /></span></th>
              </tr>
            </thead>
            <tbody>
              <TableItem />
              <tr onMouseLeave={this.handleHideAddZoneButton} onMouseEnter={this.handleShowAddZoneButton}>
                <td>
                  <span className="site">
                    <Link className="site-link" to="/publisher/sites/2/update">
                      {'optionarium.com'}
                    </Link>
                  </span>
                  <span className="active-page--content--table--zones">
                    <span onClick={this.toggleInfo.bind(this, 'optionarium')}>
                      {'6 zones'}
                      <span className="btn-icon">
                        {this.renderFilterShape(optionarium)}
                      </span>
                    </span>
                    <span className="active-page--content--table--zones--add">
                      {this.renderAddZone()}
                    </span>
                  </span>
                </td>
                <td>{'1,292,732'}</td>
                <td>{'105,645'}</td>
                <td>{'$0.051'}</td>
                <td>{'$0.31'}</td>
                <td>{'$6,133.15'}</td>
              </tr>
              {/* show and hide SubTableItem */}
              { optionarium.showInfo ? optionariumSites.map(el => {
                return (
                  <SubTableItem
                    key={el.id}
                    {...el}
                    onHideAddZoneButton={this.handleHideAddZoneButton}
                    onShowAddZoneButton={this.handleShowAddZoneButton}
                  />)
              }) : null }
              <tr>
                <td>
                  <span className="site">
                    <Link className="site-link" to="/publisher/sites/1/update">
                      {'xxxxxtrafff.com'}
                    </Link>
                  </span>
                  <span className="active-page--content--table--zones">
                    <span>
                      {'12 sites'}
                      <span className="btn-icon">
                        <SvgIcon imageID="svgicon__filters--shape" className="filters--shape" />
                      </span>
                    </span>
                    <span className="active-page--content--table--zones--add">
                      {/* {this.renderAddZone()} */}
                    </span>
                  </span>
                </td>
                <td>{'1,292,732'}</td>
                <td>{'105,645'}</td>
                <td>{'$0.051'}</td>
                <td>{'$0.31'}</td>
                <td>{'$6,133.15'}</td>
              </tr>
              <tr className="disable-table-item">
                <td>
                  <span className="site">
                    <Link className="site-link" to="/publisher/sites/3/update">{'optionarium.com'}</Link>
                  </span>
                  {' '}
                  <span className="table-icon">
                    <SvgIcon imageID="svgicon__table--notification" className="" />
                  </span>
                </td>
                <td>{'1,292,732'}</td>
                <td>{'105,645'}</td>
                <td>{'$0.051'}</td>
                <td>{'$0.31'}</td>
                <td>{'$6,133.15'}</td>
              </tr>
              <tr className="disable-table-item">
                <td>
                  <span className="site">
                    <Link className="site-link" to="/publisher/sites/4/update">
                      {'supermegatraffic.com'}
                    </Link>
                  </span>
                  {' '}
                  <span className="table-icon">
                    <SvgIcon imageID="svgicon__table--check" className="" />
                  </span>
                </td>
                <td>{'1,292,732'}</td>
                <td>{'105,645'}</td>
                <td>{'$0.051'}</td>
                <td>{'$0.31'}</td>
                <td>{'$6,133.15'}</td>
              </tr>
              <tr className="total-table-item">
                <td>{'Totals'}</td>
                <td>{'18,161,289'}</td>
                <td>{'500,157'}</td>
                <td>{'$0.087'}</td>
                <td>{'$0.49'}</td>
                <td>{'$125,586.55'}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}
