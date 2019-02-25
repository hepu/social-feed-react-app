function parameterize(params) {
  let stringifiedParams = "?"
  let separator = ''

  Object.keys(params).forEach((key) => {
    stringifiedParams = stringifiedParams.concat(`${separator}${key}=${params[key]}`)
    separator = '&'
  })

  return stringifiedParams
}

export default {
  getPosts: (url, params) => {
    return new Promise((resolve, reject) => {
      fetch(url + parameterize(params), {
        method: 'GET'
      }).then((response) => {
        return response.json()
      }).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    });
  }
}
