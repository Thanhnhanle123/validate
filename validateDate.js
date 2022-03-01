function checkDayValid(date) {
    var arrDate = date.split(' ');
    if(arrDate.length == 1){
        arrDate = date.split('/');
    }
    var day = "";
    var month;
    
    switch (arrDate[0]){
        case "January":
        case "Jan":
        case "1":
                month = 1;
            break;
        case "February": 
        case "Feb":
        case "2":
                month = 2;
            break;
        case "March":
        case "Mar":
        case "3":
                month = 3;
            break;
        case "April":
        case "Apr":
        case "4":
                month = 4;
            break;
        case "May":
        case "5":
                month = 5;
            break;
        case "June":
        case "Jun":
        case "6":
            month = 6;
        break;
        case "July":
        case "Jul":
        case "7":
                month = 7;
            break;
        case "August":
        case "Aug":
        case "8":
                month = 8;
            break;
        case "September":
        case "Sep":
        case "9":
                month = 9;
            break;
        case "October":
        case "Oct":
        case "10":
                month = 10;
            break;
        case "November":
        case "Nov":
        case "11":
                month = 11;
            break;
        case "December":
        case "Dec":
        case "12":
                month = 12;
        break;
    }
    var arrDay = arrDate[1].split('');
    var lengthDay = arrDay.length;
    if(lengthDay == 1) {
        day = arrDay;
    }else{
        var getDay = arrDate[1].split(arrDay[lengthDay - 1]);
        day = getDay[0];
    }
    //get day
    function checkYear(iYear) {
        if ((iYear % 4 == 0 && iYear % 100 != 0) || iYear % 400 == 0) {
            return true;
        }
        return false;
    }
    //get year
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            var formatDay = 31;
        break
        case 4:
        case 6:
        case 9:
        case 11:
            var formatDay = 30;
        break
        case 2:
            if (checkYear(Number(arrDate[2])) == true)
                var formatDay = 29;
            else
                var formatDay = 28;
    }
    if (day <= formatDay && day != 0) {
        return true;
    }
    return false;
}// nếu nhập vào ngày hợp lệ sẽ trả về true ngược lại trả về fasle

