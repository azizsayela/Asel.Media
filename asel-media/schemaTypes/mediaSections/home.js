export default {
    name: "home",
    title: "Home Articles",
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
        {
            name: 'layoutType',
            title: 'Layout Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Top', value: 'top' },
                    { title: 'Bottom', value: 'bottom' },
                ],
                layout: 'radio', // Display as radio buttons
            },
            description:
                'Specify if this article should be displayed at the top or bottom of the main section',
        },
    ],
};