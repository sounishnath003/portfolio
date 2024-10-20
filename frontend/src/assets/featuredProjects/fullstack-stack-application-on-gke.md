# Full Stack Application on Google Kubernetes Engine (GKE)

This repository contains the code for a full-stack application deployed on Google Kubernetes Engine (GKE). The application consists of the following services:

## Blogs App - GKE Microservices Demo
Made with ❤️ by Sounish Nath using Angular, Golang, Postgresql, Google Kubernetes Engine 🚀. in begineer friendly way.

![gif-demo](assets/featuredProjects/images/fullstack-stack-application-on-gke.gif)

- **go-auth-service:** A Go service responsible for user authentication and authorization.
- **go-blogs-service:** A Go service responsible for managing blog posts.
- **angular-blog-client:** A Angular application that serves as the front-end client for the blog service.


# Start the microservices (locally)

### Build the Docker images 

* Run Postgres db inside Docker (I don't have it natively)
```
sh +x scripts/postgres.sh
```

* Build Auth Service Microservice container
```
cd go-auth-service
make docker-build-push
```

## Kindly Appreciate If you Loved it

Made with ❤️ by Sounish Nath using Angular, Golang, Postgresql, Google Kubernetes Engine 🚀.