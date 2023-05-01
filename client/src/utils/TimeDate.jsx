export const getCurrentDateAndTime = () => {
    const todaysDate = new Date();
    // Break it down into day/weeks/years
    let yyyy = todaysDate.getFullYear();
    let mm = todaysDate.getMonth() + 1; // starts at 0
    let dd = todaysDate.getDate();
    // add 0's to the start of days and months if needed
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    // Return formated date
    const formatedDate = dd + "/" + mm + "/" + yyyy;

    let hh = todaysDate.getHours();
    let min = todaysDate.getMinutes();
    let ss = todaysDate.getSeconds();

    if (hh < 10) hh = "0" + hh;
    if (min < 10) min = "0" + min;
    if (ss < 10) ss = "0" + ss;

    const formatedTime = `${hh}:${min}:${ss}`;
    return { formatedDate, formatedTime };
}