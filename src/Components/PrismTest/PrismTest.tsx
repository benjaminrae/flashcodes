import React, { useEffect, useRef } from "react";
// import "./PrismTest.css";

const PrismTest = () => {
    const code = "const variable = 'variable'";

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
            <div className="prism-tests__container">
                <div className="prism-tests__question"></div>
                <div className="prism-tests__answer"></div>
                <div className="prism-tests__buttons">
                    <pre>
                        <code ref={codeRef} className="language-javascript">
                            {code}
                        </code>
                    </pre>
                    {/* <Button
                    text="Correct"
                    onClick={onCorrectClick}
                />
                <Button
                    text="Incorrect"
                    onClick={onIncorrectClick}
                />
                <Button
                    text="See Question"
                    onClick={onSeeQuestionClick}
                /> */}
                </div>
            </div>
        </div>
    );
};

export default PrismTest;
