# arrrrventory

this is a simple app that detects ar.js markers, scans qr-codes within, queries our office's inventory api for metadata and displays
the result as an augmented reality overlay

used libraries:

* ar.js for (almost) everything
** uses three.js for 3d rendering
* qrcode.js / instascan for qr code reading

to run: node src/index.js