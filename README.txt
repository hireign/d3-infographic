To deploy to heroku:
1. Install heroku cli
2. Heroku login
3. start docker services
4. move to the folder with the Dockerfile
5. heroku container:login
6. heroku create <app-name>
7. heroku container:push web --app <app-name> //step 7 and 8 are also used to push changes
8. heroku container:release web -a <app-name>
9. heroku open -a <app-name>

To deploy using Docker:
1. docker build --tag d3-infographic .
2. docker run -d -p 8080:8082 --name d3-infographic <image-id>
To stop and remove
1. docker stop <container-name/id>
2. docker rm <container-name/id>
