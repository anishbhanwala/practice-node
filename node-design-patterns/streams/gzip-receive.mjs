import { createServer } from 'http'
import { basename, join } from 'path'
import { createGunzip } from 'zlib'
import { createWriteStream } from 'fs'


const server = createServer((req, res) => {
      console.log(req.headers)
      const filename = basename(req.headers['x-filename'])
      const destFilename = join('received_files', filename)
      console.log(`File request received: ${destFilename}`)      


      req.pipe(createGunzip())
         .pipe(createWriteStream(destFilename))
	 .on('finish', ()=> {
	    console.log('Sending response');
	    res.writeHead(201, {'Content-Type': 'text/plain'})
	    res.end('OK\n')
	    console.log(`File saved: ${destFilename}`)
	 })
})

server.listen(3000, () =>
	console.log('Listening on http://localhost:3000'))