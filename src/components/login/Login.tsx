import React, { ReactElement } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm } from 'formik';

export default function Login(): ReactElement {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      {({ values }) => (
        <FormikForm>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Field type="email" as={Form.Control} name="email"></Field>
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Field type="password" as={Form.Control} name="password"></Field>
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <pre>{JSON.stringify(values)}</pre>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
}
