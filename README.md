# Problem

- Although Examtime can not be run or used independently, it is essentially a standalone product.
- There have been multiple instances in which changes in Examtime have caused issues and bugs in Termtime, even though for the most part, they are loosely coupled.
- Although Termtime and Examtime share some frontend libraries, i.e tables, config, timeHelper, semProblems, etc, they are in effect separate pages and statefully individual.
- Referring to Termtime and Examtime as their own individual products, each is required to develop and release at different times.
- The backend code for Semestry is currently very tightly coupled between the two products.  This is in the process of being updated.

- Both products use the same backend and database
- Both currently use the same CI/CD process
- All code is currently maintained under the same src folder / package.json
- Each product is developed and maintained by a separate dev team 

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
 

# Built With - Multi Repo

This project is using the following technologies:


- Languages
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>
- Frameworks
  - <a href="https://nextjs.org/">Next.js</a>
  - <a href="https://react.dev/">React</a>

## Experimented With & Discarded - Mono Repo

- Tools
  - <a href="https://pnpm.io/workspaces">PNPM Workspaces</a>
  - <a href="https://github.com/changesets/changesets">Changesets</a>
  - <a href="https://nx.dev/">NX</a>
  - <a href="https://turbo.build/">Turbo Repo</a>
  - <a href="https://rushjs.io/">Rush JS</a>

## Other Research

- Disregarded based on current project scope and requirements - **Micro-Frontends**
 

# Conclusion
- Although this solution seems to fit well with requirements, there is much discussion to be had before any firm decisions can be made.

# Link to Sub Repository

https://github.com/theowright2017/sub-14th

###################################################################################



  




<!-- GETTING STARTED -->

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



The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.




