MyFirstREST_API

IDE: Web Storm
JS: 8.11.1
JRE: 1.8.0_152-release-1136-b20 amd64

1)—писок заметок:    http://localhost:8080/users/get
 
   ѕустой запрос(Get)
 
 2)ƒобавить заметку:  http://localhost:8080/users/post
 
       «апроса(Post):  {
                         УtitleФ: У“екст заголовкаФ,
                          УtextФ: У“екст заметкиФ
                      }
 
 3)ќбновить заметку:  http://localhost:8080/users/update
 
       «апрос(Put):  {
                         УidФ: Уdrsn9it16Ф,
                         УtitleФ: УЌовый заголовокФ,
                         УtextФ: УЌовый текстФ
                      }
 
 4)”далить заметку:   http://localhost:8080/users/delete
 
    «апрос(Delete):   {
                         УidФ: Уo0la0fbqpФ,
                      }

ƒл€ проверки использовал утилиту Postman.«апустить сервер можно через node server.js.
¬ утилите Postman прописать localhost:8080/users/(get, post, put, delete).