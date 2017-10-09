let notificationData = {};

export function setNotificationData(data) {
  notificationData = data;
}

export function getNotificationData(data) {
  return notificationData;
}

export default function notificationHandler(navigator) {
  if (notificationData.notification) {
    const data = notificationData.notification.payload.additionalData;
    switch (data.notification_type) {
      case 'notification_match':
        navigator.showModal({
          screen: 'MatchModal', // unique ID registered with Navigation.registerScreen
          navigatorStyle: {
            screenBackgroundColor: '#00000080',
            modalPresentationStyle: 'overCurrentContext',
            navBarHidden: true,
          },
          animationType: 'none',
          passProps: {
            user: data.user,
            withSuperlike: data.with_super_like,
            switchToTab: () => { navigator.switchToTab({ tabIndex: 3 }); },
          },
        });
        break;
      case 'notification_message':
        // messages
        navigator.switchToTab({
          tabIndex: 3,
        });
        break;

      case 'notification_custom_visitor':
      case 'notification_visitor':
        navigator.switchToTab({
          tabIndex: 0,
        });
        break;

      case 'notification_custom_like':
      case 'notification_like':
        navigator.switchToTab({
          tabIndex: 1,
        });
        break;

      case 'notification_message_request_delete':
      case 'notification_message_request':
      case 'notification_message_request_2':
        // message requests
        navigator.switchToTab({
          tabIndex: 3,
        });
        break;

      default:
        navigator.switchToTab({
          tabIndex: 3,
        });
        break;
    }
  }
}
