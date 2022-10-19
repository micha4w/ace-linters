export var cssContent = `.text-layer {
    font: 12px Monaco, "Courier New", monospace;
    font-size: 3vmin;
    cursor: text;
}

.blinker {
    animation: blink 1s linear infinite alternate;
}

@keyframes blink {
    0%, 40% {
        opacity: 0; /*
        */
        opacity: 1
    }

    40.5%, 100% {
        opacity: 1
    }
}

@document url(http://c9.io/), url-prefix(http://ace.c9.io/build/),
domain(c9.io), regexp("https:.*") /**/
{
    /**/
    img[title]:before
    {
        content: attr(title) "\AImage \
            retrieved from"
        attr(src); /*
            */
        white-space: pre;
        display: block;
        background: url(asdasd); "err
    }
}

@viewport {
    min-zoom: 1;
max-zoom: 200%;
user-zoom: fixed;
}
`