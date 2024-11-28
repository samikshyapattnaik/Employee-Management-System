// localStorage.clear();
const  employees= [
      {
        "id": 1,
        "firstname": "Amit",
        "email": "e1@e.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Prepare Monthly Report",
            "description": "Compile and submit the monthly performance report.",
            "date": "2024-10-25",
            "category": "Reporting"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Team Meeting",
            "description": "Attend the weekly team meeting.",
            "date": "2024-10-24",
            "category": "Meetings"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "title": "Client Follow-up",
            "description": "Follow up with clients for feedback.",
            "date": "2024-10-26",
            "category": "Client Relations"
          }
        ],
        "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 2,
        "firstname": "Priya",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "System Upgrade",
            "description": "Upgrade the company’s systems to the latest version.",
            "date": "2024-10-27",
            "category": "IT"
          },
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Documentation",
            "description": "Update technical documentation for the software project.",
            "date": "2024-10-28",
            "category": "Technical"
          },
          {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "title": "Bug Fixing",
            "description": "Fix bugs reported by the QA team.",
            "date": "2024-10-22",
            "category": "Development"
          }
        ],
        "taskNumbers": {
          "active": 2,
          "newTask": 2,
          "completed": 0,
          "failed": 1
        }
      },
      {
        "id": 3,
        "firstname": "Vikram",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Market Research",
            "description": "Conduct market research for the upcoming product launch.",
            "date": "2024-10-29",
            "category": "Marketing"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Content Creation",
            "description": "Create content for the company blog.",
            "date": "2024-10-23",
            "category": "Content"
          },
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "SEO Optimization",
            "description": "Optimize the website for search engines.",
            "date": "2024-10-30",
            "category": "SEO"
          }
        ],
        "taskNumbers": {
          "active": 2,
          "newTask": 2,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 4,
        "firstname": "Sunita",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Inventory Check",
            "description": "Perform a monthly inventory check.",
            "date": "2024-10-24",
            "category": "Logistics"
          },
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Supplier Meeting",
            "description": "Meet with suppliers to negotiate new contracts.",
            "date": "2024-10-31",
            "category": "Supplier Relations"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "title": "Warehouse Maintenance",
            "description": "Schedule and oversee warehouse maintenance.",
            "date": "2024-11-01",
            "category": "Maintenance"
          }
        ],
        "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 5,
        "firstname": "Anjali",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Financial Audit",
            "description": "Conduct a financial audit for the previous quarter.",
            "date": "2024-11-05",
            "category": "Finance"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Payroll Processing",
            "description": "Process payroll for the current month.",
            "date": "2024-10-20",
            "category": "HR"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "title": "Compliance Review",
            "description": "Review compliance with regulatory standards.",
            "date": "2024-11-10",
            "category": "Compliance"
          }
        ],
        "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        }
      }
    ];
  const admin =[ {
      "id": 1,
      // "firstname": "Rajesh",
      "email": "admin@example.com",
      "password": "123"
    }
  ]
  
  
 export  const setLocalStorage  =() =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

 }
 export  const getLocalStorage  =() =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const  admin = JSON.parse(localStorage.getItem('admin'))
    
    return{employees,admin};
    
 }