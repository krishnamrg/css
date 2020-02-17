const clockDiv = document.querySelector('.clock');

const tick = () => {
    const dt = new Date();
    clockDiv.innerHTML = `
        <span>${dt.getHours()}</span> :
        <span>${dt.getMinutes()}</span> :
        <span>${dt.getSeconds()}</span>
    `;
}

setInterval(tick, 1000);