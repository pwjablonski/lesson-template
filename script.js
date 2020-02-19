Reveal.initialize({
  dependencies: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/markdown/marked.js',
      condition: function() { return !!document.querySelector( '[data-markdown]' ); }
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/markdown/markdown.js',
      condition: function() { return !!document.querySelector( '[data-markdown]' ); }
    },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/notes/notes.js', async: true },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/plugin/highlight/highlight.min.js', async: true },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/notes/notes.js', async: true },
  ]
});