import { MycalculatorModule } from './mycalculator.module';

describe('MycalculatorModule', () => {
  let mycalculatorModule: MycalculatorModule;

  beforeEach(() => {
    mycalculatorModule = new MycalculatorModule();
  });

  it('should create an instance', () => {
    expect(mycalculatorModule).toBeTruthy();
  });
});
