//to-do: need to test
const mailer = require('./index');
const userList = [
  { id: 1, firstname: 'Tarik', name: 'Tarik Adnan Moon', email: 'abrar@covalent.ai' }
];

mailer.sendMail(
    userList,
    "Newsletter for token holders",
    "test_101",
    "An awesome text here!",
    "admin@covalent.ai",
    "covalent.ai",
    "reply@covalentai.com",
    ["airdrop-3"]
);
