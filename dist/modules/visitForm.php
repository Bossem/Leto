<section class="visit-form">
  <div class="container">
    <div class="visit-form__box">
      <h2 class="visit-form__header">Записаться на бесплатный визит</h2>
      <form action="send.php" method="POST" class="form visit-form__form">
        <div class="visit-form__input-box">
          <input type="text" name="userName" class="form__input visit-form__input" id="visit-input-name-2" placeholder="Ваше имя...">
        </div>
        <div class="visit-form__input-box">
          <input type="tel" name="userPhone" class="form__input visit-form__input" id="visit-input-phone-2" placeholder="Ваш номер телефона...">
        </div>
        <button class="button button--primary visit-form__button" id="btn-sumbit-visit">Записаться</button>
        <div class="policy visit-form__policy">
          <input type="checkbox" name="policyCheckbox" id="visit-checkbox" class="visit-form__checkbox" checked>
          <label for="visit-checkbox" class="visit-form__label">Я согласен на обработку персональных данных</label>
        </div>
      </form>
    </div>
  </div>
</section>