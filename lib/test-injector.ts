import 'reflect-metadata';

type Token = Function;

class TestInjectorClass {
  private instances: Map<Token, any> = new Map<Token, any>();
  private typesMap: Map<string, Token> = new Map<string, Token>();

  constructor() {
  }

  get<T>(token: Token): T {
    const instance = this.instances.get(token);
    if (instance !== undefined) {
      const tokenInstance = this.instances.get(token);
      return tokenInstance ? tokenInstance : this.bootstrapService(token);
    } else {
      throw new Error('Not correctly registered!');
    }
  }

  setService(constructor: Token) {
    this.instances.set(constructor, null);
    this.typesMap.set(constructor.name, constructor);
  }

  private bootstrapService(token: Token): any {
    const dependencies = Reflect.getMetadata('design:paramtypes', token);
    const dependencyTokens: Token[] = dependencies
      .map((dep: any) => dep.name)
      .map((dep: string) => this.typesMap.get(dep))
      .filter((dep: any) => !!dep);
    const depsInstances = dependencyTokens.map((dep: Token) => this.bootstrapService(dep));
    return this.createInstance(token, ...depsInstances);
  }

  private createInstance(token: Token, ...params: any[]) {
    const instance = new (<any>token)(...params);
    this.instances.set(token, instance);
    return instance;
  }
}

export const TestInjector = new TestInjectorClass();

export function TestService(constructor: Token) {
  TestInjector.setService(constructor);
}
