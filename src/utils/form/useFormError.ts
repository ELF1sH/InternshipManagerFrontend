export interface FormErrors {
  required: string;
}

export const useFormError = () => {
  const getValidateMessages = (): FormErrors => ({
    required: 'The field is required',
  });

  return { getValidateMessages };
};
