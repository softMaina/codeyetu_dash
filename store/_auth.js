// register, login and logout
export const state = () => ({
  user: null,
  bearerToken: null,
  tokenExpiresIn: null,
  error: false,
  errorMessage: null
});


export const getters = {
  user: state => state.user,
  bearerToken: state => state.bearerToken,
  tokenExpiresIn: state => state.tokenExpiresIn,
  error: state => state.error,
  errorMessage: state => state.errorMessage,

}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_BEARER_TOKEN(state, token) {
    state.bearerToken = token
  },
  SET_TOKEN_EXPIRES_IN(state, expiresIn) {
    state.tokenExpiresIn = expiresIn
  },
  CLEAR_USER_DATA(state) {
    state.user = null
    state.bearerToken = null
    localStorage.removeItem("bearerToken")
    this.$router.push('/')
  },
  SET_ERROR(state, message) {
    state.error = !!message
    state.errorMessage = message
  },
}


export const actions = {

  async login({dispatch, commit}, data) {
    await this.$axios.post('/auth/login', data).then((res) => {
      let accessToken = res.data.auth_token
      console.log(res.data)

        localStorage.setItem("bearerToken", accessToken);
        commit('SET_BEARER_TOKEN', accessToken);
        this.$auth.setUserToken(accessToken)
        dispatch('get_profile');

    })
  },
  async get_profile({dispatch, commit}) {
    let config = {
      headers: {
        'Authorization': ''
      }
    }
    let token = localStorage.getItem("bearerToken")
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    await this.$axios.get('/auth/status', config)
      .then((response) => {
        let user = response.data
        this.$auth.setUser(user)
        commit("SET_USER", user)

        this.$router.push('/home')

      }).catch((err) => {
        commit('SET_ERROR', err.message)
      })
  },
  async logout({commit}) {
    let config = {
      headers: {
        'Authorization': ''
      }
    }
    let token = localStorage.getItem("bearerToken")
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    await this.$axios.post('/auth/logout', config)
      .then((res) => {
        commit('CLEAR_USER_DATA');
        this.$auth.logout()

      }).catch((error) => {
        commit('CLEAR_USER_DATA');
      })
  },
}
