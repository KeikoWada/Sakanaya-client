import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPrices } from '../actions';

class CategoriesIndex extends Component {
  componentDidMount() {
    this.props.fetchPrices();
  }

  renderPrices() {
    return _.map(this.props.prices, price => {
      return (
        <li className="list-group-item" key={price.id}>
          <Link to={`/prices/${price.id}`}>
            {price.categories}
          </Link>
        </li>
      );
    });
  }

  render() {
    // console.log(this.props.prices);
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/prices/new">
            Add to a list
          </Link>
        </div>
          <h3>Prices</h3>
          <ul className="list-group">
            {this.renderPrices()}
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { prices: state.prices };
}

export default connect(mapStateToProps, { fetchPrices })(PricesIndex);
