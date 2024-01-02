const workExpSchema = {
  name: 'workExp',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'contribution',
      title: 'Contribution',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Comapny',
      type: 'string',
    },
  ],
};

export default workExpSchema;
