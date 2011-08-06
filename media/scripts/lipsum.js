(function() {
  var lipsum;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  lipsum = {
    numParagraphs: !localStorage["numParagraphs"] ? 3 : localStorage["numParagraphs"],
    numWordsPerParagraph: !localStorage["numWordsPerParagraph"] ? 100 : localStorage["numWordsPerParagraph"],
    addParagraphTags: !localStorage["addParagraphTags"] ? "true" : localStorage["addParagraphTags"],
    dummyWords: ["a", "ab", "ac", "accumsan", "accusamus", "accusantium", "ad", "adipisci", "adipiscing", "adipisicing", "aenean", "alias", "aliqua", "aliquam", "aliquet", "aliquid", "aliquip", "amet", "anim", "animi", "ante", "aperiam", "aptent", "architecto", "arcu", "asperiores", "aspernatur", "assumenda", "at", "atque", "auctor", "augue", "aut", "aute", "autem", "beatae", "bibendum", "blandit", "blanditiis", "cillum", "class", "commodi", "commodo", "condimentum", "congue", "consectetuer", "consectetur", "consequat", "consequatur", "consequuntur", "conubia", "convallis", "corporis", "corrupti", "cras", "cubilia", "culpa", "cum", "cumque", "cupidatat", "cupiditate", "curabitur", "curae", "cursus", "dapibus", "debitis", "delectus", "deleniti", "deserunt", "diam", "diamlorem", "dicta", "dictum", "dictumst", "dignissim", "dignissimos", "dis", "distinctio", "do", "dolor", "dolore", "dolorem", "doloremque", "dolores", "doloribus", "dolorum", "donec", "ducimus", "dui", "duis", "ea", "eaque", "earum", "egestas", "eget", "eius", "eiusmod", "eleifend", "elementum", "eligendi", "elit", "enim", "eos", "erat", "eros", "error", "esse", "est", "et", "etiam", "eu", "euismod", "eum", "eveniet", "ex", "excepteur", "excepturi", "exercitation", "exercitationem", "expedita", "explicabo", "facere", "facilis", "facilisi", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fuga", "fugiat", "fugit", "fusce", "gravida", "habitant", "habitasse", "hac", "harum", "hendrerit", "hic", "hymenaeos", "iaculis", "id", "illo", "illum", "impedit", "imperdiet", "in", "inceptos", "incididunt", "incidunt", "integer", "interdum", "inventore", "ipsa", "ipsam", "ipsum", "irure", "iste", "itaque", "iure", "iusto", "justo", "labore", "laboriosam", "laboris", "laborum", "lacinia", "lacus", "laoreet", "laudantium", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus", "maecenas", "magna", "magnam", "magni", "magnis", "maiores", "malesuada", "massa", "mattis", "mauris", "maxime", "metus", "mi", "minim", "minima", "minus", "modi", "molestiae", "molestias", "molestie", "mollis", "mollit", "mollitia", "montes", "morbi", "mus", "nam", "nascetur", "natoque", "natus", "nec", "necessitatibus", "nemo", "neque", "nesciunt", "netus", "nibh", "nihil", "nisi", "nisl", "nobis", "non", "nonummy", "nostra", "nostrud", "nostrum", "nulla", "nullam", "numquam", "nunc", "occaecat", "occaecati", "odio", "odit", "officia", "officiis", "omnis", "optio", "orci", "ornare", "pariatur", "parturient", "pede", "pellentesque", "penatibus", "per", "perferendis", "perspiciatis", "pharetra", "phasellus", "placeat", "placerat", "platea", "porro", "porta", "porttitor", "possimus", "posuere", "potenti", "praesent", "praesentium", "pretium", "primis", "proident", "proin", "provident", "pulvinar", "purus", "quae", "quaerat", "quam", "quas", "quasi", "qui", "quia", "quibusdam", "quidem", "quis", "quisquam", "quisque", "quo", "quod", "quos", "ratione", "recusandae", "reiciendis", "rem", "repellat", "repellendus", "reprehenderit", "repudiandae", "rerum", "rhoncus", "ridiculus", "risus", "rutrum", "saepe", "sagittis", "sapien", "sapiente", "scelerisque", "sed", "sem", "semper", "senectus", "sequi", "similique", "sint", "sit", "sociis", "sociosqu", "sodales", "sollicitudin", "soluta", "sunt", "suscipit", "suspendisse", "taciti", "tellus", "tempor", "tempora", "tempore", "temporibus", "tempus", "tenetur", "tincidunt", "torquent", "tortor", "totam", "tristique", "turpis", "ullam", "ullamco", "ullamcorper", "ultrices", "ultricies", "unde", "urna", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "veniam", "veritatis", "vero", "vestibulum", "vitae", "vivamus", "viverra", "voluptas", "voluptate", "voluptatem", "voluptates", "voluptatibus", "voluptatum", "volutpat", "vulputate", "wisi"],
    punctuation: ["!", "?", "."],
    init: function() {
      document.getElementById("copy").onclick = function() {
        document.getElementById("lipsum").select();
        return document.execCommand("Copy");
      };
      document.getElementById("paragraphs").value = this.numParagraphs;
      document.getElementById("paragraphs").onkeyup = __bind(function() {
        return this.saveConfig();
      }, this);
      document.getElementById("paragraphs").onclick = function() {
        return this.select();
      };
      document.getElementById("words").value = this.numWordsPerParagraph;
      document.getElementById("words").onkeyup = __bind(function() {
        return this.saveConfig();
      }, this);
      document.getElementById("words").onclick = function() {
        return this.select();
      };
      document.getElementById("ptags").checked = this.addParagraphTags === "true";
      document.getElementById("ptags").onclick = __bind(function() {
        return this.saveConfig();
      }, this);
      return this.generateDummyText();
    },
    generateDummyText: function() {
      var html, i, j, _ref, _ref2;
      html = "<p>";
      for (i = 1, _ref = this.numParagraphs; 1 <= _ref ? i <= _ref : i >= _ref; 1 <= _ref ? i++ : i--) {
        for (j = 1, _ref2 = this.numWordsPerParagraph; 1 <= _ref2 ? j <= _ref2 : j >= _ref2; 1 <= _ref2 ? j++ : j--) {
          html += this.randomWord(this.dummyWords);
          if ((j > 0) && (j % this.numWordsPerParagraph === 0)) {
            html += ".</p>\n\n<p>";
          } else {
            if (html.substring(html.length - 3, html.length) !== "<p>") {
              html += this.randomPunctuation(j);
            }
          }
        }
      }
      html += "</p>";
      if (this.addParagraphTags !== "true") {
        html = html.replace(/<\/?p>/g, "");
      }
      html = this.capitalizeFirst(html.substring(0, html.length - (this.addParagraphTags === "true" ? 9 : 2)));
      return document.getElementById("lipsum").innerHTML = html;
    },
    saveConfig: function() {
      var paragraphs, words;
      words = document.getElementById("words").value;
      paragraphs = document.getElementById("paragraphs").value;
      if (/\d+/.test(paragraphs)) {
        this.numParagraphs = localStorage["numParagraphs"] = paragraphs;
      }
      if (/\d+/.test(words)) {
        this.numWordsPerParagraph = localStorage["numWordsPerParagraph"] = words;
      }
      this.addParagraphTags = localStorage["addParagraphTags"] = document.getElementById("ptags").checked.toString();
      return this.generateDummyText();
    },
    randomWord: function(words) {
      return words[this.randomInt(words.length)];
    },
    randomPunctuation: function(x) {
      if (x > 0) {
        if (x % this.randomInt(30) === 0) {
          return this.randomWord(this.punctuation) + " ";
        } else if (x % this.randomInt(20) === 0) {
          return ", ";
        } else {
          return " ";
        }
      }
      return " ";
    },
    randomInt: function(x) {
      return Math.floor(Math.random() * parseInt(x));
    },
    capitalizeFirst: function(x) {
      var er;
      er = /(?:[\n|>|\?|\!|\.]|^)[\s]?([a-z])/g;
      return x.replace(er, function(s) {
        return s.toUpperCase();
      });
    }
  };
  if (typeof window !== "undefined" && window !== null) {
    window.lipsum = lipsum;
  }
  window.onload = function() {
    return lipsum.init();
  };
}).call(this);
