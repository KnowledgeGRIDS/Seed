
<h1 align="center">
  <br>
  seed
  <br>
</h1>

<h4 align="center">Repository for storing contracts for Seed Crowdfunding.</h4>

### Install

```
git clone https://github.com/KnowledgeGRIDS/Seed.git
cd Seed
npm i
```

### Tests

```
npm run test
```

### Build contracts

```
npm run build:contracts
```

### Contracts' Tests

```
npm run test:contracts
```

### About

This repository contains contracts used by KnowledgeGRIDS.ai for performing Seed Crowdfunding Campaign.

### Rules for CrowdFunding

1. There will be a predefined lower and upper bound for the Funding Campaign.
2. If lower bound is not crossed in the time that the Campaign is active, the Campaign will be considered as Failed and all funds by contributors will be open for claim. At such stage, any contributor can claim their contribution by using the same wallet address they used for contributing to the campaign. There will be a predefined window for claims to be considered, after which any balance will be transferred to the Beneficiary(Owner) of the Campaign.
3. If the lower bound is crossed before Campaign ends, then Campaign will be considered as Successful. Additional contributions will be allowed(until upper bound is reached). Meanwhile, earlySuccess tag will become active, allowing Beneficiary(Owner) to transfer the then balance of contract to their wallet, as per their convinience.
4. If the upper bound is crossed, the Campaign will be considered as Successful and no further contributions will be allowed. Any new contributions will fail & the transferred amount shall be returned to the contributor.
