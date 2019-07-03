import {ModelHandlers, initModelState} from './model';

import Details from './views/Details';
import List from './views/List';
import {exportModule} from '@medux/react';

export {default as PhotosNavigator} from './views/Main';

export default exportModule('photos', initModelState, ModelHandlers, {List, Details});
