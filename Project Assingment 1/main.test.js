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
})



 