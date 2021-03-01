const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routes/gallery.route');

// configs
dotenv.config({ path: './server/config/config.env' });

// shows static files react index.html
app.use(express.static(path.join(__dirname, '../public')));

// routes
app.use('/', userRouter);


// MongoDB and Server Connections
const PORT = process.env.PORT || 4012;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(app.listen(PORT, () => console.log(`Listening on PORT ${PORT} 👍!`)))
  .catch(() => console.error('Something went wrong!!'));

