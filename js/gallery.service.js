'use strict'

let gFilterBy = ''

function setMemeFilterBy(searchStr){
    gFilterBy= searchStr
}

function getImgs() {
    if (!gFilterBy) return gImgs
    else{
        console.log('gFilterBy', gFilterBy)
        // const imgsIncludeWord = gImgs.filter(img => img.keywords.includes('baby'))
        const filteredImgs = gImgs.filter(img => img.keywords.includes(gFilterBy))
        return filteredImgs
    }
}