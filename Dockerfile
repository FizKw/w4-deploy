FROM node:20 

RUN echo $STUDENT_NAME
RUN echo $STUDENT_NIM

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]



# TODO
