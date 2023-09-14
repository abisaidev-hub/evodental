import React, { useState, useRef } from 'react';
import { Formik, Form } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import CustomSelectInput from 'components/common/CustomSelectInput';

import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';

import DropzoneCaso from 'containers/forms/DropzoneCaso';

const selectDataDoctor = [
  { label: 'Doctor 1 Name', value: 'doctor1', key: 0 },
  { label: 'Doctor 2 Name', value: 'doctor2', key: 1 },
];

const selectDataPatient = [
  { label: 'Patient 1 Name', value: 'patient1', key: 0 },
  { label: 'Patient 2 Name', value: 'patient2', key: 1 },
];

const selectDataCaseType = [
  { label: 'Completo', value: 'completo', key: 0 },
  { label: 'Volumetría', value: 'volumetria', key: 1 },
];

const FormCaso = () => {
  const dropzone = useRef();

  const onSubmit = (values) => {
    console.log(values);
  };

  const [startDate, setStartDate] = useState(new Date());

  const [selectedOptionDoctor, setSelectedOptionDoctor] = useState('');
  const [selectedOptionPatient, setSelectedOptionPatient] = useState('');
  const [selectedOptionCaseType, setSelectedOptionCaseType] = useState('');

  return (
    <Row className="mb-4">
      <Colxx xxs="12">
        <Card>
          <CardBody>
            <h6 className="mb-4">Crear un nuevo caso</h6>
            <Formik
              initialValues={{
                name: '',
                email: '',
              }}
              onSubmit={onSubmit}
            >
              {() => (
                <Form className="av-tooltip tooltip-label-right">
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
                    <Label>Asignar paciente</Label>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="patient"
                      value={selectedOptionPatient}
                      onChange={setSelectedOptionPatient}
                      options={selectDataPatient}
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
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
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
                    Crear caso
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

export default FormCaso;
