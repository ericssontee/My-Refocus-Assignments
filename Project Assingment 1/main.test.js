import { sort, search, newsList, testSearch } from "./main.js";

//Example testing for search function

describe("Search function testing.",() =>{

  function expectedArray(searchWord) {
    const list = newsList.filter(x => {
      return x.toLowerCase().includes(searchWord.toLowerCase());
    });
    return list;
  };

  test("Search function must return an empty array", () => {
    expect(testSearch('Refocus')).toEqual([]);
  });

  test("Search function must return an array with 'Decoder' keyword", () => {
    expect(testSearch('Decoder')).toEqual(expectedArray('Decoder:'));
  });

  test("Search function must return an array with a special character", () => {
    expect(testSearch(':')).toEqual(expectedArray(':'));
  });
})


describe("Sort function testing.", () => {

  test("Sort function must return in ascending order.", () => {
    expect(sort("ascending")).toStrictEqual(newsList.sort());
  });

  test("Sort function must return in ascending order.", () => {
    expect(sort("descending")).toStrictEqual(newsList.sort((a, b) => b.localeCompare(a, 'en', {sensitivity: 'base'})));
  });
  
});



 