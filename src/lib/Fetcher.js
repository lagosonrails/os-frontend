import jQuery from 'jquery'

export default (url, method=null, authToken=null, data=null) => {
  let request = {
    method: method ? method : 'GET' ,
    data: data ? JSON.stringify(data) : null,
    url: url,
    headers: {'Content-Type': 'application/json', Authorization: `Token token ${authToken}`}
  }

  if (!authToken) delete request.headers.Authorization

  return sendRequest(request)
}

const sendRequest = request => {
  let promise = jQuery.Deferred()
  jQuery.ajax(request)
    .done((data, result, response) => {promise.resolve(data, response.status)})
    .fail(error => {
      let errorJSON
      if (error.responseJSON)
        errorJSON = error.responseJSON
      else if (error.responseText)
        errorJSON = JSON.parse(error.responseText)
      else
        errorJSON = {errors: ['An error occurred']}
      promise.reject(errorJSON)
    })
  return promise
}
