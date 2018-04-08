var express = require('express');
var router = express.Router();

/* GET users listing. */

var arr = new Array();
    router.post('/' + 'post', function (req, res, next) {
        var id = Math.random().toString(36).substr(2, 9)
        var title = req.body.title;
        var tit = new String(title);
        var text = req.body.text;
        var tex = new String(text);
        var title_limit = 30;
        var text_limit = 500;
        var date_create = Math.round(new Date().getTime() / 1000.0);
        var date_update = Math.round(new Date().getTime() / 1000.0);
        if (tit.length <= title_limit && tex.length <= text_limit) {
            function Memo(){
                this.id = id,
                this.title = title,
                this.text = text,
                this.date_create = date_create,
                this.date_update = date_update
            };
            var memo = new Memo();
        }
        else{
            res.send("Условия: title <= 30, а text <= 500!!!")
        }
        arr.push(memo);
        res.send(arr);
    });


router.delete('/' + 'delete', function (req, res){
    var id = req.body.id;
    function ID(arr){
           if (arr.id !== id){
               return arr;
           }
    }
    for (var i = 0; i <= arr.length; i++) {
        var newArray = arr.filter(ID);
        newArray.push();
        while(arr.length > 0) {
            arr.pop();
        }
        arr = newArray.concat();
        res.send(arr);
    }
});

    router.get('/' + 'get', function (req, res) {
        res.send(arr);
});


     router.put('/' + 'put', function (req, res){
         var id = req.body.id;
         var title = req.body.title;
         var tit = new String(title);
         var text = req.body.text;
         var tex = new String(text);
         var title_limit = 30;
         var text_limit = 500;
         var date_update = Math.round(new Date().getTime() / 1000.0);
         if (tit.length <= title_limit && tex.length <= text_limit) {
             function changeMemo(id, title, text) {
                 let item = arr.find(arr => arr.id === id);
                 item.title = title;
                 item.text = text;
                 item.date_update = date_update;
             };
             changeMemo(id , title, text);
             res.send(arr);
         }
         else {
             res.send("Условия: title <= 30, а text <= 500!!!")
         }
});

module.exports = router;
