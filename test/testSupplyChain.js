const SupplyChain = artifacts.require('SupplyChain');

contract('Hello World', () => {
    it('Deploys a contract', async () => {
        const supplyChain = await SupplyChain.new();
        assert.ok(supplyChain.address);
    });
});