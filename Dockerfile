FROM ubuntu
WORKDIR /home
COPY . .
RUN apt update \
    && DEBIAN_FRONTEND=noninteractive apt upgrade -y
RUN apt install sudo -y
RUN sudo apt install nodejs -y
RUN sudo apt install npm -y
RUN sudo apt install git -y
RUN npm install --global gatsby-cli
RUN npm install -g @sanity/cli
CMD tail -f /dev/null