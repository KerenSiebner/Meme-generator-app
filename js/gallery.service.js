'use strict'

let gFilterBy = ''

function setMemeFilterBy(searchStr){
    gFilterBy= searchStr
}

function getImgs() {
    if (!gFilterBy) return gImgs
    else{
        console.log('gFilterBy', gFilterBy)
        const regex = new RegExp(gFilterBy,'i')
        const filteredImgs = gImgs.filter(img =>regex.test(img?.keywords))
        // const filteredImgs = gImgs.filter(img => img.keywords.includes(gFilterBy))
        return filteredImgs
    }
}