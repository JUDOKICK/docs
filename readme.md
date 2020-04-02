# Cartesi Website

Cartesi is an infrastructure layer for achieving consensus over real world computations running off-chain.

## Build

Run the following commands to generate the static website at `dist/`:

    % npm install
    % npm run build

## Develop

To develop locally run the following commands:

    % npm install
    % npm run build
    % npm run dev

## Continuous Deployment

This repo is setup at [AWS Amplify](https://aws.amazon.com/amplify/) to do continuous deployment.
The `master` and `develop` branches are being tracked and automatically deployed to the following URLs:

| Branch  | URL                                        |
| ------- |:------------------------------------------:|
| master  | https://cartesi.io, https://www.cartesi.io |
| develop | https://preview.cartesi.io                 |

In addition to that every PR is being deployed to a new environment created for the PR branch.

The PR URL can be inspected in the `Checks` section of the PR.

Every modification to the website must go through the [GitHub PR workflow](https://guides.github.com/introduction/flow/), with at least 1 reviewer for the PR.
Modifications must start from the `develop` branch to a branch called `feature/<title>`.
