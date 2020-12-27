/*
 * This file contains the functions that are executed when a webhook comes from github.
 * The convention used for the functions' names is 'eventAction'.
*/

const path = require('path');
const cp = require('child_process');
const { stderr } = require('process');

/*
 * Called when a new release has been published on GitHub
*/
const releasePublished = (author, branch, version, title) => {
    console.log('>')
    console.log('New release has been published');
    console.log(new Date());
    console.log({ author, branch, version, title });

    // Deploys the code either to production or test
}

/*
 * Called when a user gives a star to the repo
*/
const starCreated = async () => {
    console.log('>')
    console.log('New star');

    const build = cp.spawn('sh src/scripts/run_dev.sh', { shell: true });

    console.log(build.pid);

    build.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    build.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
}

module.exports = { starCreated, releasePublished }