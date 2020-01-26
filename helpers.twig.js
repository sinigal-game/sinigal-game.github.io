module.exports = function () {
  return {
    functions: {
      repeat (value) {
        return value * 3
      }
    },
    filters: {
      backwords (value) {
        return value + ' 123'
      }
    }
  }
}
