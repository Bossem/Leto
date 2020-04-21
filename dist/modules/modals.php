<div class="modal modal">
  <div class="modal__container-call">
    <button class="modal__close"></button>
    <div class="modal__box modal-call">
      <h2 class="modal__header">Обратный звонок</h2>
      <form action="send.php" method="POST" class="form modal__form modal__form--1">
        <div class="modal__input-box modal__input-box--1">
          <input type="text" name="userName" class="form__input modal__input" id="call-input-name" placeholder="Ваше имя...">
        </div>
        <div class="modal__input-box modal__input-box--2">
          <input type="tel" name="userPhone" class="form__input modal__input" id="call-input-phone" placeholder="Ваш номер телефона...">
        </div>
        <div class="policy modal__policy">
          <input type="checkbox" name="policyCheckbox" id="call-checkbox" class="modal__checkbox" checked>
          <label for="call-checkbox" class="modal__label">Я согласен на обработку персональных данных</label>
        </div>
        <button onclick="ym(61650112, 'reachGoal', 'call-back'); return true;" class="button button--primary modal__button" id="btn-sumbit-call">Перезвоните мне</button>
      </form>
    </div>
  </div>
  <div class="modal__container-visit">
    <button class="modal__close"></button>
    <div class="modal__box">
      <h2 class="modal__header">Записаться на визит</h2>
      <form action="send.php" method="POST" class="form modal__form modal__form--2">
        <div class="modal__input-box modal__input-box--1">
          <input type="text" name="userName" class="form__input modal__input" id="visit-input-name" placeholder="Ваше имя...">
        </div>
        <div class="modal__input-box modal__input-box--2">
          <input type="tel" name="userPhone" class="form__input modal__input" id="visit-input-phone" placeholder="Ваш номер телефона...">
        </div>
        <div class="policy modal__policy">
          <input type="checkbox" name="policyCheckbox" id="visit-modal-checkbox" class="modal__checkbox" checked>
          <label for="visit-modal-checkbox" class="modal__label">Я согласен на обработку персональных данных</label>
        </div>
        <button class="button button--primary modal__button" id="btn-sumbit-modal-visit">Записаться</button>
      </form>
    </div>
  </div>
</div>

<div class="thanks-modal">
  <div class="thanks-modal__container-thanks">
    <button class="thanks-modal__close"></button>
    <div class="thanks-modal__box thanks-modal-thanks">
      <h2 class="thanks-modal__header">Заявка отправлена</h2>
    </div>
    <div class="thanks-modal__body">
      <span class="thanks-modal__body-text">Мы Вам скоро перезвоним!</span>
    </div>
  </div>
</div>