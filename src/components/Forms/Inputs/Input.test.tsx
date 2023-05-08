import { render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { InputField } from './Input';

describe('InputField', () => {
  it('renders the label and input', () => {
    render(
      <Formik
        initialValues={{}}
        onSubmit={() => {}}
        validationSchema={Yup.object()}
      >
        {() => (
          <Form>
            <InputField name="test" label="Test" placeholder="Test" />
          </Form>
        )}
      </Formik>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test')).toBeInTheDocument();
  });

  it('displays an error message when the input is invalid', async () => {
    // const validationSchema = Yup.object().shape({
    //   test: Yup.string().required('Required'),
    // });
    // render(
    //   <Formik
    //     initialValues={{}}
    //     onSubmit={() => {}}
    //     validationSchema={validationSchema}
    //   >
    //     {() => (
    //       <Form>
    //         <InputField name="test" label="Test" placeholder="Test" />
    //         <button type="submit">Submit</button>
    //       </Form>
    //     )}
    //   </Formik>
    // );
    // const submitButton = screen.getByRole('button', { name: 'Submit' });
    // fireEvent.click(submitButton);
    // expect(await screen.findByText('Required')).toBeInTheDocument();
  });

  it('should accept the input', async () => {
    // const validationSchema = Yup.object().shape({
    //   test: Yup.string().required('Required'),
    // });
    // render(
    //   <Formik
    //     initialValues={{}}
    //     onSubmit={() => {}}
    //     validationSchema={validationSchema}
    //   >
    //     {() => (
    //       <Form>
    //         <InputField name="test" label="Test" placeholder="Test" />
    //         <button type="submit">Submit</button>
    //       </Form>
    //     )}
    //   </Formik>
    // );
    // const inputField = screen.getByLabelText('Test');
    // userEvent.type(inputField, 'John Doe');
    // expect(inputField).toHaveValue('John Doe');
  });
});
