export  class BaseLogger{ //default demedik çünkü bir çok class olacak 
    
    log(data){
        //içi boş çünkü bunun içerisine hangi logu istersek onu atayacağız
        console.log("Default logger : " + data)
    }
}

export  class ElasticLogger extends BaseLogger{ // elastic loggera dedik ki sen bir base loggersın
    log(data){
        console.log("Logged to Elastic" + data)
    }
}
// birden fazla logger uygulması var elastic mongo vs vs biz bunların arayüzleri için
// ayrı ayrı class oluşturuyoruz ve hangisinde loglamak istersek onu kullanıyoruz
// bunun içerisindeki console log logged to mongo ile baselogger içerisindeki
// loglar ezilir ve bu mongo ise mongo içerisindeki log kullanılır
// eğer içerisine yazmazsak baseloggerda olan her şey mongo ve elasticde de uygulanır
export  class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
    
    }
}