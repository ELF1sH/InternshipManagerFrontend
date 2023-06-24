import { object, string } from 'yup';

export const validateSchema = () => object().shape({
  currentPassword: string().required(),
  newPassword: string().required(),
  newPasswordConfirmation: string().required(),
});
