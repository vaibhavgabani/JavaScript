function parts() {
    var str = p1.value;
    var proto = str.substring(0, str.lastIndexOf("://"));
    var domain = str.substring(str.lastIndexOf("://") + 3, str.lastIndexOf("/"));
    var page = str.substring(str.lastIndexOf("/") + 1, str.lastIndexOf("."));
    var ext = str.substring(str.lastIndexOf(".") + 1);

    alert("\n" + "Protocol is : " + proto + "\n" + "Domain is : " + domain + "\n" + "Page is : " + page + "\n" + "Extention is : " + ext);
}