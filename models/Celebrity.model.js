//  Add your code here
const mongoose	= require("mongoose")

const celebritySchema = mongoose.Schema({

    name: {
        type:       String,
        required:   true
    },

    occupation: {
        type:       String,
        required:   true
    },

    catchPhrase: {
        type:       String,
        required:   true
    }

},   {timestamps:true})


//exportacion

const Celebrity = mongoose.model("Celebrity", celebritySchema)

model.exports = Celebrity