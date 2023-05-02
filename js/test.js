/*$(function () {
   let
       container = $('.footer__info'), // ссылка на контейнер
       content = "" // html внутри контейнера
       tasksFile = "https://raw.githubusercontent.com/17Sergey/alpha/main/xml/contacts.xml"; // файл с информацией

   // GET запрос на получение данных из xml файла
   const RequestObject = {

       url: tasksFile,
       method: 'GET',
       dataType: 'xml',
       async: true,
       success: (resp) => {
           // найти все и пройтись
           // сформировав заполненный данными html шаблон

           $(resp).find("contacts").children().each((index, item) => {
               content += `<p>${item.textContent}</p>`;
           })

           // добавляем в контейнер содержимое шаблона
           container.html(content);
       },

       // ошибку выводим в консоль
       error: (error) => console.log(error)
   }

   // здесь непосредственно выполняем запрос
   $.ajax(RequestObject);

});*/


const Connect = new XMLHttpRequest(); // у конструктора нет аргументов

const pName = document.getElementById('p_xml_data_1');
const pAdress = document.getElementById('p_xml_data_2');
const pCopyright = document.getElementById('p_xml_data_3');

Connect.open('GET', '/data.xml', false); //HTTP-метод, URL, куда отправляется запрос, если указать false, тогда запрос будет выполнен синхронно
Connect.setRequestHeader('Content-Type', 'text/xml');
Connect.send(null);

var TheDocument = Connect.responseXML;

var fullName =
  TheDocument.getElementsByTagName('name')[0].textContent.toString();
var Adress =
  TheDocument.getElementsByTagName('address')[0].textContent.toString();
var Copyright = TheDocument.getElementsByTagName('copyright')[0].textContent.toString();

pName.innerHTML = `${fullName}`;
pAdress.innerHTML = `${Adress}`;
pCopyright.innerHTML = `${Copyright}`;