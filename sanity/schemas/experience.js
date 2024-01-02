const experienceSchema = {
  name: 'exp',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [{ type: 'workExp' }],
    },
  ],
};

export default experienceSchema;
