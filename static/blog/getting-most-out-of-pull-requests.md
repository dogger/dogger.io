---
slug:
date: "2020-08-24"
title: "60 tips to get more out of your Pull Requests: The complete list for 2020"
summary: ""
---

_This blog post focuses on GitHub, but some of the tips listed will work for any source control host. It also assumes you know what [Pull Requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) are._

If you're a developer, there's a good chance you're familiar with Pull Requests. They are a great way to contribute code to a project, or manage the development of independent features for a team.

However, there is so much more you can do with them. We've listed the top 60 tips here.

## Use an on-demand temporary preview environment
You might already be deploying your application through GitHub Actions or some other CI/CD pipeline. That's great! It's probably also running your tests and making sure your code compiles.

However, did you know that there are services that can also (in addition to your CI/CD pipeline) provision a _temporary_ test environment for _every pull request you open_, which _only lives as long as the pull request is open_?

Well, you can. And it's a great way to help test the pull requests of other team members, or 