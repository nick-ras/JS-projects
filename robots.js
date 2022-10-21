Objects:
const robotss = 
{
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);


const robotFactory = (model, mobile) => { return {
  model: model,
  mobile: mobile,
  beep () {console.log('Beep Boop');}
}}
const tinCan = robotFactory ('P-500', true)
tinCan.beep()

const robots = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num)
  {
    if(typeof num === 'number' &&  num >= 0) {
    this._numOfSensors = num
    } else {
      return 'Pass in a number that is greater than or equal to 0'
    }
  } 
};
robot.numOfSensors = 100
console.log(robot.numOfSensors)


const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){ if (typeof this._energyLevel === 'number') {
    return 'My current energy level is ' + this._energyLevel
  } else {
    return 'System malfunction: cannot retrieve energy level'
  }
}};

console.log(robot.energyLevel)
