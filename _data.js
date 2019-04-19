
exports.JsonToJson = JsonToJson
function JsonToJson(obj, keys) {
  if (!keys) {
    return obj
  }
  let result = {}
  keys.forEach(key => {
    result[key] = obj[key] ? obj[key] : null
  })
  return result
}

exports.ArrayJsonToArrayJson = (array, keys) => {
  if (!keys) {
    return array
  }
  let result = []
  for(let i = 0; i < array.length; i++) {
    let obj = array[i]
    let json = JsonToJson(obj, keys)
    result.push(json)
  }
  return result
}

exports.ArrayJsonToArray = (array, key) => {
  let result = []
  for(let i = 0; i < array.length; i++) {
    if (array[i][key]) {
      result.push(array[i][key])
    }
  }
  return result
}

exports.CompactJson = json => {
  let result = {}
  for (let key in json) {
    if (json[key]) {
      result[key] = json[key]
    }
  }
  return result
}

exports.CompactArray = array => {
  let index = -1
  let length = array === null ? 0 : array.length
  let resIndex = 0
  let result = []
  while (++index < length) {
    const value = array[index]
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}
