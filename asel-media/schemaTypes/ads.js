

export default {
    name: 'ad',
    title: 'Ad',
    type: 'document',
    fields: [
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Image', value: 'image' },
                    { title: 'GIF', value: 'gif' }
                ],
                layout: 'radio' // Display options as radio buttons
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            hidden: ({ parent }) => parent && parent.type !== 'image' // Hide field if type is not image
        },
        {
            name: 'gif',
            title: 'GIF',
            type: 'file',
            hidden: ({ parent }) => parent && parent.type !== 'gif' // Hide field if type is not gif
        },
        // Add other fields as needed
    ]
}