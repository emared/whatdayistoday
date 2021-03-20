/**
 * Get current day
 */
 const today = new Date()
 const getDay = today.getDay()

 const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',  'Thursday', 'Friday', 'Saturday']
 const day2 = ['Be', 'Monday', 'Tuesday', 'Wednesday',  'Thursday', 'Almost weekend', 'Saturday']

 // get day
 const _day = day[getDay]
 // get day
 const _day2 = day2[getDay]

 const newDay = document.querySelector('.newDay')
 newDay.append(_day)
 const commentDay = document.querySelector('.commentDay')
 commentDay.append(_day2)
