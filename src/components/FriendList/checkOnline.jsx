export const checkOnline = (status) => {
    if (status) {
        return 'online'
        // '#38B23E'
    } else {
        return 'offline'
        // '#CC0000'
    }
}