import {name as appName} from './app.json';
import {buildApp} from '@medux/react-native';
import {moduleGetter} from 'src/modules';

buildApp(appName, moduleGetter, 'app');
