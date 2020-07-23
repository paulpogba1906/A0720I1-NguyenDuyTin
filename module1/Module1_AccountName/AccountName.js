
function confirmation() {
    let guestname=document.forms['GI']["gname"];
    let IDn=document.forms["GI"]["IDn"];
    let birthd=document.forms["GI"]["birth"];
    let address=document.forms["GI"]["address"];
    let rank=document.forms["GI"]["rank"];
    let attach=document.forms["GI"]["attach"];
    let rentdays=document.forms["GI"]["rentdays"];
    let services=document.forms["GI"]["services"];
    let room=document.forms["GI"]["room"];
    let summoney;
    if(services.value==="Villa"){
        summoney=500*rentdays.value*(1-19/100);
    }
    if(services.value==="House"){
        summoney=300*rentdays.value*(1-19/100);
    }
    if(services.value==="Room"){
        summoney=100*rentdays.value*(1-19/100);
    }
    document.getElementById("inra").innerHTML = "<table class='cssTable' border='5px'>" +
        "<tr>" +
        "<th colspan='2' style='color: red'>XÁC NHẬN ĐẶT PHÒNG/ BOOKING CONFIRMATION</th>"+
        "</tr>"+
        "<tr>" +
        "<td>Tên khách hàng/ Guest name: </td>"+
        "<td>" + guestname.value +"</td>"+
        "</tr>"+
        "<tr>"+
        "<td>Số CMND/ID Number: </td>"+
        "<td>" + IDn.value + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>Ngày sinh/ Date of birth: </td>"+
        "<td>" + birthd.value + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>Địa chỉ/ Address: </td>"+
        "<td>" + address.value + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>Hạng khách hàng/ Customer class: </td>"+
        "<td>" + rank.value + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>Số lượng đi kèm/Quantity attached: </td>"+
        "<td>" + attach.value + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>Số ngày thuê/ Rentdays: </td>"+
        "<td>" + rentdays.value + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>Loại dịch vụ/ Services: </td>"+
        "<td>" + services.value + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>Loại phòng/ Room type: </td>"+
        "<td>" + room.value + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>Tổng tiền/ Total Amount: </td>"+
        "<td style='color: red'>" + summoney + "$</td>"+
        "</tr>"+
        "</table>"
}