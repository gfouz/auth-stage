## What will you learn with auth-stage project?

In this project, we will explore everything we need to know about Server Actions. If you’re not already familiar with Server Actions, here’s a simple description. Server Actions are a newly introduced feature in Next.js 13 that enables us to directly mutate data on the server from the frontend. The introduction of Server Actions eliminates the need for an additional API layer, simplifying the data mutation process.


Let us take things to the next level and build a nextJs application that will involve storing data in a database. For the data access layer, we will use Prisma ORM with a PostgreSQL database. So, without further delay, let’s dive into this project and explore Server and Client Actions in Next.js, with a life real example that also involves the following libraries: next-auth, react-hook-form, react-query, zod, Chakra and others, this project shows how to use these libraries and the nextjs AppDir.

## Data Fetching, Caching, and Revalidating

## Server Components and Route Handlers

[Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#server-actions) are a feature in Next.js, built on top of React Actions. They enable server-side data mutations, reduced client-side JavaScript, and progressively enhanced forms. They can be defined inside Server Components and/or called from Client Components:

Since Server Components render on the server, you don't need to call a Route Handler from a Server Component to fetch data. Instead, you can fetch the data directly inside the Server Component.
[See the Route Handler documentation for examples.](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

## Fetching Data on the Server with fetch

Next.js extends the native fetch Web API to allow you to configure the caching and revalidating behavior for each fetch request on the server. React extends fetch to automatically memoize fetch requests while rendering a React component tree.

You can use fetch with async/await in [Server Components](https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md), [in Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), [and in Server Actions.](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations)




