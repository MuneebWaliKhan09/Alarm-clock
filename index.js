

        var audio = new Audio("alrm.wav")


        let set = document.getElementById("set");
        let cls = document.getElementById("cls");
        let mint = document.getElementById("mint");
        let sec = document.getElementById("sec");
        let bell = document.getElementById("bell");

        set.onclick = () => {

            let p = prompt("Type Time in seconds choose from here [5 , 10 , 15 , 20 ]");
            p = Number.parseInt(p);

            if (p == 10) {
                alert("Your Alarm is set Now for 10 sec");

                setInterval(() => {
                    mint.innerHTML = p * 10 / 10;
                    let a =  p--;
                   if(a == 0){

                        p++;
                   }
                }, 1000);


                setTimeout(() => {
                    audio.play();
                    bell.src = "ring_bell.svg";
                }, 10000);
            }

            else if (p == 5) {

                alert("Your Alarm is set Now for 5 sec");

                setInterval(() => {
                    mint.innerHTML = p * 5 / 5;
                    let b =  p--;
                   if(b == 0){

                        p++;
                   }
                }, 1000);


                setTimeout(() => {
                    audio.play();
                    bell.src = "ring_bell.svg";
                }, 5000);
            }

            else if (p == 15) {
                alert("Your Alarm is set Now for 15 sec");

                setInterval(() => {
                    mint.innerHTML = p * 15 / 15;
                    let c =  p--;
                   if(c == 0){

                        p++;
                   }
                }, 1000);


                setTimeout(() => {
                    audio.play();
                    bell.src = "ring_bell.svg";
                }, 15000);
            }

            else if (p == 20) {
                alert("Your Alarm is set Now for 20 sec");

                setInterval(() => {
                    mint.innerHTML = p * 15 / 15;
                   let d =  p--;
                   if(d == 0){

                        p++;
                   }
                }, 1000);

                setTimeout(() => {
                    audio.play();
                    bell.src = "ring_bell.svg";
                }, 20000);
            }
        }


        cls.onclick = () => {
            audio.pause();
            alert("Alarm is paused");
            bell.src = "bell_of.svg";
            location.reload();
        }

