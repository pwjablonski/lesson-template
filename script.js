Reveal.initialize({
  history: true,
  dependencies: [
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/markdown/marked.js",
      condition: function() {
        return !!document.querySelector("[data-markdown]");
      }
    },
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/markdown/markdown.js",
      condition: function() {
        return !!document.querySelector("[data-markdown]");
      }
    },
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/notes/notes.js",
      async: true
    },
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/plugin/highlight/highlight.min.js",
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});

Reveal.configure({ slideNumber: true, showSlideNumber: "print" });

if (window.location.search.match(/print-pdf/gi)) {
  var link = document.createElement("link");

  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/css/print/pdf.min.css";
  document.getElementsByTagName("head")[0].appendChild(link);
}
