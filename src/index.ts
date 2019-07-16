export interface Options {
  reviver?: (key?: string, value?: any) => any;
  initialValue?: any;
}

function safeParse(str: string, options ?: Options): [any, any] {
  options = options || {};
  const { reviver = null, initialValue = null } = options;
  let json = initialValue;
  let error = null

  try {
      json = JSON.parse(str, reviver) || initialValue; // if obj is null, will cover init.
  } catch (err) {
      error = err
  }

  return [error, json];
}

export default safeParse