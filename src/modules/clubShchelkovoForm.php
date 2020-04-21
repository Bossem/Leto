<section class="club-shchelkovo-form">
  <div class="container">
    <div class="section-title">
      <h2 class="section-title__text">Выбрать карту</h2>
    </div>
    <div class="club-shchelkovo-form__row">
      <div class="club-shchelkovo-form__col club-shchelkovo-form__col--1">
        <img src="./img/club-cards/card-image.png" alt="card-image">
      </div>
      <div class="club-shchelkovo-form__col club-shchelkovo-form__col--2">
        <div class="club-shchelkovo-form__cards-form-box shchelkovo-form-box">
          <div class="shchelkovo-form-box__buttons">
            <div class="shchelkovo-form-box__price-button">
              <div class="shchelkovo-form-box__price-button-box price-button">
                <span class="price-button__text price-button__text--1">1 месяц</span>
                <span class="price-button__text price-button__text--2">— соло —</span>
                <span class="price-button__text price-button__text--3">2999₽</span>
                <span class="price-button__text price-button__text--4">* Без заморозки</span>
              </div>
            </div>
            <div class="shchelkovo-form-box__price-button">
              <div class="shchelkovo-form-box__price-button-box price-button">
                <span class="price-button__text price-button__text--1">6 месяцев</span>
                <span class="price-button__text price-button__text--2">— соло —</span>
                <span class="price-button__text price-button__text--3">9900₽</span>
                <span class="price-button__text price-button__text--4">* Без заморозки</span>
              </div>
            </div>
            <div class="shchelkovo-form-box__price-button">
              <div class="shchelkovo-form-box__price-button-box price-button">
                <span class="price-button__text price-button__text--1">9 месяцев</span>
                <span class="price-button__text price-button__text--2">— соло —</span>
                <span class="price-button__text price-button__text--3">11900₽</span>
                <span class="price-button__text price-button__text--4">* Без заморозки</span>
              </div>
            </div>
            <div class="shchelkovo-form-box__price-button">
              <div class="shchelkovo-form-box__price-button-box price-button">
                <span class="price-button__text price-button__text--1">12 месяцев</span>
                <span class="price-button__text price-button__text--2">— дневная —</span>
                <span class="price-button__text price-button__text--3">9900₽</span>
                <span class="price-button__text price-button__text--4">* 1 месяц заморозки</span>
              </div>
            </div>
            <div class="shchelkovo-form-box__price-button">
              <div class="shchelkovo-form-box__price-button-box price-button">
                <span class="price-button__text price-button__text--1">12 месяцев</span>
                <span class="price-button__text price-button__text--2">— соло —</span>
                <span class="price-button__text price-button__text--3">15900₽</span>
                <span class="price-button__text price-button__text--4">* 1 месяц заморозки</span>
              </div>
            </div>
          </div>
          <form action="send.php" method="POST" class="club-shchelkovo-form__form">
            <div class="club-shchelkovo-form__form-content">
              <div class="club-shchelkovo-form__input-box">
                <input type="text" name="userName" class="club-shchelkovo-form__input" id="club-shchelkovo-form-input-name"/>
                <label for="club-shchelkovo-form-input-name" id="club-shchelkovo-form-label-name" class="input-show">Ваше имя<span>*</span></label>
              </div>
              <div class="club-shchelkovo-form__input-box">
                <input type="tel" name="userPhone" class="club-shchelkovo-form__input" id="club-shchelkovo-form-input-phone"/>
                <label for="club-shchelkovo-form-input-phone" id="club-shchelkovo-form-label-phone" class="input-show">Ваш номер телефона<span>*</span></label>
              </div>
            </div>
            <div class="policy shchelkovo-form-box__policy-main">
              <input type="checkbox" name="policyCheckbox" id="shchelkovo-form-box-checkbox-main" class="shchelkovo-form-box__checkbox-main" checked>
              <label for="shchelkovo-form-box-checkbox-main" class="shchelkovo-form-box__label-main">Я согласен на обработку персональных данных</label>
            </div>
            <button class="button button--primary shchelkovo-form-box__form-button" id="btn-sumbit-shchelkovo-form-box">Забронировать карту</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>