export default function createResult(err, data) {

  const result = {}

  if (err) {
    result['status'] = 'error'
    result['error'] = err

    return result
  }

  result['status'] = 'success'
  result['data'] = data

  return result
}