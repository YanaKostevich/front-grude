import { getUser, getUsers } from "@/services/users.service";

const mutations = {
  setUser(state, user) {
    state.user = user;
  },

  setUsers(state, users) {
    state.users = users;
  },

  setUserError(state, error) {
    state.userError = error;
  },
};

const actions = {
  async fetchUser({ commit }, id) {
    try {
      const user = await getUser(id);
      commit("setUser", user);
    } catch (err) {
      commit("setUserError", err);
    }
  },
  async fetchUsers({ commit }, id) {
    try {
      const users = await getUsers(id);
      commit("setUsers", users);
    } catch (err) {
      commit("setUserError", err);
    }
  },
};

const getters = {
  user: ({ user }) => user,
  users: ({ users }) => users,
  userError: ({ userError }) => userError,
};

const state = () => ({
  user: {},
  users: [],
  userError: null,
});

export default {
  mutations,
  getters,
  actions,
  state,
};
