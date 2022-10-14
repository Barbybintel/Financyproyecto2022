# ExpenseTrackerApp
This is the full source code

## Youtube Links
Part 1 : https://youtu.be/XERS3j3hx_8 \
Part 2 : https://youtu.be/tGv9q1YgWF0 \
Part 3 : https://youtu.be/KWj5IW_tDa8 \
Part 4 : https://youtu.be/pkXq9jvEZB4 \
Part 5 (Final) : https://youtu.be/D3oKAmmtEZk

## STEPS
First of all cd into frontEnd , then to backend and do "npm i" into both folders to install node modules\
Second , go to backend/server.js and change the port for the cors if you want to\
Third , go to backend and run "npx prisma generate" and then create an .env file for the DATABASE_URL\
See here : https://www.prisma.io/docs/reference/database-reference/connection-urls \
Example : DATABASE_URL=postgresql://janedoe:mypassword@localhost:5432/mydb

## Available Scripts
You need to run progresql and provide the correct DATABASE_URL TO PRISMA!!\
cd into backEnd and run "npm run dev" this script will start both the backend and the frontend

