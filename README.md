# Problem

- Although Examtime can not be run or used independently, it is essentially a standalone product.
- There have been multiple instances in which changes in Examtime have caused issues and bugs in Termtime, even though for the most part, they are loosely coupled.
- Although Termtime and Examtime share some frontend libraries, i.e tables, config, timeHelper, semProblems, etc, they are in effect separate pages and statefully individual.
- Referring to Termtime and Examtime as their own individual products, each is required to develop and release at different times.
- The backend code for Semestry is currently very tightly coupled between the two products.  This is in the process of being updated.

# What are we trying to solve with this particular approach?

- There is growing demand for Examtime to have it's own processes, separate from Termtime.  However because they reside in the same repository and under the same package.json, there is very little scope to separate processes across the entire software development cycle.
- The goal we are looking to achieve can be split into two main points:
  - Allow for the option of either shared or indvidual processes in all aspects of the cycle as mentioned above, especially development, versioning and release.
  - Allow for more streamlined development in Examtime, mainly around enabling changes in Examtime to be iterated on with no impact whatsoever to Termtime.

# What options are out there and why do they or don't they work?

- From a technical standpoint, our issues arise due to an outdated legacy codebase, not testing across the entire frontend plus a build process that seems to struggle to handle changes.
- Thankfully because of the nature of the application, the features / products are loosely coupled and have statefully separate.

## Monorepo
  ### Pros
  - All features exist under one repository
  - Makes managing dependencies easier
  - Centralised codebase for cross team collaboration, PR reviews,etc

  ### Cons
  - Enforces tight coupling between versions
  - Changes in monorepo package are instantly reflected in host.
  - Not conducive to separate processes for deployment, release, etc between different packages.
  - Introduces complexity in form of external libraries and tooling.  

## Multi repo
  ### Pros
  - Separate repository allows for independence in versioning, dependencies and release.
  - Can be developed in isolation from other packages.

  ### Cons
  - Dependencies can be difficult to manage across multiple repositories.
  - Code sharing becomes more difficult.
  - Multi repo encourages silo'd teams, especially in PR reviews, code styling, design decisions, tech stack, etc.
  - Enforcing standards, policies and consistencies across multiple repos can be difficult.

# And so..?
- The pros and cons are interchangeable, depending on the organisation, teams, management and desired outcome.

# Solution

- Based on the two main problems we are facing and the desired outcome to be achieved as stated above, the solution that fits best is to adopt a multi repo approach.
- This is mostly due to the loose coupling it offers for the development and release process amongst others.

- Owing to the team sizes and relative simplicity of the frontend codebase, I do not foresee any requirement to use external tools or libraries to achieve the outcome.

- Simple steps to follow:
  - Main and Sub are in separate repositories, each with their own package.json.

  Development
  - Check out the main repo into VS Code.
  - Add Sub repo as a folder to the workspace.  This will add Sub as a sibling to Main inside VS Code.
  - Update import in Main, to refer to Sub from its absolute reference i.e '../Sub' as opposed to the npm package 'sub'
  - Develop as normal, Main will now just reference the local version of Sub
 
  Release
  - Once development on Sub is complete for a particular feature, bug, etc, bump version (based on SemVer?), merge and publish to npm.
  - Install relevant Sub version in Main as dependency via npm.
  - Bump Main version and release ( with or without other changes to Main).
 

# Conclusion
- Although this solution seems to fit well with requirements, there is much discussion to be had before any firm decisions can be made.


###################################################################################


## Next Setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
