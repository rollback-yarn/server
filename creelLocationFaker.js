function creelLocationFaker(machineName, deviceId, side) {
  const d = MACHINE_DEVICE[machineName];

  if (!d) {
    return false;
  }

  return d.indexOf(deviceId + '|' + side) !== -1

}


const MACHINE_DEVICE = {
  'Machine A': [
    '2141c26c-031b-11ea-8d71-362b9e155667|A',
    '2141c4c4-031b-11ea-8d71-362b9e155667|B',
    '2141c60e-031b-11ea-8d71-362b9e155667|B',
  ],
  'Machine D': [
    '2141c4c4-031b-11ea-8d71-362b9e155667|A',
    '2141c744-031b-11ea-8d71-362b9e155667|B',
    '2141c866-031b-11ea-8d71-362b9e155667|A',
    '2141cbc2-031b-11ea-8d71-362b9e155667|B',
  ]
};

module.exports = creelLocationFaker;
