---
slug: "/documentation"
title: Pull Dog documentation
---

## Quickstart
Getting started with Pull Dog only takes a minute, and requires two steps.

### Installing the app
The first thing to do is to <a rel="nofollow" href="https://github.com/apps/pull-dog/installations/new">install the GitHub app</a> to your user and/or organizations.

### Customizing Pull Dog for a repository
**Note:** *This step is only needed if you want to customize how Pull Dog works, if your Docker Compose file is not located in the root of your repository, or if its filename differs from the default `docker-compose.yml`.*

To customize how Pull Dog works for a repository, you need to push a `pull-dog.json` configuration file to the repository's `master` branch.

The most minimal configuration possible contains just a pointer to the `docker-compose.yml` file in your repository that you want to provision a test environment from:

```json
{
    "dockerComposeYmlFilePaths": [
        "your/path/to/docker-compose.yml"
    ]
}
```

_For more ways to customize Pull Dog or how it builds your test environment, see <a href="#configuration">Configuration</a>._

## Configuration
All below configuration values can be set either using a <a href="#lazy-configuration">lazy configuration</a> or a <a href="#json-file-configuration">JSON file configuration</a>.

### Possible values
You can customize Pull Dog's behavior in many ways.

#### `dockerComposeYmlFilePaths` (required)
Tells Pull Dog which Docker Compose YML file(s) to choose when provisioning a test environment.

- **Example:** `["your/path/to/docker-compose.yml"]`
- **Type:** `string[]`

#### `isLazy` (optional)
Determines whether or not Pull Dog should wait until it receives an API call from a build server before provisioning. See <a href="#lazy-configuration">lazy configuration</a> for more details.

- **Example:** `true`
- **Type:** `true|false`
- **Default:** `false`

#### `expiry` (optional)
Sets a timeout on when the environment should be destroyed again.

- **Example:** `"2.03:02:10"` for 2 days, 3 hours, 2 minutes and 10 seconds.
- **Type:** `string|null`
- **Default:** `null`

#### `buildArguments` (optional)
Specifies build-time environment variables and build arguments. Need to provide these dynamically from your build server? See <a href="#lazy-configuration">lazy configuration</a> for more details.

- **Example:** `{ "MY_KEY": "my value" }`
- **Type:** `{ [argumentName: string]: string }`
- **Default:** `{ }`

#### `conversationMode` (optional)
Specifies how comments from Pull Dog should behave. 

`"singleComment"` makes Pull Dog insert a new GitHub comment if none is present, and edit the existing one if one is present.

`"multipleComments"` inserts a new GitHub comment every time. This might be quite spammy, which is why `"singleComment"` is recommended.

- **Example:** `"multipleComments"`
- **Type:** `"singleComment"|"multipleComments"`
- **Default:** `"singleComment"`

#### `label` (optional)
Specifies a GitHub label that should be set on the pull requests that have Pull Dog test environments ready for them. Make sure this label already exists in your repository.

- **Example:** `"pull-dog-environment-ready"`
- **Type:** `string`
- **Default:** `null`

### JSON file configuration
The simplest way of configuring Pull Dog is by pushing the configuration as a `pull-dog.json` file to your `master` branch.

```json
//pull-dog.json
{
    "expiry": "2.03:02:10",
    "buildArguments": { "MY_KEY": "my value" },
    "conversationMode": "singleComment",
    "label": "pull-dog-environment-ready",
    "dockerComposeYmlFilePaths": [ 
        "your/path/to/docker-compose.yml" 
    ]
}
```

### Lazy configuration
Lazy configuration will not provision a test environment when the pull request is opened, but will instead wait for a build server to make an API call to Pull Dog which then starts provisioning.

The reason this may be useful is to set dynamic variables that are only available from the build server (such as referencing a specific Docker image that was just built and published).

#### Example
The below example uses the pull request <a href="https://github.com/portainer/portainer/pull/3932" rel="nofollow">portainer/portainer #3932</a> as an example.

`59239347` is the GitHub ID of the repository. This (and the API key to use) can be optained by clicking the repository from the <a href="/dashboard/pull-dog">Pull Dog dashboard</a> page.

_Instead of specifying `pullRequestHandle`, you can also reference a branch name by specifying `branchReference`._

```bash
curl \
    --header "Content-Type: application/json" \
    --request POST \
    --data '
    {
        "repositoryHandle": "59239347",
        "pullRequestHandle": "3932", 
        "apiKey":"some-valid-api-key", 
        "configuration": {
            "expiry": "2.03:02:10",
            "buildArguments": { "MY_KEY": "my value" },
            "conversationMode": "singleComment",
            "label": "pull-dog-environment-ready",
            "dockerComposeYmlFilePaths": [
                "your/path/to/docker-compose.yml"
            ]
        }
    }' \
    https://app.dogger.io/api/pull-dog/provision
```