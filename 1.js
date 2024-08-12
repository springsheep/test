var child_process = require("child_process");

const argv = process.argv;

const msg = argv[2];
var cmd = `git init  && git add . && git commit -m ${msg} && git remote rm origin && git remote add origin https://github.com/springsheep/test.git && git push -u origin main`;
child_process.exec(cmd, function (error, stdout, stderr) {
  console.log("error:" + error);
  console.log("stdout:" + stdout);
  console.log("stderr:" + stderr);
});
