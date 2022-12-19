'use strict'

function onInit() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    addEventListeners()
    renderGallery()
    renderMeme()
}