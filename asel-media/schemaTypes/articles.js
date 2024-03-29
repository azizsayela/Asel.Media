export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
            validation: Rule => Rule.required()
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
            validation: Rule => Rule.required()
        },
        {
            name: 'section',
            title: 'Section Name',
            type: 'string',
            validation: Rule => Rule.required(),
            options: {
                list: [
                    { title: "Home", value: "Home" },
                    { title: "L'Info en continu", value: "L'Info en continu" },
                    { title: "L'Instant ASEL", value: "L'Instant ASEL" },
                    { title: "Diaspora", value: "Diaspora" },
                    { title: "Tech & Co", value: "Tech & Co" },
                    { title: "Sports", value: "Sports" },
                    { title: "Lifestyle", value: "Lifestyle" }
                ],
                layout: 'radio', // Display as radio buttons
                direction: 'horizontal',
            },
            description: 'Select the Section Name for this post',
        },
    ]
}