import { HTTPClient } from 'boot/axios'

const setCategories = ({ commit }) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get('/categories')
      .then((suc) => {
        commit('SET_CATEGORIES', suc.data)
        resolve(suc.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export { setCategories }
