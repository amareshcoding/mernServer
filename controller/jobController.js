import Job from '../models/jobModel.js';

const addJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).send(job);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const { name, location, contract } = req.query;
    let job;
    if (name) {
      job = await Job.find({ name: { $regex: `${name}` } });
    } else if (location) {
      job = await Job.find({ location });
    } else if (contract) {
      job = await Job.find({ contract });
    } else {
      job = await Job.find();
    }
    res.status(200).send(job);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
// - Company name
// - Position
// - Contract
// - Location
const editJobs = async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const job = await Job.findByIdAndUpdate(id, changes, { new: true });
    res.status(200).send(job);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteJobs = async (req, res) => {
  try {
    const { id } = req.params;
    await Job.findByIdAndDelete(id);
    res.status(200).send('job deleted successfully');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export { addJob, getJobs, editJobs, deleteJobs };
