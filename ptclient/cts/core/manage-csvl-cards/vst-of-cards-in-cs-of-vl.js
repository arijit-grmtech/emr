// For flow chart see cts/manage-csvl-cards/orm-search-phrases-of-ct:7
export default {
  state: {
    arCardsInCsOfVl: [], // Template has a for loop running on this.
  },
  mutations: {
    mtfSetArCardsInCsOfVl(state, value) {
      state.arCardsInCsOfVl = value
    },
    mtfShowCardInCsVl(state, pCard) {
      // CsVl is current state view layer
      state.arCardsInCsOfVl.push(pCard)
      console.log('state-> ', state)
    },
  },
}
