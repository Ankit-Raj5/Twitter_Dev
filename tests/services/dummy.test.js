import {execute} from '../../src/services/dummy-test-service' ;
import { helper } from '../../src/services/helper-test-service';
jest.mock('../../src/services/helper-test-service');

test('result is true', ()=>{
    helper.mockReturnValue(true);
    const result = execute();
    expect(result).toBe("Learning");
});


test('result is false', ()=>{
    helper.mockReturnValue(false);
    const result = execute();
    expect(result).toBe("Reading");
});