# hello-world
NodeJS project hello world, 
Its a build pipeline to provision a NodeJS on docker, the NodeJS project is hello world from Node site

To run this need,
To run the docker pull command, to pull the docker image container
docker pull shiran600/node-hello-world:latest

After pull the docker image need to run the docker so the server of the nodejs will be in running state
docker run -p 3000:3000 -e NAME=<"REPLACE TO YOUR NAME"> shiran600/node-hello-world:latest

Open the web browser and paste the link
http://127.0.0.1:3000/
