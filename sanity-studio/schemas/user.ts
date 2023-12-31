export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {title: 'Id', name: 'id', type: 'string'},
    {
      title: 'Username',
      name: 'username',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {title: 'Owner', name: 'owner', type: 'boolean'},
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'post'}]}],
      validation: (Rule: any) => Rule.unique(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    },
  },
}
