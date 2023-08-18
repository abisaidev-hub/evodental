import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import DatePicker from 'react-datepicker';

import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';

const FormCaso = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validateFirstName = (value) => {
    let error;
    if (!value) {
      error = 'Volumetría o completo';
    } else if (value.length < 2) {
      error = 'Estudio inválido';
    }
    return error;
  };

  const [startDate, setStartDate] = useState(new Date());

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
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-right">
                  <FormGroup>
                    <Label>Tipo de estudio</Label>
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
                    <Label>Fecha del estudio</Label>
                    <DatePicker selected={startDate} onChange={setStartDate} />
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
