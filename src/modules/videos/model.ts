import {BaseModelHandlers, LoadingState, effect, reducer} from '@medux/core';

import {BaseModelState} from '@medux/core/types/export';
import {ModuleNames} from 'src/modules/names';
import {RootState} from 'src/modules';

// 定义本模块的State类型
export interface State extends BaseModelState {
  curUser: number;
  loading: {
    global: LoadingState;
    login: LoadingState;
  };
}

// 定义本模块State的初始值
export const initModelState: State = {
  curUser: 0,
  loading: {
    global: LoadingState.Stop,
    login: LoadingState.Stop,
  },
};

// 定义本模块的Handlers
export class ModelHandlers extends BaseModelHandlers<State, RootState> {
  @reducer
  protected putCurUser(curUser: number): State {
    return {...this.state, curUser};
  }

  // 监听自已的INIT Action，做一些异步数据请求，不需要手动触发，所以请使用protected或private
  @effect()
  protected async [ModuleNames.videos + '/INIT']() {
    const curUser = 90;
    this.updateState({
      curUser,
    });
  }
}
