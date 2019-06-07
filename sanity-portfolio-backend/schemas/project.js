export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string'
        },
    {
        name: 'mainImage',
        title: 'Project Screenshot',
        type: 'image',
        options: {
          hotspot: true
        },
    },
    {
        name: 'description',
        title: 'Description',
        type: 'text'
        },
    {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'}
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}]
          },
    ],

    preview: {
        select: {
          title: 'title',
          author: 'author.name',
          media: 'mainImage'
        },
        prepare(selection) {
          const {author} = selection
          return Object.assign({}, selection, {
            subtitle: author && `by ${author}`
          })
        }
      }
    }