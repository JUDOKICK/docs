---
title: Wallets
---

Cartesi is a second layer solution.
In particular, this means that it needs to send transactions on the main Ethereum chain in order to enforce particular results on the first layer.

This is done through a wallet contained inside the Cartesi Node.
It is very important that this wallet be different from the user's main wallet in order to protect their funds in case of a compromise in the machine where the Cartesi Node is installed.

When installing a Cartesi Node, the user will be prompted to create a wallet for her node and to propely fund it.
During this installation procedure, the user will also be requested to authorize the node to defend her in case of disputes.

It is not required for the DApp developer to get involved in this procedure.
Moreover, the DApp does not even need to know the address of the user's Cartesi Node in order to write the application logic.
