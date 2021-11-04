exports.getAllNotes = (req, res, next) => {
    const notes = req.app.db.get('notes');
    res.status(200).json(notes);
};

exports.getSpecificNote = (req, res, next) => {
    const note = req.app.db.get('notes').find({id: req.params.id}).value();
    res.send(note);
};

exports.createNote = (req, res, next) => {
    let totalEntries = req.app.db.get('notes').value().length;
    totalEntries = totalEntries === 0 ? 1 : totalEntries + 1;
    try {
        const note = {
            id: totalEntries.toString(),
            title: req.body.title,
            desc: req.body.desc,
            when: new Date().getTime(),
        }
        req.app.db.get('notes').push(note).write();
        res.status(201).json(note);
    } catch (err) {
        res.status(500).send(err);
    }
};
