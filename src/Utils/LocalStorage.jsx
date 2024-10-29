const employees = [
  {
      id: 1,
      firstName: "Ahmed",
      email: "employee1@example.com",
      password: "123",
      tasks: [
          {
              active: true,
              newTask: false,
              completed: false,
              failed: false,
              title: "Task 1",
              description: "Complete the report by the end of the day",
              date: "2024-10-20",
              category: "Reports",
          },
          {
              active: false,
              newTask: true,
              completed: false,
              failed: false,
              title: "Task 2",
              description: "Prepare for team meeting",
              date: "2024-10-21",
              category: "Meetings",
          },
          {
              active: true,
              newTask: false,
              completed: true,
              failed: false,
              title: "Task 3",
              description: "Update client information",
              date: "2024-10-22",
              category: "Data Entry",
          },
      ],
      taskNumbers: {
          active: 2,
          newTask: 1,
          completed: 1,
          failed: 0,
      },
  },
  {
      id: 2,
      firstName: "Ali",
      email: "employee2@example.com",
      password: "123",
      tasks: [
          {
              active: true,
              newTask: true,
              completed: false,
              failed: false,
              title: "Task 1",
              description: "Finish project documentation",
              date: "2024-10-23",
              category: "Documentation",
          },
          {
              active: true,
              newTask: false,
              completed: true,
              failed: false,
              title: "Task 2",
              description: "Test the new software build",
              date: "2024-10-24",
              category: "Testing",
          },
      ],
      taskNumbers: {
          active: 2,
          newTask: 1,
          completed: 1,
          failed: 0,
      },
  },
  {
      id: 3,
      firstName: "Sara",
      email: "employee3@example.com",
      password: "123",
      tasks: [
          {
              active: false,
              newTask: true,
              completed: false,
              failed: true,
              title: "Task 1",
              description: "Fix bug in code",
              date: "2024-10-25",
              category: "Development",
          },
      ],
      taskNumbers: {
          active: 0,
          newTask: 1,
          completed: 0,
          failed: 1,
      },
  },
  {
      id: 4,
      firstName: "Ayesha",
      email: "employee4@example.com",
      password: "123",
      tasks: [
          {
              active: true,
              newTask: true,
              completed: false,
              failed: false,
              title: "Task 1",
              description: "Research competitor products",
              date: "2024-10-26",
              category: "Research",
          },
          {
              active: true,
              newTask: false,
              completed: false,
              failed: true,
              title: "Task 2",
              description: "Prepare sales pitch",
              date: "2024-10-27",
              category: "Sales",
          },
          {
              active: false,
              newTask: true,
              completed: false,
              failed: false,
              title: "Task 3",
              description: "Create marketing plan",
              date: "2024-10-28",
              category: "Marketing",
          },
      ],
      taskNumbers: {
          active: 2,
          newTask: 2,
          completed: 0,
          failed: 1,
      },
  },
  {
      id: 5,
      firstName: "Bilal",
      email: "employee5@example.com",
      password: "123",
      tasks: [
          {
              active: true,
              newTask: false,
              completed: false,
              failed: false,
              title: "Task 1",
              description: "Analyze customer feedback",
              date: "2024-10-29",
              category: "Analysis",
          },
          {
              active: true,
              newTask: true,
              completed: false,
              failed: false,
              title: "Task 2",
              description: "Improve UX design",
              date: "2024-10-30",
              category: "Design",
          },
      ],
      taskNumbers: {
          active: 2,
          newTask: 1,
          completed: 0,
          failed: 0,
      },
  },
];


  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123",
    },
  ];
  

  export const setLocalStorage = () =>{
    //JSON.stringify is used to convert object into string format.
    //setItem is used to store data in local storage.
            localStorage.setItem('employees', JSON.stringify(employees));
            localStorage.setItem('admin', JSON.stringify(admin));
  }
  
  export const getLocalStorage = () =>{
    //JSON.parse is used .
    //getItem is used to get data from local storage.
    const employees =JSON.parse(localStorage.getItem('employees'))
    const admin =JSON.parse(localStorage.getItem('admin'))

    return ({employees, admin})
  }