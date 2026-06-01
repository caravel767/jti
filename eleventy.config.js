module.exports = function(eleventyConfig) {
  // CSSと画像をパススルーコピー
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");

  // 日付フォーマットフィルタ
  eleventyConfig.addFilter("dateReadable", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  });

  eleventyConfig.addFilter("dateIso", (dateObj) => {
    return new Date(dateObj).toISOString();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
