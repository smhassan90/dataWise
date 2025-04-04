export const signInFields = [
  {
    type: "text",
    name: "firstName",
    placeholder: "Dominik Doudny",
    required: true,
    label: "FIRST NAME",
  },
  {
    type: "text",
    name: "lastName",
    placeholder: "Dominik Doudny",
    required: true,
    label: "LAST NAME",
  },
  {
    type: "email",
    name: "email",
    placeholder: "comvi-dashboard@gmail.com",
    required: true,
    label: "EMAIL",
  },
  {
    type: "text",
    name: "company",
    placeholder: "Fortune Tower",
    required: true,
    label: "COMPANY",
  },
  {
    type: "password",
    name: "password",
    placeholder: "********",
    required: true,
    label: "PASSWORD",
  },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "********",
    required: true,
    label: "CONFIRM PASSWORD",
  },
];


export const loginFields = [
  {
    type: "email",
    name: "email",
    placeholder: "comvi-dashboard@gmail.com",
    required: true,
    label: "EMAIL",
  },
  {
    type: "password",
    name: "password",
    placeholder: "********",
    required: true,
    label: "PASSWORD",
  },
]

export const integrationFields = [
  {
    type: "text",
    name: "integrationName",
    placeholder: "Enter Your Integration Name",
    required: true,
    label: "INTEGRATION NAME",
  },
  {
    type: "select",
    name: "platformName",
    placeholder: "Select DataBase",
    require: true,
    options: [
      { label: "MySql", value: "mysql" },
      { label: "Oracle", value: "oracle" }
    ],
  },
  {
    type: "text",
    name: "url",
    placeholder: "Enter Your Database URL",
    required: true,
    label: "URL",
  },
  {
    type: "text",
    name: "username",
    placeholder: "Enter Your Database Username",
    required: true,
    label: "USER NAME",
  },
  {
    type: "password",
    name: "password",
    placeholder: "********",
    required: true,
    label: "PASSWORD",
  }
];

export const editMetaIntegrationFields = [
  {
    label: "Table Name",
    type: "select",
    name: "tableName",
    placeholder: "Select Table Name",
    require: true,
  },
  {
    label: "Table Description",
    type: "text",
    name: "description",
    placeholder: "Enter Table Description",
    require: true,
  },
];


export const saveStoryFields = [
  {
    type: "text",
    name: "storyName",
    placeholder: "Enter Story Board Name",
    require: true,
  },
  {
    type: "text",
    name: "query",
    placeholder: "Enter Database Query",
    require: true,
  },
  {
    type: "text",
    name: "resultType",
    placeholder: "Enter Result Type",
    require: true,
  },
];

export const addStoryBoard = [
  {
    type: "text",
    name: "storyBoardName",
    placeholder: "Enter Story Board Name",
    require: true,
    label: "Story Board Name",
  },
  {
    type: "select",
    name: "integrationId",
    placeholder: "Select Integration",
    require: true,
    label: "Select Integration",
  }
];

export const addStoryBoardForUser = [
  {
    type: "select",
    name: "StoryBoardId",
    placeholder: "Select Story Board",
    require: true,
  }
];

export const editStoryBoardFields = [
  {
    type: "text",
    name: "storyBoardName",
    placeholder: "Enter Story Board Name",
    require: true,
    label:"Story Board Name"
  },
  {
    type: "select",
    name: "status",
    placeholder: "Select Status",
    require: true,
    options: [
      { label: "InActive", value: "2" },
      { label: "Active", value: "1" }
    ],
    label:"Enter Status"
  },
];


export const editEmployeeQuotaFields = [
  {
    type: "number",
    name: "level",
    placeholder: "Enter Employee Level (1-5)",
    require: true,
    label: "Level",
  },
  {
    type: "number",
    name: "quota",
    placeholder: "Enter Employee Quota",
    require: false,
    label: "Quota",
  }
];

export const employeeFields = [
  {
    type: "text",
    name: "firstName",
    placeholder: "Enter First Name",
    require: true,
    label: "First Name",
  },
  {
    type: "text",
    name: "lastName",
    placeholder: "Enter Last Name",
    require: true,
    label: "LastName",
  },
  {
    type: "email",
    name: "email",
    placeholder: "comvi-dashboard@gmail.com",
    required: true,
    label: "Email",
  },
  {
    type: "password",
    name: "password",
    placeholder: "********",
    required: true,
    label: "PASSWORD",
  },
{
  label: "Employee Level",
  type: "select",
  name: "level",
  placeholder: "level",
  require: true,
  options: [
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" }
  ],
},
];

export const settings = [
  {
    type: "text",
    name: "firstName",
    placeholder: "Enter First Name",
    label: "First Name",
    required: true,
  },
  {
    type: "text",
    name: "lastName",
    placeholder: "Enter Last Name",
    label: "Last Name",
    required: true,
  },
  {
    type: "email",
    name: "email",
    placeholder: "comvi-dashboard@gmail.com",
    label: "Email",
    required: true,
  },
];

export const changePassword=[
  {
      type: "password",
      name: "oldpassword",
      placeholder: "Enter your Old Passsword",
      required: true,
      label: "OLD PASSWORD",  
    },
    {
      type: "password",
      name: "password",
      placeholder: "Enter your Old Passsword",
      required: true,
      label: "PASSWORD",  
    },
    {
    type: "password",
    name: "confirmPassword",
    placeholder: "********",
    required: true,
    label: "CONFIRM PASSWORD",
  },

]

