import { RoutemoduleModule } from './routemodule.module';

describe('RoutemoduleModule', () => {
  let routemoduleModule: RoutemoduleModule;

  beforeEach(() => {
    routemoduleModule = new RoutemoduleModule();
  });

  it('should create an instance', () => {
    expect(routemoduleModule).toBeTruthy();
  });
});
