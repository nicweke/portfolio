export default {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" }
        },
        {
            name: "demo",
            title: "Demo Link",
            type: "url",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                }
            ]
        },

        {
            name: "github",
            title: "Github Link",
            type: "url",
        },

        {
            name: 'technologies',
            title: 'Technology',
            type: 'array',
            of: [
                {
                    type: "reference",
                    to: [{ type: 'technologies' }],
                }
            ]

        },



    ]

}



// image: string
// technologies: Technology[]
// name: string
// slug: string
// github: string
// url: string
// content: Content[]