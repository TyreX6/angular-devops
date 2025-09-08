FROM nginx:alpine

# Copy built Angular app to Nginx html folder
COPY ./dist/angular-devops/browser /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
