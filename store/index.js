export const state = () => ({
  locales: ['en', 'id'],
  locale: 'id'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
