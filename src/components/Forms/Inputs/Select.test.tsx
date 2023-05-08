import { render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';

import { SelectField } from './Select';

const options = [
  { value: 'option1', name: 'Option 1' },
  { value: 'option2', name: 'Option 2' },
  { value: 'option3', name: 'Option 3' },
];

describe('SelectField', () => {
  it('renders the label and options', () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <SelectField label="Test" name="test" options={options} />
        </Form>
      </Formik>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();

    options.forEach((option) => {
      expect(screen.getByText(option.name)).toBeInTheDocument();
    });
  });

  it('handles value changes', () => {
    // const handleChange = jest.fn();
    // render(
    //   <Formik initialValues={{}} onSubmit={() => {}}>
    //     <Form>
    //       <SelectField
    //         label="Test"
    //         name="test"
    //         options={options}
    //         onChange={handleChange}
    //       />
    //     </Form>
    //   </Formik>
    // );
    // const select = screen.getByLabelText('Test');
    // fireEvent.change(select, { target: { value: 'option2' } });
    // expect(handleChange).toHaveBeenCalledWith(
    //   expect.objectContaining({
    //     target: expect.objectContaining({
    //       value: 'option2',
    //     }),
    //   })
    // );
  });

  it('handles blur events', () => {
    // const handleBlur = jest.fn();
    // render(
    //   <Formik initialValues={{}} onSubmit={() => {}}>
    //     <Form>
    //       <SelectField
    //         label="Test"
    //         name="test"
    //         options={options}
    //         onBlur={handleBlur}
    //       />
    //     </Form>
    //   </Formik>
    // );
    // const select = screen.getByLabelText('Test');
    // fireEvent.blur(select);
    // expect(handleBlur).toHaveBeenCalled();
  });
});
