import {ModelHandlers, initModelState} from './model';

import Details from './views/Details';
import List from './views/List';
import {exportModule} from '@medux/react';

export {default as VideosNavigator} from './views/Main';

export default exportModule('videos', initModelState, ModelHandlers, {List, Details});
