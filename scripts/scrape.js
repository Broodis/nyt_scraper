var axios = require("axios");
var cheerio = require('cheerio');


var scrape = function (cb) {
    axios.get("http://www.nytimes.com").then(function (err, res, body) {
        var $ = cheerio.load(body);

        var articles = [];

        $('.theme-summary').each(function (i, element) {
            var head = $(this).children('.story-heading').text().trim;
            var sum = $(this).children('.summary').text().trim;

            if (head && sum) {
                var cleanHead = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var cleanSum = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var dataToAdd = {
                    headline: cleanHead,
                    summary: cleanSum
                };

                articles.push(dataToAdd);
            }
        });
        cb(articles);
    });
};

module.exports = scrape;