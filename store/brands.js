export const state = () => ({
  offers: [],
  brands: [],
  referrals: [],
  users: [],
  total: 0,
  clicked_offer: null,
  merchants: [],
  brand_categories: []
})

export const getters = {
  offers: state => state.offers,
  users: state => state.users,
  clicked_offer: state => state.clicked_offer,
  brands: state => state.brands,
  referrals: state => state.referrals,
  merchants: state => state.merchants,
  brand_categories: state => state.brand_categories,
  total: state => state.total
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
  },
  setCategories(state, payload){
    state.brand_categories = payload.brand_categories
  },
  setUsers(state,payload){
    state.users = payload.users
  },
  setTotal(state,payload){
    state.total = payload.total
  }

}

export const actions = {
  async fetchOffers({commit, dispatch}) {
    await this.$axios.get('/api/offers').then((res)=>{
      commit({
        type: 'setOffers',
        offers: res.data["results"]
      })
    })
  },

  async fetchCategories({commit, dispatch}) {
    await this.$axios.get('/api/brand/categories').then((res)=>{

      commit({
        type: 'setCategories',
        brand_categories: res.data["results"]
      })

    })
  },

  async fetchReferals({commit, dispatch}) {
    await this.$axios.get('/api/referrals').then((res)=>{
      commit({
        type: 'setReferrals',
        referrals: res.data["results"]
      });

      commit({
        type: 'setTotal',
        total: res.data["total"]
      });
    })
  },

  async fetchBrands({commit, dispatch}) {
    await this.$axios.get('/api/brands').then((res)=>{
      commit({
        type: 'setBrands',
        brands: res.data["results"]
      })
    })
  },

  async fetchMerchants({commit, dispatch}) {
    await this.$axios.get('/api/merchants').then((res)=>{
      console.log(res)
      commit({
        type: 'setMerchants',
        merchants: res.data["results"]
      })
    })
  },
  async fetchUsers({commit, dispatch}) {
    await this.$axios.get('/api/accounts').then((res)=>{
      console.log(res)
      commit({
        type: 'setUsers',
        users: res.data["results"]
      })
    })
  },

  async addMerchant({commit, dispatch}, data){
    await this.$axios.post('/api/merchants',data).then((res)=>{
      if(res.status === 201){
        this.dispatch('brands/fetchMerchants')
      }

    })
  },

  async addOffer({commit, dispatch}, data){
    await this.$axios.post('api/offers',data).then((res)=>{
      if(res.status === 201){
        this.dispatch('brands/fetchOffers')
      }

    })
  },

  async addBrand({commit, dispatch}, data){
    await this.$axios.post('/api/brands',data).then((res)=>{
      console.log(res.status)
      if(res.status === 201){
       this.dispatch('brands/fetchBrands')
      }

    })
  },
  async addBrandCategory({commit, dispatch}, data){
    await this.$axios.post('/api/brand/categories',data).then((res)=>{
      console.log(res.status)
      if(res.status === 201){
        this.dispatch('brands/fetchCategories')
      }

    })
  },
  async deleteOffer({commit, dispatch}, id){
    let url = '/api/offers/' + id;
    await this.$axios.delete(url).then((res)=>{
      console.log(res.status)
      if(res.status === 200){
        this.dispatch('brands/fetchOffers')
      }

    })
  },
  async deleteBrand({commit, dispatch}, id){
    let url = '/api/brands/' + id;
    await this.$axios.delete(url).then((res)=>{
      console.log(res.status)
      if(res.status === 200){
        this.dispatch('brands/fetchBrands')
      }

    })
  }
}
