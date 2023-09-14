import React, { useState, useEffect } from 'react';
import { Row, Card, CardTitle, Label, FormGroup, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { forgotPassword } from 'redux/actions';
import { NotificationManager } from 'components/common/react-notifications';

import evodentalLogo from 'assets/logos/evodental-logo.png';

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const ForgotPassword = ({
  history,
  forgotUserMail,
  loading,
  error,
  forgotPasswordAction,
}) => {
  const [email] = useState('admin@evodental.com');

  const onForgotPassword = (values) => {
    if (!loading) {
      if (values.email !== '') {
        forgotPasswordAction(values, history);
      }
    }
  };

  useEffect(() => {
    if (error) {
      NotificationManager.warning(
        error,
        'Forgot Password Error',
        3000,
        null,
        null,
        ''
      );
    } else if (!loading && forgotUserMail === 'success')
      NotificationManager.success(
        'Please check your email.',
        'Forgot Password Success',
        3000,
        null,
        null,
        ''
      );
  }, [error, forgotUserMail, loading]);

  const initialValues = { email };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">EL FUTURO DEL SISTEMA MÉDICO</p>
            <p className="white mb-0">
              Ingresa tu correo para reestablecer tu contraseña.
              <br />
              <br />
              Si usted aún no es un miembro, por favor contacte al administrador
              de su institución.
            </p>
          </div>
          <div className="form-side">
            <img
              src={evodentalLogo}
              alt=""
              width="120px"
              style={{ padding: '0 0 4rem 0' }}
            />
            <CardTitle className="mb-4">
              Ingresa tu correo y te enviaremos un enlace para reestablecer tu
              contraseña
            </CardTitle>

            <Formik initialValues={initialValues} onSubmit={onForgotPassword}>
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom">
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="user.email" />
                    </Label>
                    <Field
                      className="form-control"
                      name="email"
                      validate={validateEmail}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>

                  <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/user/login">Iniciar sesión</NavLink>
                    <Button
                      color="primary"
                      className={`btn-shadow btn-multiple-state ${
                        loading ? 'show-spinner' : ''
                      }`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">ENVIAR</span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};

const mapStateToProps = ({ authUser }) => {
  const { forgotUserMail, loading, error } = authUser;
  return { forgotUserMail, loading, error };
};

export default connect(mapStateToProps, {
  forgotPasswordAction: forgotPassword,
})(ForgotPassword);
