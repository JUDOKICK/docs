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

This repo is setup at AWS to automatically deploy the `master` branch to `https://cartesi.io` on every push.
It's using [AWS Amplify](https://aws.amazon.com/amplify/) and the same build commands mentioned above.
