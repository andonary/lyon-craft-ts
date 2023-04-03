import { something } from './something.js';

describe('Things', () => {
    test('it should do thing', async () => {
        // Arrange

        // Act
        const result = await something();

        // Assert
        expect(result).toEqual(true);
    });
});
