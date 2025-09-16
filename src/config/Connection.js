const {Client} = require('pg')
const Data = require('../Data/Connect')

// now making connection

const Connections = new Client(Data)


module.exports = Connections