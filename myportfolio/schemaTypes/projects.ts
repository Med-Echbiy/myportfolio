export default {
  title: 'Projects',
  name: 'projects',
  type: 'document',
  fields: [
    {
      name: 'screenShot',
      title: 'Project screenShot',
      type: 'image',
    },
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
    },
    {
      title: 'Project Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'techonlogies',
      name: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'Website Url',
      name: 'websiteUrl',
      type: 'url',
    },
    {
      title: 'Github Url',
      name: 'githubUrl',
      type: 'url',
    },
  ],
}
