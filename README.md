js-sdk
=====


## Example


### Sign order

```
const builder = new DutchOrderBuilder(network.chainId, permit2Address);

const order = builder
    .validationData(0, 0, 0, 0)
    .deadline(10000)
    .nonce(1)
    .tradeAmount(BigNumber.from(100))
    .build();

const { domain } = order.permitData()
const signature = wallet._signTypedData(domain, types, values)

```
