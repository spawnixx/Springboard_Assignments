/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    this.chains = {};
    for (let i = 0; i < this.words.length; i++) {
      let currentWord = this.words[i];
      let nextWord = this.words[i + 1] || null;
      if (!this.chains[currentWord]) {
        this.chains[currentWord] = [];
      }
      this.chains[currentWord].push(nextWord);
    }
  }

  static random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let keys = Object.keys(this.chains);
    let key = MarkovMachine.random(keys);
    let out = [];

    while (out.length < numWords && key !== null) {
      out.push(key);
      let nextWords = this.chains[key];
      key = MarkovMachine.random(nextWords);
    }
    return out.join(" ");
  }
}

module.exports = { MarkovMachine };
