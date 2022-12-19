'use strict'

var gIsGallery = true


//TODO-5 presenting 2 images

function renderGallery() {
    const elGallery = document.querySelector('.gallery')
    // const imgs = getImgs()
    const imgs = getImgs()
    console.log('imgs', imgs)
    let strHTMLs = []
    imgs.forEach(img => {
        strHTMLs.push(`<img src="${img.url}" data-id="${img.id}" class="img img${img.id}" onclick="onImgSelect(this)">`)
    })
    elGallery.innerHTML = strHTMLs.join('')
}

//TO-DO-6 when selecting img from gallery using funciton bellow

function onImgSelect(img) {
    const imgId = +img.dataset.id
    const selectedImg = gImgs.find(img => img.id === imgId)
    gMeme.selectedImgId = selectedImg.id
    // clearCanvasLines()
    setDefaultMemeLines()
    clearInputTxt()
    renderMeme()
    gIsGallery = false
    toggleDisplayEditorOrGallery()
    const navGallaryBtn = document.querySelector('.gallery-btn')
    navGallaryBtn.classList.remove('active')
}

function toggleDisplayEditorOrGallery() {
    const elEditor = document.querySelector('.editor')
    const elGallery = document.querySelector('.gallery-section')

    elEditor.style.display = (gIsGallery) ? 'none' : 'flex'
    elGallery.style.display = (gIsGallery) ? 'block' : 'none'
}

function onSwitchToGallery(navGallaryBtn) {
    console.log('gIsGallery', gIsGallery)
    if (gIsGallery) return
    else {
        toggleMenu()
        gMeme.lines.splice(0,gMeme.lines.length)
        gIsGallery = !gIsGallery
        navGallaryBtn.classList.add('active')
        toggleDisplayEditorOrGallery()
    }
}

function onKeyUpSearch(){
    setTimeout(()=>{
        const searchStr = document.querySelector('.search-input').value
        const filterBy = setMemeFilterBy(searchStr)
        renderGallery()
        // const searchedMeme = getMemes(inputTxt)
    },1500)
    // console.log('filteredImgs', filteredImgs)   
}

// function setMemeFilterBy(searchStr){

// }