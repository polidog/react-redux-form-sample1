import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getModel } from 'react-redux-form';

const CustomFormGroup = ({children, bsClass, bsSize, controlId, validationState}) => {
  let props = {
    bsClass,
    bsSize,
    controlId,
    validationState,
  };

  return (
    <FormGroup {...props} >{children}</FormGroup>
  );
};

const mapStateToProps = (state, { model, bsClass, bsSize, controlId, validationState, children }) => {
  const modelString = getModel(model, state);

  if (modelString != undefined) {
    const formValue = getModel(state.forms, modelString);
    if (formValue !== undefined && !formValue.valid) {
      validationState="error";
    }
  }

  return {
    children,
    bsClass,
    bsSize,
    controlId,
    validationState
  }
};

export default connect(
  mapStateToProps
)(CustomFormGroup);