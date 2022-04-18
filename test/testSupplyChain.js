const SupplyChain = artifacts.require('SupplyChain');

contract('Hello World', () => {
    it('Deploys a contract', async () => {
        const supplyChain = await SupplyChain.new();
        assert.ok(supplyChain.address);
    });

    it('Create an account', async () => {
        const supplyChain = await SupplyChain.new();
        const create = await supplyChain.createAccount("0x1aaA0600e8Be6196f933FD21085bfE6Aa935345d");
        assert.ok(create);
    });

    it('Check if account gets created', async () => {
        const supplyChain = await SupplyChain.new();
        const create = await supplyChain.createAccount("0x1aaA0600e8Be6196f933FD21085bfE6Aa935345d");
        const check = await supplyChain.checkIfAccountPresent("0x1aaA0600e8Be6196f933FD21085bfE6Aa935345d");
        assert.equal(check, true);
    });
});