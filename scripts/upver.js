const replace = require('replace-in-file');
const packageObject = require('../package.json');

const versionRegEx = new RegExp(/\d+\.\d+\.\d+/, 'g');
const buildRegEx = new RegExp(/\d+/, 'g');

const argsValid = () => {
  const currentVersion = packageObject.version;
  const currentBuild = packageObject.buildNumber;

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(
    `Current version & buildNum: ${currentVersion} ${currentBuild}\nEnter new version & buildNum: `,
    arg => {
      const newVersion = arg.split(' ')[0];
      const newBuild = arg.split(' ')[1];
      if (versionRegEx.test(newVersion) && buildRegEx.test(newBuild)) {
        console.log(
          `\n🚀 v${currentVersion}-${currentBuild} 🔜 v${newVersion}-${newBuild} 🚀\n`,
        );
        readline.close();
        //Update Package.json
        updatePackage(currentVersion, newVersion, currentBuild, newBuild);
        //Update Android
        updateAndroid(currentVersion, newVersion, currentBuild, newBuild);
        updateConstantFile(currentVersion, newVersion, currentBuild, newBuild);
      } else {
        console.log('Invalid format! eg: 4.7.96 24');
      }
    },
  );
};

const updatePackage = (currentVersion, newVersion, currentBuild, newBuild) => {
  const files = './package.json';

  const fromString1 = `"version": "${currentVersion}"`;
  const from1 = new RegExp(fromString1, 'g');
  const fromString2 = `"buildNumber": ${currentBuild}`;
  const from2 = new RegExp(fromString2, 'g');

  const to1 = `"version": "${newVersion}"`;
  const to2 = `"buildNumber": ${newBuild}`;
  console.warn(to2);
  const from = [from1, from2];
  const to = [to1, to2];

  const options = {
    files,
    from,
    to,
  };

  replace(options)
    .then(() => console.log('📦 package.json ✅'))
    .catch(() => console.log('🛑 Error Updating 📦 package.json'));
};

const updateConstantFile = (
  currentVersion,
  newVersion,
  currentBuild,
  newBuild,
) => {
  const files = './src/utils/constants.js';

  const fromString1 = `version: '${currentVersion}'`;
  const from1 = new RegExp(fromString1, 'g');
  const fromString2 = `buildNumber: ${currentBuild}`;
  const from2 = new RegExp(fromString2, 'g');

  const to1 = `version: '${newVersion}'`;
  const to2 = `buildNumber: ${newBuild}`;
  console.warn(to2);
  const from = [from1, from2];
  const to = [to1, to2];

  const options = {
    files,
    from,
    to,
  };

  replace(options)
    .then(() => console.log('📦 constant.js ✅'))
    .catch(() => console.log('🛑 Error Updating 📦 constant.js'));
};

const updateAndroid = (currentVersion, newVersion, currentBuild, newBuild) => {
  const files = './android/app/build.gradle';

  const fromString1 = `versionName "${currentVersion}"`;
  const from1 = new RegExp(fromString1, 'g');
  const fromString2 = `versionCode ${currentBuild}`;
  const from2 = new RegExp(fromString2, 'g');

  const to1 = `versionName "${newVersion}"`;
  const to2 = `versionCode ${newBuild}`;

  const from = [from1, from2];
  const to = [to1, to2];

  const options = {
    files,
    from,
    to,
  };

  replace(options)
    .then(() => console.log('🤖 Android ✅'))
    .catch(() => console.log('🛑 Error Updating 🤖 Android => build.gradle'));
};

argsValid();
