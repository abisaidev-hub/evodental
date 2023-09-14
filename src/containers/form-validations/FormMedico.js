import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';

const FormMedico = () => {
  const navigate = useHistory();

  const onSubmit = (values) => {
    axios
      .post(`${process.env.API}/Doctors`, values)
      .then(() => {
        navigate.push(`/app/admin/doctores`);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(values);
  };

  const validateFirstName = (value) => {
    let error;
    if (!value) {
      error = 'Nombre del doctor';
    } else if (value.length < 2) {
      error = 'El nombre tiene que tener 2 o más letras';
    }
    return error;
  };

  const validateLastName = (value) => {
    let error;
    if (!value) {
      error = 'Apellidos del doctor';
    } else if (value.length < 2) {
      error = 'Los apellidos tiene que tener 2 o más letras';
    }
    return error;
  };

  const validateGender = (value) => {
    let error;
    if (!value) {
      error = 'Género del doctor';
    } else if (value.length < 2) {
      error = 'El género tiene que tener 2 o más letras';
    }
    return error;
  };

  const validateTitle = (value) => {
    let error;
    if (!value) {
      error = 'Título del doctor';
    } else if (value.length < 2) {
      error = 'El título tiene que tener 2 o más letras';
    }
    return error;
  };

  const validateSpecialty = (value) => {
    let error;
    if (!value) {
      error = 'Especialidad del doctor';
    } else if (value.length < 2) {
      error = 'La especialidad tiene que tener 2 o más letras';
    }
    return error;
  };

  const validateBusinessName = (value) => {
    let error;
    if (!value) {
      error = 'Empresa que representa el doctor';
    } else if (value.length < 2) {
      error = 'La empresa tiene que tener 2 o más letras';
    }
    return error;
  };

  const validatePhone = (value) => {
    let error;
    if (!value) {
      error = 'Número del doctor, despues de +52';
    } else if (!/^[0-9]/i.test(value)) {
      error = 'Número inválido';
    } else if (value.length > 10) {
      error = 'Número inválido';
    }
    return error;
  };

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Correo del doctor';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Correo inválido';
    }
    return error;
  };

  const validateUserName = (value) => {
    let error;
    if (!value) {
      error = 'Nombre de usuario de la cuenta del doctor';
    } else if (value.length < 2) {
      error = 'El nombre de usuario tiene que tener 2 o más letras';
    }
    return error;
  };

  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = 'Contraseña de la cuenta del doctor';
    } else if (value.length < 2) {
      error = 'El nombre tiene que tener 2 o más letras';
    }
    return error;
  };

  return (
    <Row className="mb-4">
      <Colxx xxs="12">
        <Card>
          <CardBody>
            <h6 className="mb-4">Crear un nuevo doctor</h6>
            <Formik
              initialValues={{
                firstName: '',
                middleName: '',
                lastName: '',
                gender: '',
                title: '',
                specialty: '',
                businessName: '',
                phoneNumber: '',
                email: '',
                userName: '',
                password: '',
                user: {
                  email: '',
                  firstName: '',
                  gender: '',
                  lastName: '',
                  middleName: '',
                  password: '',
                  userName: '',
                },
              }}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-right">
                  <FormGroup>
                    <Label>Nombre</Label>
                    <Field
                      className="form-control"
                      name="firstName"
                      validate={validateFirstName}
                    />
                    {errors.firstName && touched.firstName && (
                      <div className="invalid-feedback d-block">
                        {errors.firstName}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Segundo nombre</Label>
                    <Field
                      className="form-control"
                      name="middleName"
                      /* validate={validateMiddleName} */
                    />
                    {errors.middleName && touched.middleName && (
                      <div className="invalid-feedback d-block">
                        {errors.middleName}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Apellido(s)</Label>
                    <Field
                      className="form-control"
                      name="lastName"
                      validate={validateLastName}
                    />
                    {errors.lastName && touched.lastName && (
                      <div className="invalid-feedback d-block">
                        {errors.lastName}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Género</Label>
                    <Field
                      className="form-control"
                      name="gender"
                      validate={validateGender}
                    />
                    {errors.gender && touched.gender && (
                      <div className="invalid-feedback d-block">
                        {errors.gender}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Título</Label>
                    <Field
                      className="form-control"
                      name="title"
                      validate={validateTitle}
                    />
                    {errors.title && touched.title && (
                      <div className="invalid-feedback d-block">
                        {errors.title}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Especialidad</Label>
                    <Field
                      className="form-control"
                      name="specialty"
                      validate={validateSpecialty}
                    />
                    {errors.specialty && touched.specialty && (
                      <div className="invalid-feedback d-block">
                        {errors.specialty}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Empresa</Label>
                    <Field
                      className="form-control"
                      name="businessName"
                      validate={validateBusinessName}
                    />
                    {errors.businessName && touched.businessName && (
                      <div className="invalid-feedback d-block">
                        {errors.businessName}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Número de teléfono</Label>
                    <Field
                      className="form-control"
                      name="phoneNumber"
                      validate={validatePhone}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <div className="invalid-feedback d-block">
                        {errors.phoneNumber}
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

                  <FormGroup>
                    <Label>Nombre de usuario</Label>
                    <Field
                      className="form-control"
                      name="userName"
                      validate={validateUserName}
                    />
                    {errors.userName && touched.userName && (
                      <div className="invalid-feedback d-block">
                        {errors.userName}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Contraseña</Label>
                    <Field
                      className="form-control"
                      name="password"
                      validate={validatePassword}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>User</Label>
                    <Field className="form-control" name="user" />
                  </FormGroup>

                  <Button color="primary" type="submit">
                    Crear doctor
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
