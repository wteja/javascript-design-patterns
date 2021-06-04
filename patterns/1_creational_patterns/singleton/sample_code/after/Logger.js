class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

class Singleton {
  static instance;
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Logger();
    }
    return Singleton.instance;
  }
}
module.exports = Singleton;
