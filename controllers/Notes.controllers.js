const Notes = require("../models/Notes.models");



const notesController = {
    addNotes: async (req, res) => {
        try {
            const data = await Notes.create(req.body);
            res.json(data);
        } catch (e) {
            console.log(e)
        }
    },
    getNotes: async (req, res) => {
        try {
            const data = await Notes.find();
            res.json(data);
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = notesController;