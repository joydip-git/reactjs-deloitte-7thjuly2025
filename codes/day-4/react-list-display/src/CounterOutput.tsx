const CounterOutput = (propObj: Readonly<{ countData: number, counterHandlerFn: () => void }>) => {
    return (
        <>
            <span>Count: &nbsp;{propObj.countData}</span>
            <br />
            <button type='button' onClick={
                (e) => {
                    console.log(e);
                    propObj.counterHandlerFn()
                }
            }>
            Increase
        </button >
        </>
    )
}

export default CounterOutput