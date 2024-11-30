/**
 * Retrieves all items from the local storage.
 *
 * This function iterates over all keys in the local storage and collects
 * each key-value pair into an array of objects. Each object contains the
 * key and its corresponding value from the local storage.
 *
 * @returns {Array<{ key: string, value: string | null }>} An array of objects,
 * each containing a key and its corresponding value from the local storage.
 */
interface LocalStorageItem {
  key: string;
  value: string | null;
}

export default function getAllLocalStorageItems(): LocalStorageItem[] {
  const items: LocalStorageItem[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) {
      items.push({ key, value: localStorage.getItem(key) });
    }
  }
  return items;
}
