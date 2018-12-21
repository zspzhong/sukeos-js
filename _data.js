

exports.JsonToJson = (obj, keys) => {
  if (!keys) {
    return obj
  }
  let result = {}
  keys.forEach(key => {
    result[key] = obj[key] ? obj[key] : null
  })
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

exports.ChunkArray = (array, key) => {
  
}