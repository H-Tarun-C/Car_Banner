var newElement = document.createElement('li');
newElement.innerText = 'service';
newElement.classList.add('option-item');

var get = document.getElementById('menu-option');

get.append(newElement);


var icon = document.createElement('i');
icon.classList.add('fa','fa-snapchat');

var icons = document.getElementById('icons').append(icon);

var hoverElement = document.getElementById('slider-heading');

hoverElement.addEventListener('mouseenter', function()

    {
        hoverElement.style.color = 'rgb(205 95 40)';
    });

hoverElement.addEventListener('mouseleave', function()

    {
        hoverElement.style.color = 'white';
    });