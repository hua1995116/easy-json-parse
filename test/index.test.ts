import { expect } from 'chai';
import easyParse from '../src/index';


describe('easy-json-parse', () => {
  it('normal initialValue', () => {
    const except = 'easy';
    const jsonString = '{"easy": "easy"}';
    const [error, json] = easyParse(jsonString, { initialValue: {} });
    expect(json.easy).to.equal(except);
  });
  it('error undefined', () => {
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
  it('normal', () => {
    const except = 'easy';
    const jsonString = '{"easy": "easy"}';
    const [error, json] = easyParse(jsonString);
    expect(json.easy).to.equal(except);
  })
  it("don't need error", () => {
    const except = 'easy';
    const jsonString = '{"easy": "easy"}';
    const [, json] = easyParse(jsonString);
    expect(json.easy).to.equal(except);
  })
  it('use reviver', () => {
    const except = 'easy';
    const jsonString = '{"easy": "easy"}';
    const [, json] = easyParse(jsonString, {
      reviver: (key, value) => (
        typeof value === 'number' ? value * 2 : value
      )
    });
    expect(json.easy).to.equal(except);
  });
  it('use initialValue', () => {
    const except = 'easy';
    const jsonString = 'null';
    const [, json] = easyParse(jsonString, {
      initialValue: {
        easy: 'easy'
      }
    });
    expect(json.easy).to.equal(except);
  });
})