const users = [
  { name: "User1", friends: ["Friend1", "Friend2", "Friend3"] },
  { name: "User2", friends: ["Friend2", "Friend4", "Friend5"] },
  { name: "User3", friends: ["Friend1", "Friend3", "Friend5"] },
];

const targetFriendName = "Friend2";

const usersWithTargetFriend = users.reduce((accumulator, user) => {
  if (user.friends.includes(targetFriendName)) {
    accumulator.push(user.name);
  }
  return accumulator;
}, []);

console.log(usersWithTargetFriend);
