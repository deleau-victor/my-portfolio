export abstract class Singleton<T> {
   private static _instances = new WeakMap<Function, any>();

   protected constructor() {}

   public static getInstance<T>(this: new (...args: any[]) => T, ...args: any[]): T {
      const existing = Singleton._instances.get(this);
      if (existing) return existing;

      const instance = new this(...args);
      Singleton._instances.set(this, instance);
      return instance;
   }

   public static resetInstance(this: new (...args: any[]) => any) {
      Singleton._instances.delete(this);
   }
}
