export default {
    name: 'photoGallery',
    title: 'ASEL Photo Gallery',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the photo',
            validation: Rule => Rule.required(),
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            description: 'Date of the photo',
            validation: Rule => Rule.required(),
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true,
            },
        },
    ]
}