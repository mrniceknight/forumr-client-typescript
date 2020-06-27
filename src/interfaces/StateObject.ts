import { SetStateAction } from 'react';

interface StateObject<T> {
  value: T;
  set: React.Dispatch<SetStateAction<T>>;
}
export default StateObject;
