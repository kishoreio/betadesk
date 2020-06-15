const ticketModel = require('../models/ticketModel');
const countStatus = require('../utils/countOverview').countStatus;
const countDepartment = require('../utils/countOverview').countDepartment;
const getAgentName = require('../utils/countOverview').getAgentName;

exports.createTicket = async (req, res) => {
  try {
    const ticketData = await ticketModel.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        ticketData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTickets = async (req, res) => {
  let query = req.query.id;
  if (!query) {
    query = {};
  } else {
    query = { ticketNo: query };
  }
  try {
    const ticketData = await ticketModel.find(query);
    res.status(200).json({
      success: 'success',
      data: {
        ticketData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateTicket = async (req, res) => {
  let query = null;
  if (req.body.type === 'discussion') {
    query = { discussions: req.body.data };
  } else if (req.body.type === 'properties') {
    query = req.body.data;
  }
  try {
    const discussion = await ticketModel.findOneAndUpdate(
      { ticketNo: req.body.id },
      query,
      { new: true }
    );
    res.status(200).json({
      data: {
        discussion,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const deleteData = await ticketModel.findOneAndDelete(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        deleteData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.filterTicket = async (req, res) => {
  try {
    const filterData = await ticketModel.find(req.body);
    res.status(200).json({
      data: {
        filterData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.overviewData = async (req, res) => {
  try {
    const data = ticketModel.find();
    const result = await data.select('id priority status department agent');
    const status = countStatus(result);
    const department = countDepartment(result);
    const agent = getAgentName(result);
    res.status(200).json({
      data: {
        status,
        department,
        agent,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.checkValidData = async (req, res, next) => {
  if (req.body.data.length === 0) {
    return res.status(404).json({
      status: 'fail',
      message: 'Required data',
    });
  }
  next();
};
