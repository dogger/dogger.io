---
slug: /blog/getting-the-most-out-of-your-pull-requests
date: "2020-08-25"
title: "Getting the most out of your Pull Requests: The complete list for 2020"
summary: "If you're a developer, there's a good chance you're familiar with Pull Requests. They are a great way to contribute code to a project, or manage the development of independent features for a team. However, there is so much more you can do with them. We've listed the top tips here."
---

If you're a developer, there's a good chance you're familiar with Pull Requests. They are a great way to contribute code to a project, or manage the development of independent features for a team.

However, there is so much more you can do with them. We've listed the top tips here.

### Use an on-demand temporary preview environment
You might already be deploying your application through GitHub Actions or some other CI/CD pipeline. That's great! It's probably also running your tests and making sure your code compiles.

However, did you know that there are services that can also (in addition to your CI/CD pipeline) provision a _temporary_ test environment for _every pull request you open_, which _only lives as long as the pull request is open_?

Well, you can, and it's a great way to help test the pull requests of other team members.

Without an on-demand temporary preview environment, your flow might look something like this:
1. You deploy a pull request to some shared test environment. 
  - You have to make sure no one else is using the environment.
  - If other people are currently using it, you're out of luck, and have to spend time testing the branch on your own machine.
2. Once deployed, you test the features described in the pull request.
3. When you're done testing, you inform everyone that the test environment is ready again.

Now, here's how that flow typically looks with an on-demand temporary preview environment:
1. You go to the pull request.
  - A test environment already exists for that pull request, and the URL to the environment has already been posted as a comment.
2. You navigate to the given URL, and test in the cloud.
3. When you're done testing, you merge the pull request, and the environment is destroyed again.

Let's take a look at the different options out there.

#### Pull Dog (that's us!)
<img src="/images/pull-dog/promo.png" alt="Pull Dog combines Docker and GitHub to give you on-demand test environments for your pull requests" />

- **More info:** [dogger.io](/#pull-dog)
- **Open source:** [Yes](https://github.com/dogger)
- **Demo:** [Portainer's open Pull Requests on GitHub](https://github.com/portainer/portainer/pulls?q=is%3Aopen+is%3Apr+label%3Atest-instance-available)
- **Prerequisites:** Your app must be able to run in Docker.

##### Pricing
Pull Dog has a **free-forever tier available** for smaller projects. 

If **4GB** of RAM is not enough or you'd like to have many concurrent test environments running, there's a priced plan available starting at **$14/month** for **unlimited repositories**.

##### The good
- Alive and updated regularly, as seen on its [GitHub Insights](https://github.com/dogger/app.dogger.io/pulse/monthly) page.
- Fully managed. No setup required except installing a GitHub app, which takes **37** seconds.
- Docker-based. If your application runs in Docker, it runs with Pull Dog as well. You can point it to a custom `docker-compose.yml` file if you wish.
- Integrates well with any build system (or no build system at all for that matter). Is your build server already building your Docker images? No problem.
- Fully transparent. From [roadmap](https://github.com/orgs/dogger/projects/1) to [open source](https://github.com/dogger).

##### The bad
- Only currently supports applications specified using a Docker Compose YML file [#630](https://github.com/dogger/app.dogger.io/issues/630).
- Does not currently support a custom bring-your-own-server kind of infrastructure, and currently hosts everything on AWS Lightsail [#543](https://github.com/dogger/app.dogger.io/issues/543).
- More? [Leave feedback](https://github.com/dogger/dogger.io/issues/new).

<!-- #### Pull Preview
- **More info:** [pullpreview.com](https://pullpreview.com/)
- **Open source:** [Yes](https://github.com/pullpreview/action)
- **Demo:** Not available
- **Prerequisites:** An AWS account, a GitHub actions workflow, your app must be able to run in Docker.

##### Pricing


- Expensive (server costs are not included)
- Per-repository costs
- Complicated setup
- 

#### FeaturePeek
TODO

- Docker Compose support, but very frontend-specific
- Cheap, free-forever plan
- Easy setup -->

### Set up Pull Request reminders
If you're working in a larger team, there may constantly be a lot of pull requests open, pending review. Everyone might be busy working on their own features, and perhaps you've tried requesting a review from someone, and them forgetting it. You don't want to personally remind them all the time since that might seem annoying, but you also really would like your pull request merged.

#### GitHub Organization reminders
- **More info:** [docs.github.com](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-team)
- **Open source:** No
- **Prerequisites:** Requires a team or organization on GitHub

GitHub acquired Pull Panda (which happened to build Pull Reminders) to bring this directly into GitHub itself. You can specify specific criteria that should be met for a notification to arrive (for instance, labels, specific text in the title of the pull request, pull request age, etc), and it doesn't tend to get spammy because it likes to summarize all reminders into one post, based on an interval.

#### Eleminder
- **More info:** [eleminder.com](https://www.eleminder.com/)
- **Open source:** No
- **Prerequisites**: GitHub or GitLab, and Slack.

While the GitHub Organization reminders give notifications for your whole team in a sumamry, Eleminder is tailored around individual reminders to individual people. That way, it is more direct. This however also means that there is more to set up.

### Prevent (or become aware of) leaked secrets
This gets more important if you're maintaining an open-source project (although it generally applies to closed source as well). Once a secret leaks into your source code, it can get extremely difficult to remove again. Although GIT history can be altered and deleted, orphaned branches and old build logs might still contain the source code or leaked secret.

_It is important to note that once a secret has leaked, it is already too late. However, it matters how quick you discover it before someone else does, so you can generate new secrets to use instead._

#### GitHub secrets
If you put your secrets inside GitHub's secret manager itself, it will try to mask them as well as possible from build logs and other places where it might leak. 

However, it is a naive form of prevention which should not be used as the only form of prevention. For instance, GitHub will still happily log your secret if it contains linebreaks, just to name an example.

#### GitGuardian
GitGuardian takes a different approach to secret prevention. Instead of trying to proactively prevent __known__ secrets from leaking, it will reactively scan for __potential__ secrets that have already leaked, and inform you as early as possible.

It does this by looking for patterns that are commonly used. For instance, Slack Webhook callback URLs, Amazon AWS Access Keys, etc. This can be more effective than scanning for a list of known secrets, because it will catch potential mistakes one of your developers might make.

GitGuardian can run for each of your pull requests, adding an additional safety measure.