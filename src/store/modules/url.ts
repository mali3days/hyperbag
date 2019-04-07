import apiUrl from '@/api';

import {
  IUrl,
  IUrlState,
} from '@/types/url';

const state: IUrlState = {
  all: [],
};

const getters = {};

const actions = {
  getAllUrls({ commit }: { commit: Function }) {
    apiUrl.getUrls((urls: IUrl[]) => commit('setUrls', urls));
  },
};

const mutations = {
  setUrls(state: IUrlState, urls: IUrl[]) {
    state.all = urls;
  },
  changeUrl(s: IUrlState, { id }: { id : number }) {
    const urlToMutate = s.all.find(url => url.id === id);
    urlToMutate!.title = 'New title!';
  },
};

export const url = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
