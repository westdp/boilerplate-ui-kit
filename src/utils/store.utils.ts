export class StoreUtils {
  public static saveStore<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public static removeStore(key: string): void {
    localStorage.removeItem(key);
  }

  public static getLocalStore<T>(key: string, defaultData: T): T {
    const store: string | null = localStorage.getItem(key);

    return store ? JSON.parse(store) : defaultData;
  }
}