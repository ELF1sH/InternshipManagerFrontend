import { useContext } from 'react';

import { NotificationContext } from 'modules/notification/NotificationsProvider';
import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction, SuccessNotificationType,
} from 'modules/notification/types';

export const useNotifications = () => {
  const api = useContext(NotificationContext);

  const notifyError: ShowErrorFunction = (errorType: ErrorNotificationType) => {
    api?.error({
      message: errorType,
      placement: 'top',
    });
  };

  const notifySuccess: ShowSuccessNotificationFunction = (
    successMessageType: SuccessNotificationType,
  ) => {
    api?.success({
      message: successMessageType,
      placement: 'top',
    });
  };

  return {
    notifyError,
    notifySuccess,
  };
};
