 backend 
 app=>api>categories=>route.ts(test)
 yarn add prisma @prisma/client
 npx prisma init --datasource-provider sqlite
 docker download

 C:\Windows\System32>


 dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart


version: '3'
services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: myuser
      POSTGRES_PASSWORD: mypassword
      POSTGRES_DB: mydb
    ports: 
      - 5432:5432



cd src/docker
 docker compose up
 schema.prisma (model set up)
 * open the docker
 npx prisma migrate dev
 npx prisma studio
 test for categories 