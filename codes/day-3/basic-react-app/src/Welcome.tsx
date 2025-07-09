//import { Fragment } from "react";

import type { ChangeEvent } from "react"

type WelcomePropType = {
    messageValue: string,
    dataValue?: number,
    handlerFn: (arg: string) => void
}
const Welcome = (props: Readonly<WelcomePropType>) => {
    //args.messageValue = ''
    const message = props.messageValue + ' with Vit'
    return (
        // <Fragment>
        <>
            <h2>
                {
                    message
                }
            </h2>
            <br />
            {
                props.dataValue ? props.dataValue : 'NA'
            }
            <br />
            <div>
                <label htmlFor="txtMessage">New Message: &nbsp;</label>
                <input
                    type="text"
                    id="txtMessage"
                    value={props.messageValue}
                    style={{ width: '500px' }}
                    onChange={
                        (e: ChangeEvent) => {
                            const inputElement = e.target as HTMLInputElement
                            props.handlerFn(inputElement.value)
                        }
                    } />
            </div>
        </>
        //</></Fragment>
    )
}

export default Welcome