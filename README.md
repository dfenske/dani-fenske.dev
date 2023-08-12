# Dani Fenske's Portfolio Website

## Purpose of this site

I listen to [SyntaxFM](https://syntax.fm/), a great podcast about frontend development. A [specific episode](https://syntax.fm/show/326/we-review-resumes-websites-and-online-presence) about resumes and online presence caught my attention. Instead of just having a simple resume, I decided I wanted to showcase my skills and tell people a bit more about me than can fit on one sheet of paper.

## Process

I tried to timebox the creation of the first-draft of this website. I created a backlog for myself in [Notion](https://www.notion.so/) to track and prioritize my goals. My aim was a simple design that still looks polished.

## Tools Used

I chose [NextJS](https://nextjs.org/docs) for its ease of use and many built-in features. I chose [Netlify](https://www.netlify.com) because it offers integration with Github so that your site deploys every time you push code. [TailwindCSS](https://tailwindcss.com/) came built-in in NextJS, and I wanted an excuse to play around with it. _(My takeaway: Tailwind is a nice way to get up and running, but I don't love long class lists and instead am still partial to SASS.)_

**Optimization, speed, responsive design, and accessibility** are all important as well. To achieve these goals, I used Google's [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) to analyze performance, [axe DevTools](https://www.deque.com/axe-devtools-accessibility-testing/) by Deque to pinpoint accessibility issues, and [@next/bundle-analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer) to analyze my bundle size.

## Wish list

As every frontend dev can attest, there is always a long list of `TODOs` that grows and grows. I decided to list my ideas here and check them off as I get time to implement them.

- Play with page transitions/animations
- Implement a more cohesive color theme

## ...and the rest is boilerplate NextJS documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
