import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageSolarSystem = '@solar-system:saves';

export interface SaveParams {
  id: number,
};

export const GET_STORAGE = async () => {
  try {
    const value = await AsyncStorage.getItem(AsyncStorageSolarSystem);

    if (value === null) {
      const data: SaveParams[] = [];

      return data;
    }
    
    const data: SaveParams[] = JSON.parse(value);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const SET_STORAGE = async (data: SaveParams[]) => {
  try {
    await AsyncStorage.setItem(AsyncStorageSolarSystem, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const ADD_SAVE = async (save: SaveParams) => {
  try {
    const value = await AsyncStorage.getItem(AsyncStorageSolarSystem);

    if (value === null) {
      const data = [
        save,
      ];
   
      SET_STORAGE(data)

      return true;
    } 

    const responseData: SaveParams[] = JSON.parse(value);

    const data = [
      ...responseData,
      save,
    ];
 
    SET_STORAGE(data);
  } catch(error) {
    console.log(error);

    alert(`Não foi possível salvar o planeta`);
  }
}

export const REMOVE_SAVE = async (save: SaveParams) => {
  try {
    const value = await AsyncStorage.getItem(AsyncStorageSolarSystem);

    if (value === null) {
      return false;
    } 
    
    const responseData: SaveParams[] = JSON.parse(value);

    const data = responseData.filter(response => response.id !== save.id);

    SET_STORAGE(data);
  } catch(error) {
    console.log(error);
    
    alert(`Não foi possível remover o planeta`);
  }
}