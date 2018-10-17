//to-do: need to test
const mailer = require('./index');
const userList = [
  { id: 1, firstname: 'Abrar', name: 'Abrar Shariar', email: 'shariarabrar@gmail.com' },
  { id: 2, firstname: 'Abrar', name: 'Abrar Shariar Galib', email: 'abrar@covalent.ai' },
  { id: 3, firstname: 'Tarik', name: 'Tarik Adnan Moon', email: 'tarik@covalent.ai' },
  { id: 4, firstname: 'Da Eun', name: 'Da Eun', email: 'daeun@covalent.ai' },
  { id: 5, firstname: 'Wenyi', name: 'Wenyi', email: 'wenyi@covalent.ai' }
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
