import { NativeModules } from 'react-native';

type PlaybookSdkType = {
  multiply(a: number, b: number): Promise<number>;
};

const { PlaybookSdk } = NativeModules;

export default PlaybookSdk as PlaybookSdkType;
