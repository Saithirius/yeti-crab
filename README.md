# YETI-CRAB

Прототип системы ведения заявок
- Для создания новой заявки необходимо заполнить все поля (поле "комментарий" необязательный) в первой строке таблицы и нажать на кнопку "Создать" слева. (ati код должен быть пятизначный)
- Чтобы начать редактировать заявку, нужно два раза кликнуть на нее. Нажать на кнопу "сохранить" слева, для сохранения правок.
- Для сортировки, нужно кликнуть по заголовку столбца, по которому нужно отсортировать.
- По клику на ati код вы перейдете на страницу перевозчика на сайте ati.su

Поле с комментарием ограничено по размерам, при наведении он показывается полностью.
Все заявки сохраняются в localStorage

#Документация REST API

| API Endpoint | Запрос | Тело запроса | Ответ | Описание |
| ---          | ---    | ---          | ---   | --- |
| /requests | get | count (integer - default: 10) | json: { "requests": [RequestType*, ...] } | Получить все заявки |
| | | | resultCode: (0 - successfully, 1 - error) | |
| /request/{number} | get | | json - RequestType* | Получить заявку под номером |
| /request/add | post | json - RequestType* | resultCode: (0 - successfully, 1 - error) | Добавить новую заявку |
| /request/add | put | json - RequestType* | resultCode: (0 - successfully, 1 - error) | Изменить заявку |
| /request/del | delete | number: (integer) | resultCode: (0 - successfully, 1 - error) | Удалить заявку |
| /request/last-number | get |  | lastNumber: (integer) | Получить номер последней заявки |
RequestType* - {"number": integer, "company": string, "ati": integer, "fullName": string, "tel": string, "comment": string, "date": date}
```json
Example:
{
    "number": "235",
    "company": "Название компании", 
    "ati": "23012", 
    "fullName": "Иванов Иван Иванович", 
    "tel": "+7 900 000-00-00", 
    "comment": "Комментарий",
    "date": "02.09.2020, 18:03:34"
}
```