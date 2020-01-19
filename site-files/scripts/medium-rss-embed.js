var container = document.getElementById("retainable-rss-embed");
if (container) {
    var css = document.createElement('link');
    css.href = "../styles/medium-rss-embed.css";
    css.rel = "stylesheet"
    document.getElementsByTagName('head')[0].appendChild(css);
    var script = document.createElement('script');
    script.src = "../scripts/medium.js";
    document.getElementsByTagName('body')[0].appendChild(script);
}
