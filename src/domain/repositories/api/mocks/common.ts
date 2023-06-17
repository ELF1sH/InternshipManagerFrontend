import MockAdapter from 'axios-mock-adapter';

import { axiosInstance } from 'domain/repositories/api/axios';

export const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });
