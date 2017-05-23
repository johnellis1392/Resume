import _ from 'underscore'

// Get data
const context = require.context(__dirname, true, /\.json$/)
const data = _.chain(context.keys())
  .map((key) => {
    const fileData = context(key)
    const branchName = key.match(/\.\/([^.]+)\.json$/)[1]
    return [
      branchName,
      fileData
    ]
  })
  .object()
  .value()

export default data

