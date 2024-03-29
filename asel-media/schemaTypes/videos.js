export default {
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the video',
            required: true
        },
        {
            name: 'videoFile',
            title: 'Video File',
            type: 'file',
            description: 'Upload the video file',
            required: true
        },
        {
            name: 'publicationDate',
            title: 'Publication Date',
            type: 'date',
            description: 'Date when the video was published',
            required: true
        }
    ]
}