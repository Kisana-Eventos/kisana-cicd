/*
 * Route GitHub webhooks.
*/

const { starCreated, releasePublished } = require('../handlers/github');

const route = (req, res) => {
    // Current implementation lacks security using a secret on webhooks

    // Handles the POST request made by the webhook (for details check github docs)
    const event = req.header('X-GitHub-Event');

    // Each action will execute a certain function from the handlers
    if (event === 'release') {
        if (req.body.action === 'published') {
            releasePublished(
                req.body.release.author.login,
                req.body.release.target_commitish,
                req.body.release.tag_name,
                req.body.release.name
            );
        }
    }
    else if (event == 'star') {
        switch (req.body.action) {
            case 'created':
                starCreated();
                break;
        }
    }

    res.end();
}

module.exports = route;