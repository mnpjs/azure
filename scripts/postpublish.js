const { resolve } = require('path')
const { unlink } = require('fs')

const file = resolve(__dirname, '../structure/_local.settings.json')
unlink(file, () => {
  console.log('removed file _local.settings.json')
})
