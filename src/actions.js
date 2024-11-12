export const inc = () => {return {type:"INC"}}
export const dec = () => {return {type:"DEC"}}
export const inc5 = () => {return {type:"INC5"}}
export const dec5 = () => {return {type:"DEC5"}}
export const rnd = (value) => ({type: "RND", payload: value})