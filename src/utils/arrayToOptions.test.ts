import arrayToOptions from './arrayToOptions';

describe('arrayToOptions', () => {
  it('should convert an array of strings to options', () => {
    const arr = ['foo', 'bar', 'baz'];
    const options = arrayToOptions(arr);

    expect(options).toEqual([
      { value: 'foo', name: 'foo' },
      { value: 'bar', name: 'bar' },
      { value: 'baz', name: 'baz' },
    ]);
  });

  it('should convert an array of numbers to options', () => {
    const arr = [1, 2, 3];
    const options = arrayToOptions(arr);

    expect(options).toEqual([
      { value: 1, name: '1' },
      { value: 2, name: '2' },
      { value: 3, name: '3' },
    ]);
  });

  it('should handle an empty array', () => {
    const arr: string[] | number[] = [];
    const options = arrayToOptions(arr);

    expect(options).toEqual([]);
  });
});
