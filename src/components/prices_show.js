import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchPrice, deletePrice } from '../actions';

class PricesShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPrice(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePrice(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { price } = this.props;

    if (!price) {
      return <div>Loading...</div>;
    }


    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Price
        </button>
        <h3>{price.title}</h3>
        <h6>Categories: {price.categories}</h6>
        <p>{price.content}</p>
      </div>
    );
  };
}

function mapStateToProps({ prices }, ownProps) {
  return { price: prices[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPrice, deletePrice })(PricesShow);
