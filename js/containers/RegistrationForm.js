import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Control, Field, Form, actions, Errors } from 'react-redux-form';
import {FormGroup, ControlLabel, Button} from 'react-bootstrap'

import CustomFormGroup from './CustomFormGroup'

const isRequired = (val) => !!(val && val.length);

class RegistrationForm extends Component {
  handleSubmit(user) {
    const { dispatch } = this.props;
    console.log(user);

    // TODO 適当に頑張る
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-2">
            <Form model="user" onSubmit={(user) => this.handleSubmit(user)}>
              <CustomFormGroup controlId="name" model="user.name">
                <ControlLabel>firstName</ControlLabel>
                <Control.text
                  model="user.name"
                  className="form-control"
                  validators={{isRequired}}
                  validateOn="blur" />
                <Errors
                  model="user.name"
                  messages={{
                      isRequired: '入力必須項目です！'
                  }}
                  component={(props) => <span className="help-block">{props.children}</span>}
                />
              </CustomFormGroup>
              <div className="col-sm-4 col-md-offset-4">
                <button type="submit" href="#" className="btn btn-primary btn-lg btn-block">登録する</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const selector = (state) => ({ user: state.user });
export default connect(selector)(RegistrationForm);