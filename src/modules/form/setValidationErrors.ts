import { setLocale } from 'yup';

export const setValidationErrors = () => {
  setLocale({
    mixed: {
      required: 'Обязательное поле',
    },
  });
};
