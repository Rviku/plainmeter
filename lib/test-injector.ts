import 'reflect-metadata';

interface Constructor<T> {
  new (...args: any[]): T;
}
type AnyConstructor = Constructor<any>;

class TestInjectorClass {
  private instances: Map<AnyConstructor, any> = new Map<AnyConstructor, any>();
  private typesMap: Map<string, AnyConstructor> = new Map<string, AnyConstructor>();

  constructor() {
  }

  public get<T>(token: Constructor<T>): T {
    const instance = this.instances.get(token);
    if (instance !== undefined) {
      const tokenInstance = this.instances.get(token);
      return tokenInstance ? tokenInstance : this.instantiateWithDeps(token);
    } else {
      throw new Error('Not correctly registered!');
    }
  }

  public registerInjectable(constructor: AnyConstructor) {
    this.instances.set(constructor, null);
    this.typesMap.set(constructor.name, constructor);
  }

  private instantiateWithDeps<T>(token: Constructor<T>): T {
    const depsInstances = this.getDependencies(token)
      .map(dep => this.instantiateWithDeps(dep));
    return this.createInstance(token, ...depsInstances);
  }

  private getDependencies<T>(token: Constructor<T>): AnyConstructor[] {
    const dependencies = Reflect.getMetadata('design:paramtypes', token);
    return dependencies
      .map((dep: any) => dep.name)
      .map((dep: string) => this.typesMap.get(dep))
      .filter((dep: any) => !!dep);
  }

  private createInstance<T>(token: Constructor<T>, ...params: any[]): T {
    const instance = new token(...params);
    this.instances.set(token, instance);
    return instance;
  }
}

export const TestInjector = new TestInjectorClass();
export function TestService(constructor: AnyConstructor) {
  TestInjector.registerInjectable(constructor);
}
