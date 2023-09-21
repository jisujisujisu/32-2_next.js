import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

function Highlight ({code, language = "js"}) {
    const {asPath} = useRouter();

    useEffect(() => {
        hljs.registerLanguage
    })
}