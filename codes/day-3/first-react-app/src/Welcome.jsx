import PropTypes from 'prop-types'

//args:{ messageValue: message }
const Welcome = (args) => {
    return <h2>{args.messageValue} <br /> {args.dataValue}</h2>
}
Welcome.propTypes = {
    messageValue: PropTypes.string.isRequired,
    dataValue: PropTypes.number
}
export default Welcome