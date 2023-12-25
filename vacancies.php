<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Вакансии</title>
</head>

<body>

<main class="container">
    <h1 class="vacancies_header">Вакансии</h1>

    <section class="vacancies-filter">
        <a class="vacancies-filter_btn" href="">Офисные работники</a>
        <a class="vacancies-filter_btn" href="">Строители</a>
        <a class="vacancies-filter_btn" href="">Производство</a>
        <label class="vacancies-filter_label">
            <input class="vacancies-filter_input" type="text" placeholder="Поиск по вакансии">
        </label>
    </section>

    <section class="vacancies_item-wrapper">

        <?php for ($j = 0; $j < 4; $j++) { ?>
            <div class="vacancies_item" data-vacancies-item>
                <div class="vacancies_item_status">Офисные работники</div>
                <div class="vacancies_item_job-title">
                    <p class="vacancies_item_job-title-item"><span>Должность:</span> Бухгалтер</p>
                    <p class="vacancies_item_job-title-item"><span>Зарплата:</span> от 35 тысяч/мес.</p>
                    <p class="vacancies_item_job-title-item"><span>График:</span> 5/2, 2/2, с 8:00 до 16:00</p>
                </div>
                <hr class="vacancies_item_dividing-line">
                <div class="vacancies_item_obligation-wrapper" data-vacancies-item-obligation>
                    <?php for ($i = 0; $i < 3; $i++) { ?>
                            <div class="vacancies_item_obligation">
                                <p class="vacancies_item_obligation_header">Требования:</p>
                                <ul class="vacancies_item_obligation_item-wrapper">
                                    <li class="vacancies_item_obligation-item">
                                        Проработка ТЗ объекта Подбор
                                    </li>
                                    <li class="vacancies_item_obligation-item">
                                        оборудования для проекта
                                    </li>
                                    <li class="vacancies_item_obligation-item">
                                        Проектирование в САПР. Разработка технической СУТП в Eplan, AutoCAD, Компас и т.п.
                                    </li>
                                </ul>
                            </div>
                    <?php } ?>
                </div>
                <div class="vacancies_item_btn-wrapper">
                    <button class="vacancies_item_btn-hidden" data-vacancies-item-btn-hidden>Развернуть</button>
                    <button class="vacancies_item_btn-send-cv btn-red">Отправить резюме</button>
                </div>
            </div>
        <?php } ?>

    </section>

    <section class="vacancies-contacts">
        <h3 class="vacancies-contacts_header">Не нашли вакансию? <br> Отправьте нам свое резюме!</h3>
        <div class="vacancies-contacts_item">
            Телефон
            <a class="vacancies-contacts_tel" href="tel:+7 (343) 271-40-45">+7 (343) 271-40-45</a>
        </div>
        <div class="vacancies-contacts_item">
            E-mail
            <a class="vacancies-contacts_mail" href="mailto:пишем почту">пишем почту</a>
        </div>
        <button class="vacancies-contacts_btn-send-cv btn-black">Отправить резюме</button>
    </section>
</main>

<script src="scripts.js"></script>
</body>

</html>