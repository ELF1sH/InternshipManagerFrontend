import { object, string } from 'yup';

export const validationSchema = () => object().shape({
  course: string().required(),
  description: string().required(),
  file: object().required(),
});
