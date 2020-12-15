export default value => {
  const padded = value.toString().padStart(8, '0')
  const digits = padded.slice(-8)
  const integer = padded.length > digits.length ? padded.slice(0, -8) : '0'

  return [integer, digits].join('.')
}
