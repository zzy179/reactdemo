const emojiList= require('../emojiList.json')

export default function emojiFilter(search, max) {
  return emojiList.filter((item) => {
    if (item.title.includes(search)) {
      return true
    }
    if (item.keywords.includes(search)) {
      return true
    }
  }).slice(0, max)
}
