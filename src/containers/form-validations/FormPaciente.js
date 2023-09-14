import React, { useState, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import CustomSelectInput from 'components/common/CustomSelectInput';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';

import DropzoneCaso from 'containers/forms/DropzoneCaso';

const selectDataDoctor = [
  { label: 'Doctor 1 Name', value: 'doctor1', key: 0 },
  { label: 'Doctor 2 Name', value: 'doctor2', key: 1 },
];

const selectDataCaseType = [
  { label: 'Completo', value: 'completo', key: 0 },
  { label: 'Volumetría', value: 'volumetria', key: 1 },
];

const FormPaciente = () => {
  const dropzone = useRef();
  const navigate = useHistory();

  const onSubmit = (values) => {
    axios
      .post(`${process.env.API}/Patients`, values)
      .then(() => {
        navigate.push(`/app/admin/pacientes`);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(values);
  };

  const [isPatientSingle, setIsPatientSingle] = useState(true);

  const validateFirstName = (value) => {
    let error;
    if (!value) {
      error = 'Nombre del paciente';
    } else if (value.length < 2) {
      error = 'El nombre tiene que tener 2 o más letras';
    }
    return error;
  };

  const validateLastName = (value) => {
    let error;
    if (!value) {
      error = 'Apellidos del paciente';
    } else if (value.length < 2) {
      error = 'Los apellidos tiene que tener 2 o más letras';
    }
    return error;
  };

  const validateGender = (value) => {
    let error;
    if (!value) {
      error = 'Género del paciente';
    } else if (value.length < 2) {
      error = 'El género tiene que tener 2 o más letras';
    }
    return error;
  };

  const [startDate, setStartDate] = useState(new Date());

  const validatePhone = (value) => {
    let error;
    if (!value) {
      error = 'Número del paciente, despues de +52';
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
      error = 'Correo del paciente';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Correo inválido';
    }
    return error;
  };

  const [selectedOptionDoctor, setSelectedOptionDoctor] = useState('');
  const [selectedOptionCaseType, setSelectedOptionCaseType] = useState('');

  const [startDateCase, setStartDateCase] = useState(new Date());

  return (
    <Row className="mb-4">
      <Colxx xxs="12">
        <Card>
          <CardBody>
            <h6 className="mb-4">Crear un nuevo paciente</h6>
            {isPatientSingle ? (
              <Formik
                initialValues={{
                  firstName: 'Miranda',
                  middleName: '',
                  lastName: 'Lopez',
                  gender: 'Femenino',
                  birthDate: '',
                  phoneNumber: '3333333333',
                  email: 'randalpz@gmail.com',
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
                      <Label>Fecha de nacimiento</Label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        showMonthDropdown
                        showYearDropdown
                      />
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

                    <Button color="primary" type="submit">
                      Crear paciente
                    </Button>
                  </Form>
                )}
              </Formik>
            ) : (
              <Formik
                initialValues={{
                  name: '',
                  middleName: '',
                  lastName: '',
                  dateOfBirthDate: '',
                  phoneNumber: '',
                  email: '',
                  doctorId: '',
                  cases: [],
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
                      <Label>Fecha de nacimiento</Label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        showMonthDropdown
                        showYearDropdown
                      />
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
                      <Label>Asignar doctor</Label>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="doctor"
                        value={selectedOptionDoctor}
                        onChange={setSelectedOptionDoctor}
                        options={selectDataDoctor}
                        placeholder="Seleccionar..."
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>Tipo de estudio</Label>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="caseType"
                        value={selectedOptionCaseType}
                        onChange={setSelectedOptionCaseType}
                        options={selectDataCaseType}
                        placeholder="Seleccionar..."
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>Fecha del estudio</Label>
                      <DatePicker
                        selected={startDateCase}
                        onChange={(date) => setStartDateCase(date)}
                        dateFormat="dd/MM/yyyy"
                        showMonthDropdown
                        showYearDropdown
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>Subir archivos</Label>
                      <DropzoneCaso ref={dropzone} />
                    </FormGroup>

                    <Button color="primary" type="submit">
                      Crear paciente y caso
                    </Button>
                  </Form>
                )}
              </Formik>
            )}
            <p className="text-muted text-small mb-2">&nbsp;</p>
            {isPatientSingle ? (
              <>
                <p className="font-weight-bold">
                  ¿Desea crear un paciente junto con su caso?
                </p>
                <Button
                  color="primary"
                  onClick={() => setIsPatientSingle(!isPatientSingle)}
                >
                  Quiero crear al paciente junto con su caso
                </Button>
              </>
            ) : (
              <Button
                color="primary"
                onClick={() => setIsPatientSingle(!isPatientSingle)}
              >
                Cancelar
              </Button>
            )}
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  );
};

export default FormPaciente;
