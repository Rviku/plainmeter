import {TestService} from '../lib/test-injector';
import {Configuration} from './configuration.interface';
import {configuration} from '../setup/configuration';

@TestService
export class ConfigService {
  get(): Configuration {
    return configuration;
  }
}