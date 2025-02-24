function resizeimage() {
    var s1 = parseInt(i1.value);
    var s2 = parseInt(i2.value);
    var img = document.getElementById('image');

    img.height = s1;
    img.width = s2;
}