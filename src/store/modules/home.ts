const state = {
  openid: 'test4',
  wechatInfo: '',
  redirect: ''
}

const mutations = {
  setData(state: any, data: any) {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = data[key];
        state[key] = value;
      };
    };
  }
}

const actions = {
  setData({ commit }: any, data: any) {
    commit('setData', data);
  }
}

export default {
  state,
  mutations,
  actions,
}