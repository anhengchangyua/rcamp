const request = (url, method, body) => {
  let isOk
  console.log(body)
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        //'Content-Type': 'application/json;charset=utf-8'
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      body
    })
      .then(response => {
        if (response.ok) {
          isOk = true
        } else {
          isOk = false
        }
        return response.json()
      })
      .then(responseData => {
        if (isOk) {
          resolve(responseData)
        } else {
          reject(responseData)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default {
  request
}
