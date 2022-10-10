function arrayToOptions(arr: string[] | number[]) {
  const options = arr.map((value) => ({
    value,
    name: String(value),
  }));

  return options;
}

export default arrayToOptions;
