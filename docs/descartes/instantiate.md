---
title: Instantiate
---

This section describes the main ingredient of the on-chain Descartes infrastructure.
The `instantiate` is a function call in the Descartes smart contract and it is responsible for requesting and fully specifying a computation to be performed off-chain.

The signature of the `instantiate` call is given below.
```solidity
function instantiate(
     uint256 _finalTime,
     bytes32 _templateHash,
     uint64 _outputPosition,
     uint256 _roundDuration,
     address _claimer,
     address _challenger,
     Drive[] memory _inputDrives) public returns (uint256);
```
Although the reference documentation for this function can be found in [add here the reference docs](), a more detailed description of each of its arguments is given now.

`_finalTime` stands for the maximum number of machine cycles that a machine should be allowed to run during the requested computation.
If this maximum is reached and the computation is not yet finished, the machine will be forcibly halted and the contents of the `output` drive at that moment will be considered the valid result for the computation. Changing this behavior is currently [under discussion](https://github.com/cartesi-corp/descartes/issues/39).

`_templateHash` is the Merkle-tree root hash that represents the full content of the machine, except for its input drives.
The machine represented by this hash has all input drives filled with zeros and therefore it can be understood as a "template machine" that still needs the contents of the drives before it can be run.
The next section will describe the methods employed to fill the input drives with actual data.
Pragmatically, the `_templateHash` will be calculated by the developer during the phase of constructing the off-chain machine, see the details in the relevant [Section](/machine/host/lua#state-hashes).

`_outputPosition` when constructing the off-chain machine, the developer has freedom to chose where the output drive will be positioned in the address space. This variable should contain this exact position for the blockchain code to be able to do a result retrieval.

`_roundDuration` is the time (in seconds) given to each participant (currently Challenger and Claimer) to submit transactions to the blockchain.
After this period is expired, her adversary is allowed to claim a timeout, effectively canceling the computation. It is important to notice that this time only concerns the interval until transactions are mined into the main chain and other phases of Descartes (like actually running a computation) are given extra time, allowing participants to abide by deadlines. A few minutes is a good default for this variable.

**Parties involved in a computation**

Every computation done in Descartes is currently managed by only two parties called Claimer and Challenger.

Cartesi plans to remove this limitation soon and allow for a larger set of participants in a given computation, but for now these two appear as arguments to the instantiate` function call.

`_claimer` is the party responsible to submit the result of the computation.
The node owned by the claimer will collect the content of each drive specified in the machine, give Merkle-tree proofs to update the machine hash after the insertion of each of these drives, execute the machine and submit its output to the blockchain.

`_challenger` after seeing the output submitted by the claimer, the challenger will be offered the opportunity to either endorse or challenge the result of the computation.

In case of disputes, the nodes representing each of the parties will automatically engage in a dispute resolution algorithm to establish who misbehaving.
The DApp developer will be informed of the result of the dispute.


There is now only one argument left to explain in the `instantiate` call.
It is the `Drive _inputDrives` parameter, that will be detailed in the next section.
