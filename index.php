<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CRUD</title>
    <link rel="stylesheet" type="text/css" href="Stylesheet.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
<header>
    <div class="inheader">
        <h1>CRUD - AJAX</h1>
    </div>
</header>
<br><br>
<section id="container">
    <aside>
        <!--De eerste optie-->
            <div id="tab1" class="tabje cool-link js-btn btn">
                <h2 class="tekst">Voeg toe</h2>
            </div>

            <form id="deeltje1" class="js-fade fade-in is-paused" method="action">
                <div class="inputdeel">
                    <p>Voeg een naam toe</p>
                    <input type="text">
                </div>
                <div class="inputdeel">
                    <p>Voeg een achternaam toe</p>
                    <input type="text">
                </div>
                <div class="inputdeel">
                    <p>Voeg een leeftijd toe</p>
                    <input type="text">
                </div>
                <div class="inputdeel">
                    <p>Voeg een soort toe</p>
                    <input type="text">
                </div>
                <br>
            </form>

        </div>
<!--Hoort bij het eerste gedeelte-->

        <!--Einde eerste gedeelte-->

        <div id="tab2" class="tabje cool-link">
            <h2 class="tekst">Wijzig</h2>
        </div>

        <div id="tab3" class="tabje cool-link">
            <h2 class="tekst">Verwijder</h2>
        </div>

    </aside>

    <div class="main">
        <div class="inner-main">
        <div class="main-titel">
            <h2>Gegevens</h2>
        </div>
            <hr>

            <br>
            <table>
                <tr>
                    <th>Naam</th>
                    <th>Achternaam</th>
                    <th>Leeftijd</th>
                    <th>Soort</th>
                    <th class="editbut">Wijzig</th>
                    <th class="delbut">Verwijder</th>
                </tr>

                <div id="list">
                <tr>
                    <td>Shaif</td>
                    <td>Bhaggoe</td>
                    <td>20</td>
                    <td>Student</td>
                    <td  class="editbut"><img src="img/edit.png"></td>
                    <td  class="delbut"><img src="img/del.png"></td>
                </tr>
                </div>


            </table>
        </div>
    </div>

</section>


<script type="text/javascript" src="Button.js"></script>
<!--<script src="ajax_req.js"></script>-->

<footer>


</footer>
</body>
</html>