/**
 * 格式化播放次数，以万为单位
 * @param number  播放次数
 * @returns
 */
export function formatCount(number: number) {
  if (number > 100000) {
    let count = (number / 10000).toString()
    count = count.split('.')[0]
    return count + '万'
  }
  return number
}

/**
 * 格式化请求图片的大小
 * @param url 图片地址
 * @param width 图片宽度
 * @param height 图片高度
 * @returns
 */
export function formatImgUrl(
  url: string,
  width: number,
  height: number = width
) {
  return url + `?param=${width}x${height}`
}

/**
 * 将毫秒转化为分秒 mm:ss
 * @param {number} time 传入的时间（毫秒）
 * @returns
 */
export function formatTime(time: number) {
  const timeSeconds = time / 1000
  const minute = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds) % 60
  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')
  return `${formatMinute}:${formatSecond}`
}
