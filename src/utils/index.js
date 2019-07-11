import format from 'date-fns/format'

export function getImageURL (file, withPlaceholder = false) {
  return file
    ? `${process.env.REACT_APP_API_URL}/public/files/${file.md5}`
    : withPlaceholder
      ? '//via.placeholder.com/100'
      : null
}

export function formatMonth (date) {
  return format(date, 'YYYY-MM')
}

export function formatYear (date) {
  return format(date, 'YYYY')
}

export function formatDate (date) {
  return format(date, 'YYYY-MM-DD')
}

export function formatDateProject (startDate, endDate) {
  return `${format(startDate, 'MMMM YYYY')} - ${format(endDate, 'MMMM YYYY')}`
}

export function formatDateCommunication (startDate, endDate) {
  return `${format(startDate, 'DD')}-${format(endDate, 'DD MMMM YYYY')}`
}

export function formatDateMedia (date) {
  return format(date, 'MMM DD YYYY')
}
