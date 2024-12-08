const express = require("express");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit")
const app = express();
const userRoutes = require("./routes/userRoutes")
const blogRoutes = require("./routes/blogRoutes")
const swaggerUi = require("swagger-ui-express");
const morgan = require('morgan')
const cors = require("cors")
dotenv.config();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST

require("../config/database");  // load database
app.use(morgan('tiny'))  // print log
app.use(cors())  // Cross-Origin Resource Sharing


// set rate limiting
const createLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 1000,
    message: "Too many requests from this IP, please try again later."
})
app.use(createLimit)  // apply rate limiting 


app.use(express.json());

app.get("/", (req, res) => {
    res.end("Welcome to the Blogging App");
});

// config swagger setup
const swaggerSpecs = require("../config/swaggerConfig");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use("/api/users", userRoutes); // user routes
app.use("/api/blogs", blogRoutes); // blog routes

app.listen(PORT, (err) => {
    if (err) {
        console.log('Server Error')
        console.log(err)
    }
    console.log(`Server start on http://${HOST}:${PORT}`)
})
