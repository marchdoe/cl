var exec = require('child_process').exec

exec('node -v', function (err, stdout) {
  if (err) throw err

  if (parseFloat(stdout.slice(1)) < 6) {
    throw new Error('cl requires node 6.0 or greater.')
  }
  console.log(stdout)
})
