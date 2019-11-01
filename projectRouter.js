const express = require('express');
const router = express.Router();
const projectData = require('./data/helpers/projectModel');

// Request for all projects //
router.get('/project/', (req, res) => {
    projectData.get()
    .then(project => {
        res.status(200).json(project);
    })
    .catch(error => {
        res.status(500).json({ error: "There was an error retrieving the requested project" });
    });    
});

// Adding a new project //
router.post('/project/', (req, res) => {
    projectData.insert(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error adding the requested information" });
    });    
});

// Updating an existing project //
router.put('/project/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    projectData.update(id, updates)
    .then(updated => {
    if (updated) {
      res
      .status(200)
      .json(updated)
      .end();
    } else {
      res.status(404).json({
      message: "The project with the specified ID does not exist."
      });
    }
    })
    .catch(error => {
    res
      .status(500)
      .json({ error: "The requested update could not be processed." });
    });    
});

// Removing a specific project //
router.delete('/project/:id/', (req, res) => {
    const id = req.params.id;
    projectData.remove(id)
    .then(deleteById => {
      res.status(200).json({ Message: "The request was successfully precessed" });
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error deleting the requested project" });
    });    
});

module.exports = router;