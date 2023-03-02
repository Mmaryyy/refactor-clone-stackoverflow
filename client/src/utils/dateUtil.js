export const getTimeGap = (acc) => {
    const now = new Date()
    const past = new Date(acc)
    return parseInt((now.getTime() - past.getTime()) / (60 * 1000)).toLocaleString('ko-KR')
}