const express = require("express");
const router = express.Router();
const {
    getTickets,
    createTicket,
    getTicket,
    updateTicket,
    deleteTicket,
} = require("../controllers/ticketContoller");

const noteRouter = require("../routes/noteRoutes");
router.use("/:ticketId/notes", noteRouter);

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, createTicket);

router
    .route("/:id")
    .get(protect, getTicket)
    .put(protect, updateTicket)
    .delete(protect, deleteTicket);
module.exports = router;