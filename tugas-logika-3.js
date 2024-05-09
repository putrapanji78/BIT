const programmerIT = (s, wordDict) => {
    const memo = {};

    const backtrack = start => {
        if (start === s.length) {
            return [[]];
        }

        if (memo[start] !== undefined) {
            return memo[start];
        }

        const result = [];

        for (let end = start + 1; end <= s.length; end++) {
            const word = s.substring(start, end);

            if (wordDict.includes(word)) {
                const restResult = backtrack(end);
                for (let rest of restResult) {
                    result.push([word, ...rest]);
                }
            }
        }

        memo[start] = result;
        return result;
    };

    return backtrack(0).map(words => words.join(', '));
};


const text = 'programit';
const wordDictionary = ['pro', 'gram', 'merit', 'program', 'it', 'programmer'];

console.log(programmerIT(text, wordDictionary));
