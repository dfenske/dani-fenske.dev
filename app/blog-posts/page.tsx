/* eslint-disable @next/next/no-img-element -- The Image component doesn't do great with external URLs. */

import Card from "../components/card";

export default function BlogPosts() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <h2>
        During my time at PayScale, I wrote a few blog posts about my learnings
        on the job. I&apos;ve included them here for your reading pleasure.
      </h2>

      <div className="grid grid:cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-2 sm:gap-4">
        <Card
          className="border-[1px] rounded border-black px-3 pb-4 hover:shadow-lg"
          header="PagerDuty + Slack + Azure Integration"
          subheader="Feb 2020"
          href="https://medium.com/payscale-tech/pagerduty-slack-azure-integration-2444d668c4fa"
          img={
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*gWPfYJcOwKwMh9BV"
              alt="Blog image of a terrarium"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          }
        />

        <Card
          className="border-[1px] rounded border-black px-3 pb-4 hover:shadow-lg"
          header="Network Timeouts and CPU Limitations in Azure Kubernetes Service"
          subheader="Sep 2019"
          href="https://medium.com/payscale-tech/network-timeouts-and-cpu-limitations-in-azure-kubernetes-service-178789ebe41"
          img={
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*0gZBK45R6CcI-6IZ"
              alt="Blog image of a sand timer"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          }
        />

        <Card
          className="border-[1px] rounded border-black px-3 pb-4 hover:shadow-lg"
          header="Replay AWS CloudFront Logs to Load Test Your Website"
          subheader="Aug 2019"
          href="https://medium.com/payscale-tech/load-testing-your-website-by-replaying-cloudfront-logs-eb81cbaf27ea"
          img={
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*_KXJnDUH3LoaSz-j"
              alt="Blog image of a backpack"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          }
        />

        <Card
          className="border-[1px] rounded border-black px-3 pb-4 hover:shadow-lg"
          header="Introduction to React Hooks"
          subheader="July 2019"
          href="https://medium.com/payscale-tech/introduction-to-react-hooks-29ef97547862"
          img={
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*z0IR0e4YRL7km2tngBe8eg.jpeg"
              alt="Blog image of a fishing pole"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          }
        />

        <Card
          className="border-[1px] rounded border-black px-3 pb-4 hover:shadow-lg"
          header="React Prerendering: Next.js + Docker + Azure"
          subheader="Apr 2019"
          href="https://medium.com/payscale-tech/react-prerendering-next-js-docker-azure-b3236f8ec80e"
        >
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*HyZjZ3p-7Cwc0hKesqcWAQ.jpeg"
            alt="Blog image of a shipping container"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </Card>
      </div>
    </div>
  );
}
