import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import "./PrismTest.css";

const PrismTest = () => {
    const code = 'console.log("5" + 1)';

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
        <div className="prism-test">
            <div className="prism-test__container">
                <div className="prism-test__question">
                    What's the output of this code?
                </div>
                <div className="prism-test__answer"></div>
                <div className="prism-test__snippet">
                    <pre>
                        <code
                            ref={codeRef}
                            className="language-javascript snippet-text"
                        >
                            {code}
                        </code>
                    </pre>
                </div>
                <Button text="Check" onClick={() => {}} />
            </div>
        </div>
    );
};

export default PrismTest;
