import { Formik, Form, Field } from "formik";
import carBrands from "./carBrands";
import rentPrice from "./rentPrice";
import css from "./FormFilter.module.css";

const FormFilter = () => {
  return (
    <Formik
      initialValues={{
        selectedCar: "",
      }}
      onSubmit={(values) => {
        console.log(values.selectedCar);
      }}
    >
      <Form className={css.forms}>
        <div>
          <h5>Car brand</h5>
          <Field name="selectedCar" as="select" className={css.select__field}>
            <option value="">Chose car</option>
            {carBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Field>
        </div>
        <div>
          <h5>Price/ 1 hour</h5>
          <Field name="selectedPrice" as="select">
            <option value="">To $</option>
            {rentPrice.map((price) => (
              <option key={price} value={price}>
                To {price}$
              </option>
            ))}
          </Field>
        </div>
        <div>
          <h5>Car mileage / km</h5>
          <div className={css.from__to}>
            <div>
              <Field type="text" id="from" name="from" placeholder="From"/>
            </div>
            <div>
              <Field type="text" id="to" name="to" placeholder="To"/>
            </div>
          </div>
        </div>
        <button type="submit" className={css.button__form}>
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default FormFilter;
