const userClick = () => {};

const songLyricsArray = "Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye".split(
  ", "
);

const initialState = {
  songLyricsArray: songLyricsArray,
  arrayPosition: 0
};
const reducer = (state = initialState, action) => {
  return state;
};
const { createStore } = Redux;
const store = createStore(reducer);

//TESTS

const { expect } = window;

expect(reducer(initialState, { type: null })).toEqual(initialState);
expect(reducer(initialState, { type: "NEXT_LYRIC" })).toEqual({
  songLyricsArray: songLyricsArray,
  arrayPosition: 1
});
