
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
