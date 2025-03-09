import { useFormik } from "formik";
import * as Yup from "yup";

const InputSearch = ({ onSave }: { onSave: (value: string) => void }) => {
  const validationSchema = Yup.object({
    inputsearch: Yup.string()
      .matches(/^[A-Za-z0-9]+$/, "Only numbers and letters are allowed")
      .min(1, "Minimum 1 character required")
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

  const handleRandom = () => {
    const random_id = Math.floor(Math.random() * 300) + 1;
    onSave(random_id.toString());
  };

  return (
    <nav
      className='navbar navbar-expand-lg navbar-primary bg-primary sticky-top pt-2 mb-4'
      data-bs-theme='light'
    >
      <div className='container'>
        <a
          className='d-lg-block d-none navbar-brand roboto-condensed-bold fs-4 text-light fb-bolder mb-1'
          href='/'
        >
          Pokemon Search APP
        </a>

        <div className='d-flex w-100'>
          <div className='input-group has-validation'>
            <span className='d-lg-block d-none input-group-text'>
              Type Pokemon name or ID number{" "}
              <i className='mx-2 bi bi-search'></i>
            </span>
            <input
              type='search'
              id='inputsearch'
              name='inputsearch'
              placeholder='Search'
              value={formik.values.inputsearch}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-describedby='validationTooltipUsernamePrepend'
              className={`form-control me-2 ${
                formik.touched.inputsearch && formik.errors.inputsearch
                  ? "is-invalid"
                  : ""
              }`}
            />
            {formik.touched.inputsearch && formik.errors.inputsearch ? (
              <div className='invalid-tooltip'>{formik.errors.inputsearch}</div>
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
              className='pe-3 mx-3 btn btn-danger'
            >
              Random
            </button>
          </div>
          <div className='d-lg-block d-none mx-3 mb-1'>
            <a
              href='https://pokeapi.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='http://localhost:5173/pokeapi_256.3fa72200.png'
                alt='PokeAPI Data'
                width='80'
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InputSearch;
