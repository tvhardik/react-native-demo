/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import App from './App';
import App from './screen/test';
import ResponsiveApi from './screen/Test/ResponsiveApi';
import Navigation from './screen/Test/Navigation';
import CameraScreen from './src/Camera /CameraScreen';
import Singup from './quadralynx/Singup';
AppRegistry.registerComponent(appName, () => Singup);
        