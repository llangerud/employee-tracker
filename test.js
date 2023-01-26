let allEmps = [
    {
      id: 1,
      first_name: 'robert',
      last_name: 'robertson',
      role_id: 3,
      manager_id: 1
    },
    {
      id: 2,
      first_name: 'karen',
      last_name: 'karrenton',
      role_id: 2,
      manager_id: null
    },
    {
      id: 3,
      first_name: 'kyle',
      last_name: 'kylewright',
      role_id: 1,
      manager_id: 1
    },
    {
      id: 4,
      first_name: 'gary',
      last_name: 'garyton',
      role_id: 1,
      manager_id: 3
    }
  ];

  let choices = allEmps.map(emp => emp.first_name + emp.last_name); 
  console.log(choices);