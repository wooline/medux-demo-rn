import * as app from 'src/modules/app';
import * as photos from 'src/modules/photos';
import * as videos from 'src/modules/videos';

import {RootState as BaseState} from '@medux/core/types/export';
import {exportActions} from '@medux/core';

// 定义模块的加载方案，同步或者异步均可
export const moduleGetter = {
  app: () => {
    return app;
  },
  photos: () => {
    return photos;
  },
  videos: () => {
    return videos;
  },
};

// export type ModuleGetter = typeof moduleGetter;

export const actions = exportActions(moduleGetter);

export type RootState = BaseState<typeof moduleGetter>;
