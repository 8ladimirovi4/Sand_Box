cd .\video-server\
npm i
node server.js

-------------------------------------------------------------------------------------
Если с сертификатами борода, то в video-server -> certs
openssl genpkey -algorithm RSA -out private-key.pem
openssl req -new -key private-key.pem -out csr.pem
openssl x509 -req -days 365 -in csr.pem -signkey private-key.pem -out certificate.pem
открыть server.js и проверить пути к созданным сертификатам

-------------------------------------------------------------------------------------

Открыть браузер
https://localhost:3001/index