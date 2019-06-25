exports.dayStartEnd = (date, time) => {
  if(!date) date = new Date().getTime()
  if(!time) time = '00:00'
  const year = new Date(parseInt(date)).getFullYear()
  const month = new Date(parseInt(date)).getMonth()
  const day = new Date(parseInt(date)).getDate()
  const date_day = year + '-' + (month+1) + '-' + day + ' ' + time
  const start_date = new Date(date_day).getTime()
  return {
    start: start_date,
    end: start_date + 86400000 - 1
  }
}

// 解析时间戳 年月日
exports.mapTime = (time) => {
  if(!time || time == null) {
    return {
      year: null,
      month: null,
      day: null,
      hours: null,
      minutes: null,
      seconds: null
    }
  };

  var year = new Date(parseInt(time)).getFullYear()
  var month = new Date(parseInt(time)).getMonth() + 1
  var day = new Date(parseInt(time)).getDate()
  var hours = new Date(parseInt(time)).getHours()
  var minutes = new Date(parseInt(time)).getMinutes()
  var seconds = new Date(parseInt(time)).getSeconds()
  var week = new Date(parseInt(time)).getDay()

  return {
    time: time,
    year: year,
    month: month,
    day: day,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    week: week
  }
}

// 计算月份天数
exports.monthDays = (time) => {
  const year = new Date(parseInt(time)).getFullYear()
  const month = new Date(parseInt(time)).getMonth()
  const nextMonth = new Date(year,month+1,1).getTime()
  const nowMonthDay = new Date(parseInt(nextMonth-1)).getDate()
  return nowMonthDay
}

// 月份开始时间 结束时间
exports.monthStartEnd = (date, time) => {
  if(!date) date = new Date().getTime()
  if(!time) time = '00:00'
  const year = new Date(parseInt(date)).getFullYear()
  const month = new Date(parseInt(date)).getMonth()
  const timeArr = time.split(':')
  const start_date = new Date(year, month, 1, ...timeArr).getTime()
  const end_date = new Date(year, month+1, 1, ...timeArr).getTime()
  return {
    start: start_date,
    end: end_date - 1
  }
}

exports.monthEndDay = date => {
  if(!date) date = new Date().getTime()
  const year = new Date(parseInt(date)).getFullYear()
  const month = new Date(parseInt(date)).getMonth()
  const end_date = new Date(year, month+1, 1).getTime()
  const day = new Date(end_date - 1).getDate()
  return day
}

exports._year = _year
function _year (date) {
  return new Date(parseInt(date)).getFullYear()
}
exports._month = _month
function _month (date) {
  return new Date(parseInt(date)).getMonth() + 1
}
exports._day = _day
function _day (date) {
  return new Date(parseInt(date)).getDate()
}
exports._week = _week
function _week (date) {
  return new Date(parseInt(date)).getDay()
}

exports.dateDay = (value, interval) => {
  if (!value) {
    return ''
  }
  interval = interval || '.'
  const data = parseInt(value)
  const year = new Date(data).getFullYear()
  const month = new Date(data).getMonth() + 1
  const day = new Date(data).getDate()
  return year + interval + addZero(month) + interval + addZero(day)
}

exports.dateDayTime = value => {
  if (!value) {
    return ''
  }
  const data = parseInt(value)
  const year = new Date(data).getFullYear()
  const month = new Date(data).getMonth() + 1
  const day = new Date(data).getDate()
  const hours = new Date(parseInt(data)).getHours()
  const minutes = new Date(parseInt(data)).getMinutes()
  const seconds = new Date(parseInt(data)).getSeconds()
  return year + '.' + addZero(month) + '.' + addZero(day) + ' ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds)
}

exports.dateTime = value => {
  if (!value) {
    return ''
  }
  const data = parseInt(value)
  const hours = new Date(parseInt(data)).getHours()
  const minutes = new Date(parseInt(data)).getMinutes()
  const seconds = new Date(parseInt(data)).getSeconds()
  return addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds)
}

exports.addZero = addZero
function addZero (value) {
  value = parseInt(value)
  return value < 10 ? '0' + value : value
}