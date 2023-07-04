import { object, string } from 'yup';

export const validationSchema = () => object().shape({
  name: string().required(),
  contactNumber: string().required(),
  contactFirstname: string().required(),
  contactLastname: string().required(),
  contactPatronymic: string().required(),
});
