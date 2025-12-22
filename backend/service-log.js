const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'service-log.txt');

function logService(services) {
  const timestamp = new Date().toLocaleString();
  const line = `${timestamp} → ${services.join(', ')}\n`;
  fs.appendFileSync(logFile, line, 'utf8');
  console.log('Logged services:', line.trim());
}

module.exports = { logService, logFile };
