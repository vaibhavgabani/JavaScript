function count()
        {
            var c = document.getElementById("item")
            ans.innerHTML += "<br><br><br>" + "Total Number of Items in Dropdown List : " + c.length + "<br><br>" + "All Items Are : " + "<br>";

            for (let i=0; i<c.length; i++)
            {
                ans.innerHTML += "<br>" + c.options[i].text;
            }
        }