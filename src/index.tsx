import { NativeModules } from 'react-native';

interface IPlaybookSettings {
  spinnerColor?: string;
  fontFamily?: string;
  mainColor?: string;
  mainTitle?: { [key: string]: string };
  mainDescriptionText?: { [key: string]: string };
  categoryDescriptionText?: { [key: string]: string };
  QRModule?: boolean;
  updatesModule?: boolean;
}

interface IPlaybookSDK {
  set: (
    token: string,
    userID: string,
    userGroups: string[],
    companyName: string,
    sandBox: Boolean
  ) => void;
  setAvailableLangs: (langs: string[]) => void;
  extraSettings: (settings?: IPlaybookSettings) => void;
  showListView: (animated: Boolean) => void;
  showAcademyView: (animated: Boolean) => void;
  showUpdatesListView: (animated: Boolean) => void;
}

const { PlaybookSdk } = NativeModules;

export default PlaybookSdk as IPlaybookSDK;
