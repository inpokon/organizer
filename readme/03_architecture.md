[<- Назад](../README.md)
# Архитектура приложения

- MongoDB 
- ↑ ↓
- Сервер(Express, Mongoose, Passport) 
- ↑ ↓ 
- Angular

# Авторизация

- Клиет
- ↓(login) ↑(TOKEN) ↓(HTTP Запрос)(Header: TOKEN)
- Сервер
    - Express
    - ↓ ↑(TOKEN)
    - Passport
    - ↓
    - Passport JWT
    
# Модели

- Category
    - name
    - imageSrc
    - user
- Position
    - name
    - cost
    - category
    - user
- User
    - email
    - password
- Order
    - date
    - order
    - list(name, quantity, cost)
    - user

# API_запросы

- Auth
    - /api/login (POST)
    - /api/register (POST)
- Order
    - /api/order (GET)
    - /api/order (POST)
- Category
    - /api/category (GET)
    - /api/category/:id (GET)
    - /api/category/:id (DELETE)
    - /api/category (POST)
    - /api/category/:id (PATCH)
- Position
    - /api/position/:category (GET)
    - /api/position (POST)
    - /api/position/:id (PATCH)
    - /api/position/:id (DELETE)
- Analytics
    - /api/analytics/overview (GET)
    - /api/analytics/analytics (GET)