const express = require('express');
const router = express.Router();
const ticketController = require('../controller/ticketController');

router
  .route('/')
  .get(ticketController.getTickets)
  .post(ticketController.createTicket)
  .patch(ticketController.checkValidData, ticketController.updateTicket);

router.route('/filter').post(ticketController.filterTicket);

router.route('/overview').get(ticketController.overviewData);

router.route('/delete').post(ticketController.deleteTicket);

module.exports = router;
