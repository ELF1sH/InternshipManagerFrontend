export type ShowErrorFunction = (errorType: ErrorNotificationType) => void;

export enum ErrorNotificationType {
  INCORRECT_LOGIN_OR_PASSWORD = 'Неверный логин или пароль',
  INCORRECT_PASSWORD = 'Неверный пароль',
  FAILED_TO_FETCH_DATA = 'Ошибка при получении данных',
  FAILED_TO_SEND_DATA = 'Ошибка при отправке данных',
  FAILED_TO_UPLOAD = 'Произошла ошибка при загрузке файла на сервер',
  FAILED_TO_ADD_TO_PREFERENCE_LIST = 'Не удалось добавить в список избранных',
  FAILED_TO_UPDATE_STATUS = 'Не удалось обновить статус прохождения'
}

export type ShowSuccessNotificationFunction = (successMessageType: SuccessNotificationType) => void;

export enum SuccessNotificationType {
  CHANGES_SUCCESSFULLY_SAVED = 'Изменения успешно сохранены',
  SUCCESSFULLY_UPLOADED = 'Файл был успешно загружен',
  SUCCESSFULLY_ADDED_TO_PREFERENCE_LIST = 'Вакансия успешно добавлена в список предпочтений',
  SUCCESSFULLY_UPDATED_STATUS = 'Статус прохождения был успешно обновлен',
  PASSWORD_HAS_BEEN_SUCCESSFULLY_CHANGED = 'Пароль был успешно изменен'
}
