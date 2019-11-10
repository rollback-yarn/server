function creelLocationFaker(machineName, deviceId, side) {
  const d = MACHINE_DEVICE[machineName];

  if (!d) {
    return false;
  }

  return d.indexOf(deviceId + '|' + side) !== -1

}


const MACHINE_DEVICE = {
  'Machine A': [
    'd-01|A',
    'd-02|B',
    'd-03|B',
  ],
  'Machine D': [
    'd-04|A',
    'd-05|B',
    'd-06|A',
    'd-02|B',
  ]
};

module.exports = creelLocationFaker;
