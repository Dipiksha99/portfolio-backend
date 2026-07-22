const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    technology: {
        type: String,
        required: true
    },
    
    image: {
    type: String,
    required: true
    },  

    github: {
        type: String,
        required: true
    },

    live: {
        type: String,
        default: "#"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Project", projectSchema);