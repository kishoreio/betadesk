const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketNo: {
    type: Number,
    required: [true, 'Required a ticket number'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Required a name'],
    trim: true,
  },
  subject: {
    type: String,
    required: [true, 'Required a subject'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'Required a subject'],
    trim: true,
  },
  status: {
    type: String,
    required: [true, 'Required a subject'],
    trim: true,
  },
  priority: {
    type: String,
    required: [true, 'Required a subject'],
    trim: true,
  },
  department: {
    type: String,
    required: [true, 'Required a subject'],
    trim: true,
  },
  agent: {
    type: String,
    required: [true, 'Required a subject'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Required a subject'],
    trim: true,
  },
  createdAt: {
    type: String,
    required: [true, 'Required a Date'],
  },
  discussions: {
    type: Array,
    default: [],
  },
});

const ticketModel = mongoose.model('ticketModel', ticketSchema, 'tickets');

module.exports = ticketModel;
