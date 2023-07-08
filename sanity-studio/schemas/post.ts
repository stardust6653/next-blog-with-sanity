export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'content', title: 'Content', type: 'string'},
    {name: 'imgUrl', title: 'ImgUrl', type: 'string'},
    {name: 'description', title: 'Description', type: 'string'},
    {name: 'date', title: 'Date', type: 'string'},
    {name: 'viewCount', title: 'ViewCount', type: 'number'},
    {
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule: any) => Rule.unique(),
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            {
              title: 'Author',
              name: 'author',
              type: 'reference',
              to: [{type: 'user'}],
            },
            {
              title: 'Comment',
              name: 'comment',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
