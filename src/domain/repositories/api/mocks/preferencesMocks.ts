import { preferencesList } from 'domain/repositories/api/mocks/data/preferencesList';
import { mock } from 'domain/repositories/api/mocks/common';

export const mockPreferencesList = () => {
  mock
    .onGet('/preferences')
    .reply(() => [200, preferencesList]);
};
