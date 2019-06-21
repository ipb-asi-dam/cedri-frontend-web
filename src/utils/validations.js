import isBefore from 'date-fns/is_before'
import toDate from 'validator/lib/toDate'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'
import isURL from 'validator/lib/isURL'
import matches from 'validator/lib/matches'

export function email (value) {
  return value && !isEmail(value.trim())
    ? 'Invalid email'
    : null
}

export function isDate (value) {
  return value && !toDate(value.trim())
    ? 'Invalid date'
    : null
}

export function checkDate (prev, current) {
  function inner () {
    return !prev && !current
      ? null
      : isBefore(prev, current)
        ? null
        : 'Invalid date'
  }

  return inner
}

export function strongPassword (value) {
  const oneNumberRegex = /.*[0-9].*/g
  const specialCharRegex = /.*[~!@#$%\\^&*\-_=+|[{()}\];:'",<.>/?].*/g

  return !(matches(value, oneNumberRegex) && matches(value, specialCharRegex))
    ? 'Password must have at least one number and a special character'
    : null
}

export function passwordLength (value) {
  return value && !isLength(value, { min: 8, max: 255 })
    ? 'Password must have between 8 to 255 characters'
    : null
}

export function url (value) {
  return value && !isURL(value)
    ? 'Invalid URL'
    : null
}

export function required (value) {
  return value
    ? false
    : 'This field is required!'
}

export const matchesPattern = (pattern, name) => (value) => {
  return !matches(value, pattern)
    ? `Invalid ${name}`
    : null
}

export function date (value) {
  return value && !isLength(value, { min: 6, max: 32 })
    ? 'Password must have at least 6 characters'
    : null
}
