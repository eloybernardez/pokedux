import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storageValue, setStoredValue] = useState(() => {
    // Get value
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Store Value
  const setStorageValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storageValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  // Returned
  return [storageValue, setStorageValue];
};
