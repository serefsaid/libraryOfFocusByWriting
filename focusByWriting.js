class focusByWriting{
    constructor(id,time){
        this.definedTime = time;
        this.leftTime = time;
        this.focusTextArea = document.getElementById(id);
        this.focusTextArea.addEventListener('input',this.refreshTime.bind(this));
        this.reduceTime();
    }

    refreshTime(){//to refresh when you press a key
        this.leftTime=this.definedTime;
    }

    cleanArea(){//if time is over
        this.focusTextArea.value = '';
        this.reduceTime();
    }

    reduceTime(){
        setTimeout(() => {
            this.leftTime-=1;
            if(this.leftTime>0){
                this.reduceTime();
            }else{
                this.cleanArea();
            }
        }, 1000);
    }
}