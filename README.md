#  **Messaging System**
- **React**
- **Deno** 🦕

## **Start**
### **API**
    deno run --allow-net api/mod.ts
---
    docker-compose up --build api

### **UI**
    deno run --allow-net --allow-read ui/mod.ts
---
    docker-compose up --build ui


## **Unit Tests**
    deno test api/test/unit/
