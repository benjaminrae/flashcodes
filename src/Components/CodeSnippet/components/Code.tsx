import React from "react";
import { useEffect, useRef } from "react";
import { CodeProps } from "../CodeSnippet";

const Code = ({ code, language, className }: CodeProps) => {
    const codeRef = useRef(null);

    useEffect(() => {
        if (!codeRef.current) {
            return;
        }
        (window as any).Prism.highlightElement(codeRef.current);
    }, [codeRef.current]);

    return (
        <pre>
            <code ref={codeRef} className={`language-${language} ${className}`}>
                {code}
            </code>
        </pre>
    );
};

export default Code;
