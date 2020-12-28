import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageSolarSystem = '@solar-system:settings';

export interface SettingsParams {
  username: string,
  active: boolean,
};

export const GET_SETTINGS = async () => {
  try {
    const value = await AsyncStorage.getItem(AsyncStorageSolarSystem);

    if (value === null) {
      return undefined;
    };
    
    const data: SettingsParams = JSON.parse(value);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const SET_SETTINGS = async (data: SettingsParams) => {
  try {
    await AsyncStorage.setItem(AsyncStorageSolarSystem, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const IS_SIGNOUT = async () => {
  try {
    const value = await AsyncStorage.getItem(AsyncStorageSolarSystem);

    if (value === null) {
      return true;
    }   

    const data: SettingsParams = JSON.parse(value);

    return data.active;
  } catch (error) {
    console.error(error);
  }
}