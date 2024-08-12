import { helper } from "./helper-test-service";
export const execute = ()=>{
    const result = helper();
    if(result){
        return "Learning";
    }
    else{
        return "Reading";
    }
}
