# CodeFusion

**CodeFusion** is a real-time collaborative coding platform designed to bring developers together to work on code simultaneously. With features like live editing, chat, and version control, CodeFusion makes remote collaboration seamless and efficient.

## Features

- **Real-Time Collaboration**: Multiple users can edit the same code file simultaneously. Changes are reflected instantly for all participants.
- **Live Chat**: Integrated chat feature to discuss ideas and troubleshoot in real-time.
- **Project Management**: Create and manage multiple coding projects with ease.
- **Version Control**: Track changes and revert to previous versions of your code.
- **Responsive Design**: Built with Tailwind CSS for a seamless experience across all devices.
- **Secure Authentication**: User authentication to ensure project security and control access.
- **Code Execution (Optional)**: Run code in a sandboxed environment directly within the platform.

## Technology Stack

- **Frontend**: React with TypeScript
- **Backend**: Express with TypeScript
- **Real-Time Communication**: WebSockets
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/codefusion.git
   cd codefusion
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:

   ```env
   DATABASE_URL=your_postgresql_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

5. **Access the Application**
   Open your browser and go to `http://localhost:3000`

## Usage

1. **Sign Up / Log In**
   Create an account or log in with your existing credentials.

2. **Create or Join a Project**
   Start a new coding project or join an existing one via an invitation link.

3. **Collaborate**
   Open code files, start editing, and see changes in real-time. Use the chat feature to communicate with your team.

4. **Manage Versions**
   Save your progress and revert to previous versions if needed.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request with a detailed description of your changes.

## License

CodeFusion is licensed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

We would like to thank all the contributors and the open-source community for their support and inspiration.
