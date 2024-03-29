import { getExtension, getImageDimensions } from '@sanity/asset-utils'

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
            hidden: ({ parent }) => parent && parent.type !== 'image',
            validation: Rule => Rule.custom(image => {
                console.info('Image Asset:', image.asset);
                const { width, height } = getImageDimensions(image.asset._ref) || {};
                const requiredWidth = 350; // Set the required width
                const requiredHeight = 750; // Set the required height
                if (width !== requiredWidth || height !== requiredHeight) {
                    return `Image must be exactly ${requiredWidth}x${requiredHeight} pixels. Current dimensions are ${width}x${height}.`;
                }
                return true;
            })
        },
        {
            name: 'gif',
            title: 'GIF',
            type: 'file',
            hidden: ({ parent }) => parent && parent.type !== 'gif' // Hide field if type is not gif
        },
        {
            name: 'orientation',
            title: 'Orientation',
            type: 'string',
            options: {
                list: [
                    { title: 'Vertical', value: 'vertical' },
                    { title: 'Horizontal', value: 'horizontal' },
                    // { title: 'Square', value: 'square' }
                ],
                layout: 'radio' // Display options as radio buttons
            },
            required: true
        },
        {
            name: 'redirectionLink',
            title: 'Redirection Link',
            type: 'url',
            description: 'Link to which the ad should redirect when clicked',
            required: true
        }
    ]
}