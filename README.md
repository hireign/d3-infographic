# Project 
Hello!

This project is an attempt to rebuild ISACA's barometer report on digital transformation by creating an interactive visualization using D3.js, JavaScript, and Node.js. It also provides a good demonstration of modern JavaScript ES6 features such as promises, arrow functions, callback functions, function binding, module imports, etc.

The highlight of the project is use of D3.js to create interactive and informative visualizations. D3.js is an amazing JavaScript library to create high level visualizations. If you are interested in learning more about D3.js, checkout: https://d3js.org/

Feel free to check out the live version here: https://d3-infographic.herokuapp.com/

## Author
[Hirenkumar Khant](hr266981@dal.ca)

## Technical Stack
* The webiste uses D3.js to render visualizations on the frontend with the support of JavaScript ES6 functions.
* Backend utilizes Express.js on top of Node.js for server creation.
* Project uses .csv files for dynamic creation of graph on every instance.
* CSS Media Queries are used for making webpages responsive on every kind of device.

## Deployment
Below are the notes for deployment using Docker and Heroku
### To deploy with Heroku:
1. Install Heroku cli
2. Heroku login
3. Start docker services
4. Move to the folder with the Dockerfile
5. Login to heroku using your credentials
    ``` 
    heroku container:login 
    ```
6. Define a name for your application
    ``` 
    heroku create <app-name> 
    ```
| :memo:        | Steps 7 and 8 are also used to push changes to a running heroku container |
|---------------|:------------------------|
7. Push the application to your Heroku container
    ``` 
    heroku container:push web --app <app-name>
    ```
8. Release the application using the application name you provided
    ``` 
    heroku container:release web -a <app-name> 
    ```
9. Launch the application 
    ``` 
    heroku open -a <app-name> 
    ```

### To deploy using Docker
Deployment notes if you want to deploy using Docker
##### To build the image and deploy the container
1. Build and tag the image
    ``` 
    docker build --tag d3-infographic . 
    ```
2. Deploy the image to a docker container in the -d detached mode on port 8082
    ``` 
    docker run -d -p 8080:8082 --name d3-infographic <image-id> 
    ```
##### To stop and remove the container
1. Stop the running container
    ``` 
    docker stop <container-name/id> 
    ```
2. Remove the stopped container
    ``` 
    docker rm <container-name/id> 
    ```
