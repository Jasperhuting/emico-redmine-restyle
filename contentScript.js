function setRestyle() {

    const tickets = document.querySelectorAll('.name a');

    for (i = 0; i < tickets.length; i++) {
        const labels = document.createElement("span");
        const textPointsContainer = document.createElement('span');
        const activeUser = tickets[i].parentElement.parentElement.querySelector('.user.active');    
        if (activeUser) {
            activeUser.textContent = tickets[i].parentElement.parentElement.querySelector('.user a').textContent;
        }
        textPointsContainer.classList.add('textPointsContainer');
        labels.classList.add('labels-container');
        const ticketNumberSpan = document.createElement('span');
        ticketNumberSpan.classList.add('ticket-number');
        ticketNumberSpan.textContent = '#' + tickets[i].href.split('/')[tickets[i].href.split('/').length - 1];
        const points = tickets[i].parentElement.parentElement.querySelector('.hours');
        let textpoints = '-';
        if (points) {
            textpoints = points.textContent.replace('sp)', '').replace('(', '');
        }   
        if (textPointsContainer) {
            textPointsContainer.textContent = textpoints;
        }
        if (tickets[i].text.includes('[FRONTEND]')) {
            const label = document.createElement("span");
            label.classList.add('label');
            label.classList.add('FE');
            const text = tickets[i].text.replace('[FRONTEND]','');
            tickets[i].text = text;
            label.textContent = 'FE';
            tickets[i].appendChild(label);
            labels.appendChild(label);
        }
        if (tickets[i].text.includes('[BACKEND]')) {
            const label = document.createElement("span");
            label.classList.add('label');
            label.classList.add('BE');
            const text = tickets[i].text.replace('[BACKEND]','');
            tickets[i].text = text;
            label.textContent = 'BE';
            tickets[i].appendChild(label);
            labels.appendChild(label);
        }
        tickets[i].parentElement.classList.add('has-label')
        tickets[i].appendChild(labels);
        labels.appendChild(ticketNumberSpan);
        labels.appendChild(textPointsContainer);
    }
    
    // document.querySelectorAll('.name a')[0].text
    function singleSelect(e) {
        if (e.target.classList.value !== 'name has-label') {
            return 
        }
        const ticketNumberText = e.target.querySelector('a').href.split('/')[e.target.querySelector('a').href.split('/').length - 1];
        const tempTextarea = document.createElement('textarea');      
        document.body.appendChild(tempTextarea);
        tempTextarea.value = '#' + ticketNumberText;
        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);
        return 
    }
    
    document.addEventListener('click', singleSelect);
    
    
}

if (window.localStorage.getItem('RESTYLE') === '1') {
    document.body.classList.add('restyle');
    setRestyle();
}