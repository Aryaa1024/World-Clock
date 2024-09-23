async function getData(place) {
    var url = `https://timezone.abstractapi.com/v1/current_time/?api_key=e5fcc444aae34ebb81b8f55bf1c1c3c7&location=${place}`;
    var detail = document.getElementById('detail');
    var res = await fetch(`${url}`).then(response => response.json());
    console.log(res);
    
    var date = res.datetime.split(" ")[0];
    var time = res.datetime.split(" ")[1];
    var location=res.timezone_location;
    console.log(res);
    console.log(date);
    console.log(time);
    detail.style.display="block";
    detail.innerHTML = `Country Name: ${place} <br>Time Zone: ${location}<br>Time: ${time} <br> Date: ${date} <br>`;
}
var pathElements = document.querySelectorAll('.allPaths');
pathElements.forEach(function (pathElements) {
    pathElements.addEventListener('click', function () {
        var id = this.id;
        getData(id);
    });
});