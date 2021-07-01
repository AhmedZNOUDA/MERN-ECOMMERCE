import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("Admin0806", 10),
    isAdmin: true,
  },
  {
    name: "Ahmed Znouda",
    email: "ahmed.znouda@gmail.com",
    password: bcrypt.hashSync("ayza2380mkdir", 10),
  },

  {
    name: "Rima Makktebi",
    email: "rima@maktebi.com",
    password: bcrypt.hashSync("rima123mekt@bi", 10),
  },
];

export default users;
