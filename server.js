require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const Student = require('./models/Student');
const studentRoutes = require('./routes/students');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);

// Sync DB
sequelize.sync()
  .then(() => console.log('MySQL connected and models synced ✅'))
  .catch(err => console.error('MySQL Error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
