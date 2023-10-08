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
