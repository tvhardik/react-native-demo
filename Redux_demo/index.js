/**
 * @format
 */
import {AppRegistry, Platform} from 'react-native';
import App from './App';

import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import YourComponent from './screen/Test/YourComponent';
import main from './main';
import Apidata from './screen/Apidata';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
});

AppRegistry.registerComponent(appName, () => YourComponent);
