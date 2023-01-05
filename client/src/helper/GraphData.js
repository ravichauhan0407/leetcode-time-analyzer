
export const GraphData = (data) => {
    
      let obj={}
      
      data.map((element)=>
      {
           obj[element.tag]={}
      })
      
      data.map((element)=>
      {
           obj[element.tag]['Hard']=[]
           obj[element.tag]['Medium']=[]
           obj[element.tag]['Easy']=[]
      })
      data.map((element)=>
      {
           obj[element.tag][element.difficulty].push(element.minutes)
          
      })
      
      let keys=Object.keys(obj)
    
      let recent=100
    
      let finallist=[]
    
      
      keys.map((key)=>
      {
            let hardsum=0
            let hardlen=Math.min(obj[key]['Hard'].length,recent)
            for(let i=0;i<hardlen;i++)
            {
                hardsum+=obj[key]['Hard'][i]
            }
            let mediumsum=0
            let mediumlen=Math.min(obj[key]['Medium'].length,recent)
            for(let i=0;i<mediumlen;i++)
            {
                mediumsum+=obj[key]['Medium'][i]
            }
            let easysum=0
            let easylen=Math.min(obj[key]['Easy'].length,recent)
            for(let i=0;i<easylen;i++)
            {
                easysum+=obj[key]['Easy'][i]
            }
            hardlen=Math.max(hardlen,1)
            easylen=Math.max(easylen,1)
            mediumlen=Math.max(mediumlen,1)
            
            finallist.push({tag:key,Hard:Math.ceil(hardsum/hardlen),Medium:Math.ceil(mediumsum/mediumlen),Easy:Math.ceil(easysum/easylen)})
      })
      
   
     return finallist    
}
