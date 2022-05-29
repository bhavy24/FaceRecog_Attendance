// connect to cloudinary to store media ie: profile pictures of users and face gallery images

const cloudinary = require("cloudinary").v2
cloudinary.config({
    cloud_name: "dv4idk5sq",
    api_key: "674222374869795",
    api_secret: "PQMlAAYrbsHLMxtUG7HeblX11WI"
})

module.exports = {cloudinary}