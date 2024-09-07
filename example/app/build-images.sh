 
# Just build frontend and backend 
# docker build -t frontend frontend/
# docker build -t backend backend/


# Build and push to microk8s
sudo docker build -t localhost:32000/frontend:latest frontend 
sudo docker build -t localhost:32000/backend:latest backend 

sudo docker push localhost:32000/frontend:latest
sudo docker push localhost:32000/backend:latest