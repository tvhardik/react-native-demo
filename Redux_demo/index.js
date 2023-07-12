/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import App from './App';
import App from './screen/test';
import ResponsiveApi from './screen/Test/ResponsiveApi';

AppRegistry.registerComponent(appName, () => ResponsiveApi);
