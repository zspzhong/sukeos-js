
exports.dayStartEnd = (date, time) => {
  if(!date) date = new Date().getdate()
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