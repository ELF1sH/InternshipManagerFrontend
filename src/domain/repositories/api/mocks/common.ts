import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const a = axios.create();
export const mock = new MockAdapter(a, { delayResponse: 500 });
