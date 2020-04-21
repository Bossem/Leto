<section class="club-cards" id="club-cards">
  <div class="container">
    <div class="section-title">
      <h2 class="section-title__text">Клубные карты</h2>
    </div>
    <div class="club-cards__row">
      <div class="club-cards__col club-cards__col--1">
        <img src="./img/club-cards/card-image-solo.png" alt="card-image">
      </div>
      <div class="club-cards__col club-cards__col--2">
        <div class="club-cards__cards-form-box cards-form-box">
          <div class="cards-form-box__buttons">
            <button class="cards-form-box__month-button cards-form-box__month-button--active">1 месяц</button>
            <button class="cards-form-box__month-button">6 месяцев</button>
            <button class="cards-form-box__month-button">9 месяцев</button>
            <button class="cards-form-box__month-button">12 месяцев</button>
          </div>
          <form action="send.php" method="POST" class="club-cards__form">
            <div class="club-cards__form-content">
              <div class="policy cards-form-box__policy">
                <input type="radio" name="policyCheckbox" id="cards-form-box-checkbox-1" class="cards-form-box__checkbox" checked>
                <label for="cards-form-box-checkbox-1" class="cards-form-box__label"><span class="cards-form-box__label-bold">Лето «Мозаика»<span class="cards-form-box__label-ligth">Россия, Москва, 7-я Кожуховская ул., 9</span></span></label>
              </div>
              <div class="policy cards-form-box__policy">
                <input type="radio" name="policyCheckbox" id="cards-form-box-checkbox-2" class="cards-form-box__checkbox">
                <label for="cards-form-box-checkbox-2" class="cards-form-box__label"><span class="cards-form-box__label-bold">Лето «Щелково»<span class="cards-form-box__label-ligth">Россия, г. Щелково, ул. Советская, д. 16</span></span></label>
              </div>
              <div class="club-cards__input-box">
                <input type="text" name="userName" class="club-cards__input" id="club-cards-input-name"/>
                <label for="club-cards-input-name" id="club-cards-label-name" class="input-show">Ваше имя<span>*</span></label>
              </div>
              <div class="club-cards__input-box">
                <input type="tel" name="userPhone" class="club-cards__input" id="club-cards-input-phone"/>
                <label for="club-cards-input-phone" id="club-cards-label-phone" class="input-show">Ваш номер телефона<span>*</span></label>
              </div>
            </div>
            <div class="policy cards-form-box__policy-main">
              <input type="checkbox" name="policyCheckbox" id="cards-form-box-checkbox-main" class="cards-form-box__checkbox-main" checked>
              <label for="cards-form-box-checkbox-main" class="cards-form-box__label-main">Я согласен на обработку персональных данных</label>
            </div>
            <button class="button button--primary cards-form-box__form-button" id="btn-sumbit-cards-form-box">Забронировать карту</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>