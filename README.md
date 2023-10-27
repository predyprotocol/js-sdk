js-sdk
=====

A JavaScript SDK for the Predy Protocol.

## Example

### Sign order

```ts
const builder = new DutchOrderBuilder(network.chainId, permit2Address);

const order = builder
    .validationData(0, 0, 0, 0)
    .deadline(10000)
    .nonce(1)
    .tradeAmount(BigNumber.from(100))
    .build();

const { domain, types, value} = order.permitData()
const signature = wallet._signTypedData(domain, types, values)

```

### settlement

```ts
const LeveragedGammaMarket = LeveragedGammaMarket__factory.connect('0x00...', signer)

const settlement = new UniswapSettlement(/*...*/)

await LeveragedGammaMarket.executeOrder({order, sig: signature}, settlement.serialize());
```