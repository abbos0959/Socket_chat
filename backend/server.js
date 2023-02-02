require("dotenv").config({ path: __dirname + "/.env" });

const app = require("./middleware/app");

const PORT = process.env.PORT || 3001;
console.log(process.env.PORT);
console.log(process.env.PORT);

app.listen(PORT, () => {
   console.log("server ishladi");
});
