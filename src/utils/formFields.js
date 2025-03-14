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
      { label: "Acuity", value: "acuity" }
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


export const editStory = [
  {
    type: "text",
    name: "storyName",
    placeholder: "Story Board Name",
    require: true,
  },
  {
    type: "text",
    name: "Descriptions",
    placeholder: "Descriptions",
    require: true,
  },
  {
    type: "select",
    name: "category",
    placeholder: "Select Category",
    require: true,
    options: [
      { label: "Adventure", value: "adventure" },
      { label: "Horror", value: "horror" },
      { label: "Fantasy", value: "fantasy" },
      { label: "Sci-Fi", value: "sci-fi" },
    ],
  },
];

