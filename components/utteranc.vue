<template>
  <div>
    <!-- Contenido de tu página -->
    
    <!-- Sección de comentarios utilizando Utterances -->
    <div ref="comments"></div>
  </div>
</template>

<script>
export default {
  layout: "default",

  head() {
    return {
      script: [
        {
          src: 'https://utteranc.es/client.js',
          repo: "TereSolano01/Proyecto3-EIF-511",
          'issue-term': "pathname",
          label: "comments",
          theme: "github-light",
          crossorigin: "anonymous",
          async: true
        }
      ]
    };
  },

  mounted() {
    if (typeof window !== 'undefined' && this.$refs.comments) {
      const script = document.createElement('script');
      script.setAttribute('src', 'https://utteranc.es/client.js');
      script.setAttribute('repo', 'TereSolano01/Proyecto3-EIF-511');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('label', 'comments');
      script.setAttribute('theme', 'github-light');
      script.setAttribute('crossorigin', 'anonymous');
      script.setAttribute('async', 'true');

      this.$refs.comments.appendChild(script);
    }
  }
};
</script>
