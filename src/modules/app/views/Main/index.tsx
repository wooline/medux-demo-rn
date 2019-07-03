import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

import {PhotosNavigator} from 'src/modules/photos';
import {VideosNavigator} from 'src/modules/videos';

const TabNavigator = createBottomTabNavigator(
  {
    Photos: PhotosNavigator,
    Videos: VideosNavigator,
  },
  {
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'green',
    },
  }
);

export default createAppContainer(TabNavigator);
