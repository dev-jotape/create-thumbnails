# Thumbnails

Rest API created for generate Thumbnails.

# Technologies used

 1. Node
 2. Express
 3. PostgreSQL
 4. Docker
 5. Typescript


# Get started
### Install
`yarn` OR 
`npm install`

If you are using macOS, reinstall the sharp lib to be compatible with Docker, by running:
`npm install --arch=x64 --platform=linux sharp`

### Run
`docker-compose up`

# Usage
## Upload Image

POST: http://localhost:4000/images

formData: image

Body:
```json
{
    "description": "image description"
}
```

Response: 
```json
{
    "message": "File uploded successfully",
    "image": {
        "description": "test",
        "imageUrl": "uploads/1624721830963.jpg",
        "thumbnailLarge": "uploads/thumbnails-large-test.jpg",
        "thumbnailSmall": "uploads/thumbnails-small-test.jpg",
        "id": 4
    }
}
```

## List Images

GET: http://localhost:4000/images

Response: 
```json
[
    {
        "id": 3,
        "description": "teste",
        "imageUrl": "uploads/1624719514112.jpg"
    },
    {
        "id": 4,
        "description": "teste",
        "imageUrl": "uploads/1624721830963.jpg"
    }
]
```

## Get Image by ID

GET: http://localhost:4000/images/3

Response: 
```json
{
    "id": 3,
    "description": "teste",
    "imageUrl": "uploads/1624719514112.jpg",
    "thumbnailSmall": "uploads/thumbnails-small-0280c1d634545bc4ca688b2df3276ca4.jpg",
    "thumbnailLarge": "uploads/thumbnails-large-0280c1d634545bc4ca688b2df3276ca4.jpg"
}
```