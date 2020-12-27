/*
 * This file contains the functions that are executed when a webhook comes from github.
 * The convention used for the functions' names is 'eventAction'.
*/

const path = require('path');
const cp = require('child_process');
const { stderr } = require('process');

const releasePublished = (author, branch, version, title) => {
    console.log('>')
    console.log('New release has been published');
    console.log(new Date());
    console.log({ author, branch, version, title });

    // Deploy


}

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

const starDeleted = () => {
    console.log('>')
    console.log('Star deleted');
}

module.exports = { starCreated, starDeleted, releasePublished }