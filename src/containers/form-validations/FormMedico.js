import React from 'react';
import { Formik, Form, Field } from 'formik';

import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';

import ReactAutoSugegstExample from 'containers/forms/ReactAutoSugegstExample';

const FormMedico = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validateFirstName = (value) => {
    let error;
    if (!value) {
      error = 'Nombre o nombres del ortodoncista';
    } else if (value.length < 2) {
      error = 'El nombre tiene que tener 2 o más letras';
    }
    return error;
  };

  const validateFirstLastName = (value) => {
    let error;
    if (!value) {
      error = 'Apellido materno del ortodoncista';
    } else if (value.length < 2) {
      error = 'El apellido materno tiene que tener 2 o más letras';
    }
    return error;
  };

  const validateSecondLastName = (value) => {
    let error;
    if (!value) {
      error = 'Apellido paterno del ortodoncista';
    } else if (value.length < 2) {
      error = 'El apellido paterno tiene que tener 2 o más letras';
    }
    return error;
  };

  /* const validateCity = (value) => {
    let error;
    if (!value) {
      error = 'Ciudad del paciente';
    } else if (!value) {
      error = 'Ciudad no válida';
    }
    return error;
  }; */

  const validatePhone = (value) => {
    let error;
    if (!value) {
      error = 'Número del ortodoncista, despues de +52';
    } else if (!/^[0-9]/i.test(value)) {
      error = 'Número inválido';
    }
    return error;
  };

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Correo del ortodoncista';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Correo inválido';
    }
    return error;
  };

  return (
    <Row className="mb-4">
      <Colxx xxs="12">
        <Card>
          <CardBody>
            <h6 className="mb-4">Crear un nuevo ortodoncista</h6>
            <Formik
              initialValues={{
                name: '',
                email: '',
              }}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-right">
                  <FormGroup>
                    <Label>Nombre(s)</Label>
                    <Field
                      className="form-control"
                      name="name"
                      validate={validateFirstName}
                    />
                    {errors.name && touched.name && (
                      <div className="invalid-feedback d-block">
                        {errors.name}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Apellido materno</Label>
                    <Field
                      className="form-control"
                      name="firstLastName"
                      validate={validateFirstLastName}
                    />
                    {errors.firstLastName && touched.firstLastName && (
                      <div className="invalid-feedback d-block">
                        {errors.firstLastName}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Apellido paterno</Label>
                    <Field
                      className="form-control"
                      name="secondLastName"
                      validate={validateSecondLastName}
                    />
                    {errors.secondLastName && touched.secondLastName && (
                      <div className="invalid-feedback d-block">
                        {errors.secondLastName}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Dirección</Label>
                    <ReactAutoSugegstExample />
                    {errors.address && touched.address && (
                      <div className="invalid-feedback d-block">
                        {errors.address}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Número de teléfono</Label>
                    <Field
                      className="form-control"
                      name="phone"
                      validate={validatePhone}
                    />
                    {errors.phone && touched.phone && (
                      <div className="invalid-feedback d-block">
                        {errors.phone}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Correo</Label>
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

                  <Button color="primary" type="submit">
                    Crear ortodoncista
                  </Button>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  );
};

export default FormMedico;
