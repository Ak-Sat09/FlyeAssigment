const assignmentModel = require('../models/assigmentModel.js');

const editAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const assignment = await assignmentModel.findByIdAndUpdate(id, { content }, { new: true });

    if (!assignment) {
      return res.status(404).json({ error: 'Assignment not found' });
    }

    res.status(200).json({ message: 'Assignment edited successfully', assignment });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const checkAssignment = async (req, res) => {
  try {
    const { id } = req.params;

    const assignment = await assignmentModel.findById(id);

    if (!assignment) {
      return res.status(404).json({ error: 'Assignment not found' });
    }

    res.status(200).json({ assignment });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const gradeAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade } = req.body;

    const assignment = await assignmentModel.findByIdAndUpdate(id, { grade }, { new: true });

    if (!assignment) {
      return res.status(404).json({ error: 'Assignment not found' });
    }

    res.status(200).json({ message: 'Assignment graded successfully', assignment });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const regradeAssignment = async (req, res) => {
  try {
    const { id } = req.params;

    // Logic for regrading the assignment
    // This can be customized based on your requirements

    const assignment = await assignmentModel.findById(id);

    if (!assignment) {
      return res.status(404).json({ error: 'Assignment not found' });
    }

    res.status(200).json({ message: 'Assignment regraded successfully', assignment });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { editAssignment, checkAssignment, gradeAssignment, regradeAssignment };
