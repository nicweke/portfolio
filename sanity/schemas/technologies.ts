export default {
    name: "technologies",
    title: "Technology",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
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

    ]

}



// image: string
// technologies: Technology[]
// name: string
// slug: string
// github: string
// url: string
// content: Content[]