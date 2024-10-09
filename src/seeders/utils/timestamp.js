function timestamp(seedData) {
  return seedData.map((d) => {
    return {
      ...d,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  })
}

module.exports = timestamp