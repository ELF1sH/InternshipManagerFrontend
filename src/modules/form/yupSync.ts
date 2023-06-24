import { ObjectSchema } from 'yup';

export const getYupSync = (schema: ObjectSchema<any>) => ({
  async validator({ field }: any, value: any) {
    await schema.validateSyncAt(field, { [field]: value });
  },
});
