# Chat Application with Socket.IO in Spring Boot and ReactJS

Welcome to the repository for our Chat Application built with Spring Boot and ReactJS! This project facilitates real-time communication using WebSocket through Socket.IO. Below, you'll find essential information to get started, understand the structure, and contribute to the development of this chat application.

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Running the Application](#running-the-application)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction
This project demonstrates a simple yet powerful chat application leveraging Spring Boot on the backend for server-side logic and ReactJS on the frontend for a dynamic and responsive user interface. The integration of Socket.IO enables real-time bidirectional event-based communication.

## Technologies Used
- **Spring Boot**: A powerful and convention-over-configuration framework for building Java-based, production-grade Spring applications.
- **ReactJS**: A JavaScript library for building user interfaces, making it easy to develop interactive UIs.
- **Socket.IO**: A library for real-time web applications, enabling bidirectional communication between web clients and servers.

## Getting Started
To get started with the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. Navigate to the project directory:
    ```bash
    cd your-repo
    ```

3. Install dependencies:
    ```bash
    npm install    # Install ReactJS dependencies
    ```

    ```bash
    mvn install    # Install Spring Boot dependencies
    ```

## Project Structure
The project is structured with a clear separation between the frontend and backend components. Here's an overview:

- **`backend/`**: Contains the Spring Boot application for server-side logic.
- **`frontend/`**: Houses the ReactJS application for the user interface.
- **`src/`**: Common source directory for both backend and frontend.

## Running the Application
Follow these steps to run the application locally:

1.Client
- npm install (in the react-client folder)
- npm start

2. Server
   - - mvn spring-boot:run (in the spring-ws-server)

Visit `http://localhost:3000` in your web browser to access the chat application.

## Contributing
Contributions are welcome! Please read the [Contribution Guidelines](CONTRIBUTING.md) before submitting pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy chatting! 🚀
