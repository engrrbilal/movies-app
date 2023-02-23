export class LocalStorageService {
  persist = async (key, value) => {
    localStorage.setItem(key, value);
  };
  fetch = async (key) => {
    const item = localStorage.getItem(key);
    return item;
  };
  remove = async (key) => {
    localStorage.removeItem(key);
  };
}
