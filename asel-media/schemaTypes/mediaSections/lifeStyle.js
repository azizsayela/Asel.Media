export default {
    name: 'lifeStyle',
    title: 'Life style Articles',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
            validation: Rule => Rule.required(),
            of: [{ type: 'block' }], // This allows for rich text editing
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true, // Enables image cropping
            },
        },
        {
            name: 'publicationDate',
            title: 'Publication Date',
            type: 'date',
            validation: Rule => Rule.required(),
        },
    ],
};