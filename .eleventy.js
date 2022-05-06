module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./robots.txt');

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}