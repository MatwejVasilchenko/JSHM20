const users = [
    { name: 'User1', friends: ['Friend1', 'Friend2', 'Friend3'] },
    { name: 'User2', friends: ['Friend2', 'Friend4', 'Friend5'] },
    { name: 'User3', friends: ['Friend1', 'Friend3', 'Friend5'] },
  ];
  
  const sortedNames = users.sort((userA, userB) => userA.friends.length - userB.friends.length).map(user => user.name);
  
  console.log(sortedNames);
  