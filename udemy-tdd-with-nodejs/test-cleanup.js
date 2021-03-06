const fs = require('fs');
const path = require('path');
const config = require('config');

const { uploadDir, profileDir } = config;
const profileFolder = path.join('.', uploadDir, profileDir);

if (!fs.existsSync(profileFolder)) {
  return;
}

const files = fs.readdirSync(profileFolder);
for (const file of files) {
  fs.unlinkSync(path.join(profileFolder, file));
}
