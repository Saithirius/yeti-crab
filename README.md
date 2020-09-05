# YETI-CRAB

Прототип системы ведения заявок
- Для создания новой заявки необходимо заполнить все поля (поле "комментарий" необязательный) в первой строке таблицы и нажать на кнопку "Создать" слева. (ati код должен быть пятизначный)
- Чтобы начать редактировать заявку, нужно два раза кликнуть на нее. Нажать на кнопу "сохранить" слева, для сохранения правок.
- Для сортировки, нужно кликнуть по заголовку столбца, по которому нужно отсортировать.
- По клику на ati код вы перейдете на страницу перевозчика на сайте ati.su

Поле с комментарием ограничено по размерам, при наведении он показывается полностью.
Все заявки сохраняются в localStorage

#Документация REST API

| API Endpoint | Запрос | Тело запроса | Ответ | 
| ---          | ---    | ---          | ---   |
| /requests | get | count (integer - default: 10) | json: { "requests": [RequestType*, ...] } |
| | | | resultCode: (0 - successfully, 1 - error) |
| /requests/add | post | json - RequestType* | resultCode: (0 - successfully, 1 - error) |
| /requests/add | put | json - RequestType* | resultCode: (0 - successfully, 1 - error) |
| /requests/del | delete | number: (integer) | resultCode: (0 - successfully, 1 - error) |
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