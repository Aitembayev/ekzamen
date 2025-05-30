const Event = require('../models/Event');

exports.getAllEvents = () => Event.find();
exports.createEvent = (data) => Event.create(data);
exports.getEventById = (id) => Event.findById(id);
exports.updateEvent = (id, data) => Event.findByIdAndUpdate(id, data, { new: true });
exports.deleteEvent = (id) => Event.findByIdAndDelete(id);
