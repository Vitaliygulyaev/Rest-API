# Rest-API

IDE: Web Storm
JS: 8.11.1
JRE: 1.8.0_152-release-1136-b20 amd64

1)Список заметок:    http://localhost:8080/users/get
 
   Пустой запрос(Get)
 
 2)Добавить заметку:  http://localhost:8080/users/post
 
       Запроса(Post):  {
                         “title”: “Текст заголовка”,
                          “text”: “Текст заметки”
                      }
 
 3)Обновить заметку:  http://localhost:8080/users/update
 
       Запрос(Put):  {
                         “id”: “drsn9it16”,
                         “title”: “Новый заголовок”,
                         “text”: “Новый текст”
                      }
 
 4)Удалить заметку:   http://localhost:8080/users/delete
 
    Запрос(Delete):   {
                         “id”: “o0la0fbqp”,
                      }

Для проверки использовал утилиту Postman.Запустить сервер можно через node server.js.
В утилите Postman прописать localhost:8080/users/(get, post, put, delete).
Весь написанный код в файлах app.js, Server.js, users.js
