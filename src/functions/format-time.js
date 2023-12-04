

function formatTime(time) {
    const timeInString = String(time)
    const isValida = timeInString.length === 2

    if (isValida) return time

    const newTime = timeInString.padStart(2, '0')
    return newTime
}

export default formatTime