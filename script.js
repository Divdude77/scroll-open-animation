document.addEventListener('scroll', handleScroll);

prevY = 0;
scrollIndex = 0;
lifting = false;
up = 50;
rotation = -100;
function handleScroll(event) {
    if (window.scrollY > prevY) {
        if (scrollIndex < 2000) {
            scrollIndex += 10;
            rotation += 1;
            if (lifting) {
                up -= 0.5;
            }
        }
    }

    else if (window.scrollY < prevY) {
        if (scrollIndex > 0) {
            scrollIndex -= 10;
            rotation -= 1;
            if (lifting) {
                up += 0.5;
            }
        }
    }

    if (scrollIndex >= 2000) {}

    else if (scrollIndex >= 1050) {
        lifting = true;
        if (up >= 50) {up = 50;}
        document.querySelector('#cap').style.top = up + '%';
        document.querySelector('#cap-shadow').style.top = up + 15 + '%';
    }

    else if (scrollIndex <= 1000) {
        lifting = false;
        if (rotation >= 0) {
            rotation = -100;
        }
        else if (rotation <= -100) {
            rotation = 0;
        }
        document.querySelector('#cap-texture').style.left = rotation  + '%';
    }
    
    window.scroll(window.scrollX, 1);
    prevY = window.scrollY;
}