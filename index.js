const dayElement = document.getElementById("day");
const progressElement = document.getElementById("progress");

const update = () => {
    const current = new Date();
    const target = new Date("11/18/2021");
    const inTime = target.getTime() - current.getTime();
    const inDay = inTime / (1000 * 3600 * 24);
    const roundedDay = Math.round(inDay * 100) / 100;
    dayElement.innerText = roundedDay;
    progressElement.style.height = `${inDay/365*100}%`
    console.log("aa");
}

update();
setInterval(update,60000);

