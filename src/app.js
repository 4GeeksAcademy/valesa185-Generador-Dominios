var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var extensions = [".com", ".net", ".us", ".io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let h = 0; h < noun.length; h++) {
      for (let k = 0; k < extensions.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[h] + extensions[k]);
      }
    }
  }
}
