import { ResumeModule } from './resume.module';

describe('BlankPageModule', () => {
    let resumeModule: ResumeModule;

    beforeEach(() => {
        resumeModule = new ResumeModule();
    });

    it('should create an instance', () => {
        expect(resumeModule).toBeTruthy();
    });
});
