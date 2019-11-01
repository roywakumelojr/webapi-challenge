const express = require('express');
const router = express.Router();
const actionData = require('./data/helpers/actionModel');

// Request for all actions //
router.get('/action/', (req, res) => {
    actionData.get()
    .then(action => {
        res.status(200).json(action);
    })
    .catch(error => {
        res.status(500).json({ error: "There was an error retrieving the requested action step" });
    });    
});

// Adding a new action //
router.post('/action/', (req, res) => {
    actionData.insert(req.body)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error adding the requested information" });
    });    
});

// Updating an existing action //
router.put('/action/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    actionData.update(id, updates)
    .then(updated => {
    if (updated) {
      res
      .status(200)
      .json(updated)
      .end();
    } else {
      res.status(404).json({
      message: "The action with the specified ID does not exist."
      });
    }
    })
    .catch(error => {
    res
      .status(500)
      .json({ error: "The requested update could not be processed." });
    });    
});

// Removing a specific action //
router.delete('/action/:id/', (req, res) => {
    const id = req.params.id;
    actionData.remove(id)
    .then(deleteById => {
      res.status(200).json({ Message: "The request was successfully precessed" });
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error deleting the requested action step" });
    });    
});

module.exports = router;