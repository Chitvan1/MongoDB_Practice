const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chats = [
  {
    from: "Neha",
    to: "Preeti",
    msg: "Send me notes for the exam",
    created_at: new Date(),
  },
  {
    from: "Rohit",
    to: "Mohit",
    msg: "tech me JS callbacks",
    created_at: new Date(),
  },
  {
    from: "Amit",
    to: "Sumit",
    msg: "all the best",
    created_at: new Date(),
  },
  {
    from: "Anita",
    to: "Ramesh",
    msg: "Bring some fruits at home",
    created_at: new Date(),
  },
  {
    from: "Palak",
    to: "Akash",
    msg: "Congratulations for your engagement",
    created_at: new Date(),
  },
];

let chats1 = [
  {
    from: "Amit",
    to: "Palak",
    msg: "Love you 3000",
    created_at: new Date(),
  },
];

// Chat.insertMany(chats);
// Chat.insertMany(chats1);
