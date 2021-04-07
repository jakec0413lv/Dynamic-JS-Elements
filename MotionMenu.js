ActionButton = document.getElementById('learn-more');

ActionButton.addEventListener("mouseover", menuShift)

let x = 200;
let y = 100;


function menuShift() {
        document.getElementById('button-1').style.display = 'block';
        document.getElementById('button-2').style.display = 'block';
        document.getElementById('button-3').style.display = 'block';
        document.getElementById('button-4').style.display = 'block';

        let id = setInterval(directionShift, 15);

        function directionShift(){
            if(y === 0){ 
                clearInterval(id);
            }

            x = x - 10;
            y = y - 5;

            document.getElementById('button-1').style.left = x + 'px';
            document.getElementById('button-2').style.left = y + 'px';
            document.getElementById('button-3').style.right = y + 'px';
            document.getElementById('button-4').style.right = x + 'px';

            ActionButton.removeEventListener("mouseover", menuShift);
        }
}

