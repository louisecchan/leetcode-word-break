// Given a string s and a dictionary of strings wordDict,
// return true if s can be segmented into a
// space-separated sequence
// of one or more dictionary words.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

var wordBreak = function (s, wordDict) {
  let n = s.length;
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  let max_len = Math.max(...wordDict.map((word) => word.length));

  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j >= Math.max(i - max_len - 1, 0); j--) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
};
