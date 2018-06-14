import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPrice } from '../actions'

class PricesNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.lable}</label>
        <input
        className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

onSubmit(values) {
  this.props.createPrice(values, () => {
    this.props.history.push('/');
  } );
}

  render() {
const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          lable="Name"
          name="title"
          component={this.renderField}
        />
        <Field
          lable="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          lable="Price"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { taitle: 'aaa', categories: 'bbb', price: 'ccc'  }
  const errors = {};

  if (!values.title) {
    errors.name="Enter a Seafood Name";
  }
  if (!values.categories) {
    errors.categories = 'Enter category';
  }
  if (!values.content) {
    errors.price = 'Enter some price by pond please';
  }

  // if errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PricesNewForm'
})(
  connect(null, {createPrice})(PricesNew)
);
