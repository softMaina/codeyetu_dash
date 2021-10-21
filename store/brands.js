export const state = () => ({
  offers: [],
  brands: [],
  referrals: [],
  clicked_offer: null,
  merchants: []
})

export const getters = {
  offers: state => state.offers,
  clicked_offer: state => state.clicked_offer,
  brands: state => state.brands,
  referrals: state => state.referrals,
  merchants: state => state.merchants,
}

export const mutations = {
  setOffers(state, payload){
    state.offers = payload.offers
  },
  setBrands(state, payload){
    state.brands = payload.brands
  },
  setReferrals(state, payload){
    state.referrals = payload.referrals
  },
  setClickedOffer(state, payload){
    state.offer = payload.offer
  },
  setMerchants(state, payload){
    state.merchants = payload.merchants
  }

}

export const actions = {
  async fetchOffers({commit, dispatch}) {
    await this.$axios.get('http://192.168.100.6:5000/api/offers').then((res)=>{
      commit({
        type: 'setOffers',
        offers: res.data
      })
    })
  },

  async fetchReferals({commit, dispatch}) {
    await this.$axios.get('http://192.168.100.6:5000/api/referrals').then((res)=>{
      commit({
        type: 'setReferrals',
        referrals: res.data
      })
    })
  },

  async fetchBrands({commit, dispatch}) {
    await this.$axios.get('http://192.168.100.6:5000/api/brands').then((res)=>{
      commit({
        type: 'setBrands',
        brands: res.data
      })
    })
  },

  async fetchMerchants({commit, dispatch}) {
    await this.$axios.get('http://localhost:5000/api/merchants').then((res)=>{
      console.log(res)
      commit({
        type: 'setMerchants',
        merchants: res.data
      })
    })
  },

  async addMerchant({commit, dispatch}, data){
    await this.$axios.post('http://localhost:5000/api/merchants',data).then((res)=>{
      if(res.status === 201){
        this.dispatch('brands/fetchMerchants')
      }

    })
  },

  async addOffer({commit, dispatch}, data){
    await this.$axios.post('http://localhost:5000/api/offers',data).then((res)=>{
      if(res.status === 201){
        this.dispatch('brands/fetchOffers')
      }

    })
  },

  async addBrand({commit, dispatch}, data){
    await this.$axios.post('http://localhost:5000/api/brands',data).then((res)=>{
      console.log(res.status)
      if(res.status === 201){
       this.dispatch('brands/fetchBrands')
      }

    })
  }
}
