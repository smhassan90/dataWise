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
    name: "companyName",
    placeholder: "Fortune Tower",
    required: true,
    label: "COMPANY NAME",
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


export  const loginFields  =[
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


export const addStory = [
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

