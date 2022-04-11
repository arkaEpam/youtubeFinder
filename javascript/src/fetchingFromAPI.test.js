import {youtubeData} from "./fetchingFromAPI.js";
import {expect} from 'chai';

describe("async call test",()=>{
    it("returns object", ()=>{
        const expected = typeof {};
        const actual = youtubeData();
        expect(typeof actual).to.deep.equal(typeof expected);
    })
})
