const express = require('express');
const User = require('../../models').User;
const passport = require('../../passport');
const router = express.Router();
const { jwt: { AccessToken } } = require('twilio');

const VideoGrant = AccessToken.VideoGrant;

// Max. period that a Participant is allowed to be in a Room (currently 14400 seconds or 4 hours)
const MAX_ALLOWED_SESSION_DURATION = 14400;

router.get('/token', function (request, response) {
    const { identity } = request.query;

    // Create an access token which we will sign and return to the client,
    // containing the grant we just created.
    const token = new AccessToken(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_API_KEY,
        process.env.TWILIO_API_SECRET,
        { ttl: MAX_ALLOWED_SESSION_DURATION }
    );

    // Assign the generated identity to the token.
    token.identity = identity;

    // Grant the access token Twilio Video capabilities.
    const grant = new VideoGrant('new-room');
    token.addGrant(grant);

    // Serialize the token to a JWT string.
    response.json({ token: token.toJwt() });
});

module.exports = router;
