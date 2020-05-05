# Ambassador Program Hotsite

This is the hotsite for Ambassador Program. It's hosted at https://cartesi.io/ambassadors


## Build

Run the following commands to generate the static website at `site/`:

    % npm install
    % npm run build

## Develop

To develop locally run the following commands:

    % npm install
    % npm run dev

## Continuous Deployment

This repo is setup at AWS to automatically deploy the `master` branch to `https://cartesi.io/ambassadors` on every push.
It's using [AWS Amplify](https://aws.amazon.com/amplify/) and the same build commands mentioned above.
