import { useFormik } from "formik";
import * as Yup from "yup";

interface InputSearchProps {
  onSave: (value: string | number) => void;
}

const InputSearch = ({ onSave }: InputSearchProps) => {
  const validationSchema = Yup.object({
    inputsearch: Yup.string()
      .required("Required some data to search")
      .matches(/^[A-Za-z0-9]+$/, "Only numbers and letters are allowed")
      .max(12, "Maximum 12 characters alowed"),
  });

  const formik = useFormik({
    initialValues: { inputsearch: "" },
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      onSave(values.inputsearch);
      formik.resetForm();
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    formik.setFieldTouched("inputsearch", true, false);
  };

  const handleRandom = () => {
    const random_id = Math.floor(Math.random() * 300) + 1;
    onSave(random_id.toString());
  };

  return (
    <nav
      className='navbar navbar-expand-lg navbar-primary bg-primary sticky-top pt-2 mb-4'
      data-bs-theme='light'
    >
      <div className='container d-lg-flex d-sm-block justify-content-md-between justify-content-sm-center'>
        <a
          className='d-lg-block d-none navbar-brand text-light text-uppercase'
          href='/'
        >
          <span className='francois-one fs-logo'>pokemon search app</span>
        </a>

        <div className='input-group has-validation mx-md-5 mx-sm-1'>
          <span className='d-lg-block input-group-text'>
            Search <i className='mx-2 bi bi-search'></i>
          </span>
          <input
            type='search'
            id='inputsearch'
            name='inputsearch'
            placeholder='Name or ID number'
            value={formik.values.inputsearch}
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            className={`form-control ${
              formik.touched.inputsearch && formik.errors.inputsearch
                ? "is-invalid"
                : ""
            }`}
          />
          {formik.touched.inputsearch && formik.errors.inputsearch ? (
            <div className='invalid-tooltip rounded'>
              {formik.errors.inputsearch}
            </div>
          ) : null}
          <button
            type='button'
            onClick={() => formik.handleSubmit()}
            className='btn btn-warning'
          >
            Search
          </button>

          <button
            type='button'
            onClick={handleRandom}
            className='pe-3 mx-3 mx-sm-1 btn btn-danger rounded'
          >
            Random
          </button>
        </div>
        <div className='d-lg-block d-none mx-3 mb-1'>
          <a
            href='https://pokeapi.co'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/pokeapi_256.3fa72200.png'
              alt='PokeAPI Data'
              width='80px'
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default InputSearch;
