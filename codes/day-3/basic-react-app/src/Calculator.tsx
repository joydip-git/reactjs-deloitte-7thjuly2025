import { useState } from "react"

const Calculator = () => {
    const [firstInput, setFirstInput] = useState(0)
    const [secondInput, setSecondInput] = useState(0)
    const [result, setResult] = useState(0)
    const [choice, setChoice] = useState(0)

    const resultHandler = () => {
        switch (choice) {
            case 1:
                setResult(firstInput + secondInput)
                break;

            case 2:
                setResult(firstInput - secondInput)
                break;

            case 3:
                setResult(firstInput * secondInput)
                break;

            case 4:
                setResult(firstInput / secondInput)
                break;

            default:
                break;
        }
    }
    return (
        <>
            <form>
                <fieldset>
                    <legend>Calculator:</legend>
                    <div>
                        <label htmlFor="radioAdd">Add &nbsp;</label>
                        <input type="radio" name="calcradios" id="radioAdd" onChange={() => setChoice(1)} />

                        &nbsp;&nbsp;&nbsp;
                        <label htmlFor="radioSub">Subtract &nbsp;</label>
                        <input type="radio" name="calcradios" id="radioSub" onChange={() => setChoice(2)} />

                        &nbsp;&nbsp;&nbsp;
                        <label htmlFor="radioMulti">Multiply &nbsp;</label>
                        <input type="radio" name="calcradios" id="radioMulti" onChange={() => setChoice(3)} />

                        &nbsp;&nbsp;&nbsp;
                        <label htmlFor="radioDiv">Divide &nbsp;</label>
                        <input type="radio" name="calcradios" id="radioDiv" onChange={() => setChoice(4)} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="txtFirst">First:&nbsp;</label>
                        <input type="text" id='txtFirst' value={firstInput}
                            onChange={(e) => {
                                if (e.target.value && e.target.value !== '')
                                    setFirstInput(+e.target.value)
                            }} />
                    </div>
                    <div>
                        <label htmlFor="txtSecond">Second:&nbsp;</label>
                        <input type="text" id='txtSecond' value={secondInput}
                            onChange={(e) => {
                                if (e.target.value && e.target.value !== '')
                                    setSecondInput(+e.target.value)
                            }} />
                    </div>
                    <div>
                        <input type="button" value="Calculate" onClick={resultHandler} />
                    </div>
                </fieldset>
            </form>
            <br />
            {/* <ResultComp resultValue={result} /> */}
            <div>
                <label htmlFor="txtResult">Result:&nbsp;</label>
                <input type="text" id='txtResult' value={result} readOnly />
            </div>
        </>
    )
}

export default Calculator