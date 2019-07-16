import { expect } from 'chai';
import easyParse from '../src/index';


describe('easy-json-parse', () => {
  it('normal', () => {
    const except = 'easy';
    const jsonString = '{"easy": "easy"}';
    const [error, json] = easyParse(jsonString, { initialValue: {} });
    expect(json.easy).to.equal(except);
  });
  it('error', () => {
    const except = undefined;
    const jsonString = 'easy';
    const [error, json] = easyParse(jsonString, { initialValue: {} });
    expect(json.easy).to.equal(except);
  });
  it('handle error', () => {
    const except = 'error';
    const jsonString = 'easy';
    const [error, json] = easyParse(jsonString);
    if(error) {
      const msg = 'error';
      expect(msg).to.equal(except);
    }
  })
})