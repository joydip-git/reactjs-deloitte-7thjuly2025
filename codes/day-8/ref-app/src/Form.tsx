//import { forwardRef, type ForwardedRef, type RefObject } from "react"
import { type RefObject } from "react"

type FormPropsType = {
    inputHandler: (val: string) => void,
    validationHandler: () => void,
    show: boolean,
    inputRef: RefObject<HTMLInputElement | null>
}
const Form = ({ inputHandler, validationHandler, show, inputRef }: Readonly<FormPropsType>) => {
    return (
        <>
            <label htmlFor="txtValue">Value: &nbsp;</label>
            <input type="text" id='txtValue' onChange={
                (e) => {
                    inputHandler(e.target.value)
                }}
                ref={inputRef}
                onBlur={validationHandler} />

            {
                show && (
                    <span id='errorSpan'>
                        please enter value
                    </span>
                )
            }
        </>
    )
}

// const Form = forwardRef(
//     ({ inputHandler, validationHandler, show }: Readonly<FormPropsType>, inputRef: ForwardedRef<HTMLInputElement>) => {
//         return (
//             <>
//                 <label htmlFor="txtValue">Value: &nbsp;</label>
//                 <input type="text" id='txtValue' onChange={
//                     (e) => {
//                         inputHandler(e.target.value)
//                     }}
//                     ref={inputRef}
//                     onBlur={validationHandler} />

//                 {
//                     show && (
//                         <span id='errorSpan'>
//                             please enter value
//                         </span>
//                     )
//                 }
//             </>
//         )
//     }
// )


export default Form