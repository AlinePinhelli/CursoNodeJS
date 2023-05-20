import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alinepinhelli:123@cluster0.hinwgqp.mongodb.net/?");

let db = mongoose.connection;

export default db;
