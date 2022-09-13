import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import Code from "./components/Code";
import "./CodeSnippet.css";

export type CodeProps = {
    code: string;
    language: string;
    className: string;
};
const CodeSnippet = () => {
    const code = 'console.log("5" + 1)';
    const language = "javascript";

    const codeRef = useRef(null);

    useEffect(() => {
        if (!codeRef.current) {
            return;
        }
        if (codeRef.current) {
            (window as any).Prism.highlightElement(codeRef.current);
        }
    }, [codeRef.current]);

    return (
        <div className="code-snippet">
            <div className="snippet__banner">
                <div className="banner__button red"></div>
                <div className="banner__button amber"></div>
                <div className="banner__button green"></div>
            </div>
            <Code className="snippet__code" code={code} language={language} />
        </div>
    );
};

export default CodeSnippet;
