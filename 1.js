const users = [
    { name: 'User1', balance: 100 },
    { name: 'User2', balance: 200 },
    { name: 'User3', balance: 300 },
  ];
  const totalBalance = users.reduce((accumulator, user) => accumulator + user.balance, 0);
  
  console.log(totalBalance);
  