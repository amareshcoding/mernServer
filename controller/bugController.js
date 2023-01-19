import Bug from '../models/bugModel.js';

const addBug = async (req, res) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).send(bug);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getBugs = async (req, res) => {
  try {
    const { type } = req.query;
    const bug = await Bug.find({ type });
    res.status(200).send(bug);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
const editBug = async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const bug = await Bug.findByIdAndUpdate(id, changes, { new: true });
    res.status(200).send(bug);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
const deleteBugs = async (req, res) => {
  try {
    const { id } = req.params;
    const bug = await Bug.findByIdAndDelete(id);
    res.status(200).send('bug deleted successfully');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export { addBug, getBugs, editBug, deleteBugs };
