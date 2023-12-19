Deployed: https://animation-backend.onrender.com/

# Simple Backend API

This project is a simple backend API built with Node.js and Express. It provides a basic structure for managing characters from various shows (e.g., SpongeBob SquarePants, Spiderman) with functionalities to retrieve character information based on show names or specific character IDs.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/g-testo/animationBackend.git
   ```
2. Navigate to the cloned directory:
   ```bash
   cd animationBackend
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the server using the npm start script:
   ```bash
   npm start
   ```

### Usage

Once the server is running, it will listen on port 8080. You can interact with the API using the following endpoints:

1. **Get All Characters**  
   - **URL:** `/characters`
   - **Method:** `GET`
   - **URL Params:** None
   - **Success Response:**
     - **Code:** 200
     - **Content:** An array of all characters

2. **Get Characters by Show Name**  
   - **URL:** `/characters`
   - **Method:** `GET`
   - **URL Params:** `showName=[string]`
   - **Success Response:**
     - **Code:** 200
     - **Content:** An array of characters filtered by the provided show name

3. **Get Character by ID**  
   - **URL:** `/characters/:id`
   - **Method:** `GET`
   - **URL Params:** `id=[integer]`
   - **Success Response:**
     - **Code:** 200
     - **Content:** The character object with the specified ID

### Testing the API

You can test the API endpoints using tools like [Postman](https://www.postman.com/) or by using `curl` in your terminal. Here are examples using `curl`:

- Fetch all characters:
  ```bash
  curl http://localhost:8080/characters
  ```

- Fetch characters from a specific show (e.g., SpongeBob SquarePants):
  ```bash
  curl "http://localhost:8080/characters?showName=SpongeBob%20SquarePants"
  ```

- Fetch a specific character by ID (e.g., ID 1):
  ```bash
  curl http://localhost:8080/characters/1
  ```

## Contributing

Please feel free to fork this repository, make changes, and submit pull requests. You can also send suggestions for improvements to the project maintainer.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
