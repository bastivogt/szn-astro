import { defineCollection, reference, z } from "astro:content";

const trainerCollection = defineCollection({
    type: "content",
    schema: ({image}) => z.object({
        firstname: z.string(),
        lastname: z.string(),
        img: image(),
        published: z.boolean()
    })
});

const courseCollection = defineCollection({
    type: "content",
    schema: ({image}) => z.object({
        title: z.string(),
        trainer: z.array(reference("trainer")).default([]),
        img: image(),
        times: z.array(z.string()),
        published: z.boolean(),
        excerpt: z.string()
    })
});


export const collections = {
    "trainer": trainerCollection,
    "courses": courseCollection
}