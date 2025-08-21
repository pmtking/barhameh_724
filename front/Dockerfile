# مرحله build با Node.js
FROM node:18 AS build
WORKDIR /app

# نصب پکیج‌ها
COPY package*.json ./
RUN npm install

# کپی سورس‌کد و build
COPY . .
RUN npm run build

# مرحله نهایی: سرو با Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# اختیاری: کانفیگ Nginx برای SPA
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
