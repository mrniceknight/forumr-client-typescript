import { useState } from 'react';
import StateObject from '../interfaces/StateObject';

function CreateStateObject<T>(defaultValue: T): StateObject<T> {
  const [value, set] = useState(defaultValue);
  return {
    value,
    set,
  };
}

export default CreateStateObject;
