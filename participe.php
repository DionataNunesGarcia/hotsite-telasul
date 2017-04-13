<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>TelaSul</title>
        <?php
        include './includes/metas.php';
        ?>

    </head>
    <body>
        <?php
        include './includes/menu.php';
        ?>
        <section class="content">
            <div class="row no-margin">
                <div class="container">
                    <?php
                    include 'presentao-natal.php';
                    ?>
                    <?php
                    include 'cadastro.php';
                    ?>
                    
                </div>
            </div>
        </section>
        <?php
        include './includes/footer.php';
        ?>
    </body>
</html>
