import {youtubeData} from "./dataTest";
import {expect} from 'chai';

describe("async call test",()=>{
    it("returns object", ()=>{
        const expected = typeof {};
        const actual = youtubeData();
        expect(typeof actual).to.deep.equal(typeof expected);
    })
})
