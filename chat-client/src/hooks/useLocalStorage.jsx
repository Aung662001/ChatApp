import { useEffect, useState } from "react";

const KEY = "chat-";
const useLocalStorage = (key, initialValue) => {
  const CHAT_KEY = KEY + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(CHAT_KEY);
    if (jsonValue != "undefined" && jsonValue != null) {
      return JSON.parse(jsonValue);
    }

    if (typeof initialValue == "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(CHAT_KEY, JSON.stringify(value));
  }, [CHAT_KEY, value]);
  return [value, setValue];
};
export default useLocalStorage;
