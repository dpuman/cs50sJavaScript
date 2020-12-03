let count=0
        function counter(){
            count++;
            document.querySelector('h1').innerHTML=count;

        }
        document.addEventListener('DOMContentLoaded',function(){
            document.querySelector('button').onclick=counter;
        })