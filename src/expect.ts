export function expect(condition: unknown): asserts condition
{
    if (!condition)
        throw new Error('Assertion failed')
}
