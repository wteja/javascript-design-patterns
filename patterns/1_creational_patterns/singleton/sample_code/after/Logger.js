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

let instance = null;
exports.getInstance = () => {
  if (!instance) {
    instance = new Logger();
  }
  return instance;
};
