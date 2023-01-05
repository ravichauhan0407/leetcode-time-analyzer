export const ConvertToList = (tags,difficulty,minutes) => {
      let newlist=tags.map((tag)=>
      {
          return {tag:tag,difficulty:difficulty,minutes:minutes}
      })
      return newlist;
}
