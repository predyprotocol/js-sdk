js-sdk
=====

![](https://github.com/predyprotocol/js-sdk/workflows/main/badge.svg)

A JavaScript SDK for the Predy Protocol.

## Example

### Sign order

```ts
const builder = new PerpDutchOrderBuilder(network.chainId, permit2Address);

const order = builder
    .validationData(0, 0, 0, 0)
    .deadline(10000)
    .nonce(1)
    .tradeAmount(BigNumber.from(100))
    .build();

const { domain, types, value} = order.permitData()
const signature = wallet._signTypedData(domain, types, values)

```
