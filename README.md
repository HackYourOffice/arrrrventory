# arrrrventory

this is a simple app that detects ar.js markers, scans qr-codes within, queries our office's inventory api for metadata and displays
the result as an augmented reality overlay

used libraries:

* ar.js for (almost) everything (which uses three.js for 3d rendering)
* qrcode.js / instascan for qr code reading

to run: 
* $ node src/index.js
* open localhost:3000 in browser

to generate a qr code, simply use https://jeromeetienne.github.io/AR.js/three.js/examples/arcode.html