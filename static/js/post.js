---
    layout: null
---

/**
 * 页面ready方法
 */
$(document).ready(function() {
    generateContent();
    disqus();
});

/**
 * 侧边目录
 */
function generateContent() {
    var $mt = $('.toc');
    var $toc;
    $mt.each(function(i,o){
        $toc = $(o);
        $toc.toc({ listType: 'ul', headers: 'h1, h2, h3' });
    });
}

function disqus(){
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = '{{site.disqus_shortname}}';

    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    document.getElementsByTagName("script")[0].parentNode.appendChild(dsq);
}
