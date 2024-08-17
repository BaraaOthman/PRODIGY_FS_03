const express = require('express');
const userRoutes = require('./routes/user.routes');
const errorHandler = require('./middleware/errorhandler');
const useProducts = require('./routes/products.routes')
const useCarts = require('./routes/carts.routes')

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use('/users', userRoutes);
app.use('/products',useProducts)
app.use('/carts',useCarts)

app.use(errorHandler);

const PORT = 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));