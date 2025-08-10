
# Tiny URL Shortner Service

This is a full phased URL shortening service that allows users to create shortened URLs that redirect to longer URLs. 

It supports the following features
- Custom Aliasing
- Links Expiry
- Hitcount Monitor
- Auto Cache and eviction of redirects

- Analytics (TBD)

Supported in-built in-memory **Bloom filter** to search for **custom alias** if users want to name their links for easy memorizing.

## Tech Stack

- Golang
- Net/Http
- Postgres
- knadh/Goyesql/v2
- Bloom filter
- Redis

There are no additional bloated component has been added, to bulkify the service. Focused on core business idea.

Golang in-built **net/http** server has been used from scratch. Core Middlewares supported to log requests to maintain audit trails and service logs.

Extreamly powerful simple, and efficient, can handle loads at scale.


![Algomaster-TinyURL-Architecture](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4a3996fe-73ab-47b1-9308-e0cf8b3c8157_2372x1372.png)

## Acknowledgements

 - [Bloom Filter Implementation - Sounish Nath](https://github.com/sounishnath003/bloom-filter-scratch-go)
 - [Design URL Shortner service - Algomaster](https://blog.algomaster.io/p/design-a-url-shortener)

## API Reference

#### Create an account

```http
  POST /signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your email adress |
| `password` | `string` | **Required**. Your password |


#### Login into your account

```http
  POST /login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your email adress |
| `password` | `string` | **Required**. Your password |


#### Generate shorten url - v1

```http
  POST /api/v1/shorten
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `original_url` | `string` | **Required**. URL which needs to be shorten |

Note: This endpoint is the scratch endpoint which uses following - 

- MD5 Hashing
- 256 bytes long it later be considered 6 bytes string to encode.
- Base62 Encoding

As per the design systems, at scale system will see huge **hash collision**, which will be bad and in-efficient. However in indeal case - it can generate the trillion shorten urls. 2^67-1.

Characters **A-Za-z0-9** will be considered for the base62 encoding.

#### Generate shorten url - v2

```http
  POST /api/v2/shorten
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `original_url` | `string` | **Required**. URL which needs to be shorten |
| `custom_alias` | `string` | **Required**. Custom alias provided by user. |

Note: This API endpoint works by generating the **Atomic** ID generator. I am not using **Redis** to generate IDs. Rather I am using **Unlogged table**. which means turning off **Write Ahead Logs (WAL)** making postgres faster.

**Sample Input Response:**

![sample-resp](assets/personalBlogs/images/sample-res-1.png)

**Sample Output Response:**
![sample-resp](assets/personalBlogs/images/sample-res-2.png)


**NOTE:** Using the postgres `nextval(sequence)` generator.

#### Check Custom Alias Available

```http
  POST /api/check-alias/{customAlias}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `customAlias` | `string` | **Required**. Custom alias provided by user. It checks and return whether alias is available |

Note: To check the alias availability, I have implemented the **Bloom Filter** - a probabilistic data structure which helps to check about any string existence at scale.

### How does Bloom filter work?

Bloom filters consist of three components:

- bit field
- hash function (or multiple hash functions)
- number of hashing rounds to be performed

This is probabilistic data structure which attempts to answer queries about element’s membership in a certain set. Bloom filters have two operations:

```go
type BloomFilter struct {
	Store    []bool            // to Store Bitset
	Size     int32             // Size of the filters
	mHashers []murmur3.Hash128 // HashFunctions to improve the probabilistic accuracy

	mu sync.Mutex
}

- func (bf *BloomFilter) Add(key stirng) error {...}
- func (bf *BloomFilter) Exists(key stirng) (bool, error) {...}
```

    
#### Redirection to shorturl

```http
  POST /{shortUrl}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `shortUrl` | `string` | **Required**. The short url generated. which will redirect to original url.
 |

Note: If the short url does not exists it throws `404-Not Found` Http error.

```json
{
    "data": null,
    "status": 404,
    "error": "No url found for the given shorten url"
}
```


## Appendix

The additional feature and tech stack are choseen carefully, to **run millions of urls** redirection easily.

- **Load Balancer**: Distributes incoming requests across multiple application servers.

- **Application Servers**: Handles incoming requests for shortening URLs and redirecting users.

- **URL Generation Service**: Generates short URLs, handles custom aliases, and manages link expirations.

- **Redirection Service**: Redirects the users to the original URL.

- **Database**: Stores mappings between short URLs and long URLs.

- **Cache**: Stores frequently accessed URL mappings for faster retrieval.

- **Analytics Service (optional)**: Tracks usage statistics like the number of clicks, geographic location, etc.

### Database ERD Diagram:

![erd-diagram](assets/personalBlogs/images/erd.png)


### URL Generator Service
The primary function of the service is to generate a short, unique URL for each long URL provided by the user.

- Hashing + Base62 Encode
- Atomic Incremental ID Generator + Base62 Encode
- Inmemory (Redis/Memcache) ID Generator + Base62 Encode

## Demo

Insert gif or link to demo



## Environment Variables

To run this project, you will need to add the following environment variables to your go runtime.

- `PORT` - on which the backend service will run
- `JWT_SECRET` - secret for your JWT
- `DB_DRIVER` - postgres DB driver
- `DSN` - postgres DB connection string
- `REDIS_CLIENT_ADDR` - redis client address (host:port)


## Deployment

To install dependencies

```bash
  	go mod tidy
	go mod download -x
	go mod verify
```

To enable the postgres DB and redis

```bash
	docker-compose -f docker.compose.yaml down
	docker-compose -f docker.compose.yaml up --build
```

To run the goserver locally

```bash
    export AppName=url_shortner_service
    go build -ldflags "-s -w" -o bin/$AppName cmd/*.go

    ./bin/$(AppName)
```


To build the docker images

```bash
	docker images
	docker rmi -f $AppName
	docker build -t $AppName -f Dockerfile .

    docker run -ti $AppName
```

![dockerps](assets/personalBlogs/images/dockps.png)


## Authors

- [@sounishnath003](https://www.github.com/sounishnath003)



## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Contributing

Contributions are always welcome!

You are most welcome for any contribution to the project. 
