import { HTTPClient } from 'boot/axios'

const setPosts = ({ commit }) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get('/articles')
      .then((suc) => {
        commit('SET_POSTS', suc.data)
        resolve(suc.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export { setPosts }
