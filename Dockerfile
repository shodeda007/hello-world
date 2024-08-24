# Use the official Node.js image from the Docker Hub
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies specified in the package.json
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "server.js"]
