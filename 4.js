const users = [
    { name: 'User1', skills: ['JavaScript', 'HTML', 'CSS'] },
    { name: 'User2', skills: ['Python', 'SQL'] },
    { name: 'User3', skills: ['JavaScript', 'React'] },
  ];
  
  const uniqueSortedSkills = users.reduce((accumulator, user) => {
    user.skills.forEach(skill => {
      if (!accumulator.includes(skill)) {
        accumulator.push(skill);
      }
    });
    return accumulator;
  }, []).sort();
  
  console.log(uniqueSortedSkills);
  