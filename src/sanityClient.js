import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "1tsp9brm",
    dataset: "production",
    apiVersion: "2021-06-07",
    useCdn: true,
});

export default client;
