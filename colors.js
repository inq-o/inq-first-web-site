var Links = {
    setColor:function (color){
        var alist = document.querySelectorAll('a:not(#active)');
        var i = 0;
        while(i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}

var Body = {
    setColor:function (color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body'); //필요 없는 코드
    if(self.value==='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('white');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}