
export function convert24to12(time) {
    var hours = time.split(':');
    console.log(hours);
    var hrs = hours[0] % 12 || 12
    var min = hours[1];
    return hrs + ':' + min + ' ' + (hours[0] < 12 ? 'AM' : 'PM');
}


