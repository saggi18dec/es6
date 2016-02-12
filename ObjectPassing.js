class Engine
{
  start() {
    console.log("start engine.....");
  }
}

class Car
{
  constructor(engine) {
    this.engine = engine;
  }
  
  startCar() {
    this.engine.start();
  }
}

let e = new Engine();
let c = new Car(e);
c.startCar(); //output: start engine.....