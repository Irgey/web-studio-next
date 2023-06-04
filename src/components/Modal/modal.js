const Modal = ({ toggleMenu }) => {
  return (
    <div className="backdrop is-hidden" data-modal>
      <div className="modal">
        <button
          className="modal-btn-close"
          aria-label="закрити вікно"
          onClick={toggleMenu}
        >
          <svg className="modal-icons" width="18" height="18">
            <use href="/images/sprite.svg#close"></use>
          </svg>
        </button>
        <strong className="modal-title">
          Залиште свої дані, ми вам передзвонимо
        </strong>
        <form className="modal-form">
          {/* <!-- Name field --> */}
          <label className="modal-label">
            <span className="modal-comment">Ім&apos;я</span>
            <input
              className="input-field"
              type="text"
              name="modal_name_field"
              required
            />
            <svg className="modal-icon" width="18" height="18">
              <use href="/images/sprite.svg#icon-person-black"></use>
            </svg>
          </label>
          {/* <!-- Telephone field --> */}
          <label className="modal-label">
            <span className="modal-comment">Телефон</span>
            <input
              className="input-field"
              type="tel"
              name="modal_tel_field"
              required
            />
            <svg className="modal-icon" width="18" height="18">
              <use href="/images/sprite.svg#icon-phone-black"></use>
            </svg>
          </label>
          {/* <!-- E-mail field --> */}
          <label className="modal-label">
            <span className="modal-comment">Поштa</span>
            <input
              className="input-field"
              type="email"
              name="modal_mail_field"
              required
            />
            <svg className="modal-icon" width="18" height="18">
              <use href="/images/sprite.svg#icon-email-black"></use>
            </svg>
          </label>
          {/* <!-- User comment field --> */}
          <label className="modal-label">
            <span className="modal-comment">Коментар</span>
            <textarea
              className="modal-comment-textarea"
              placeholder="Введіть текст"
              name="modal_commentary_field"
            ></textarea>
          </label>
          {/* <!-- User agreement checkbox field --> */}
          <label className="modal-label-checkbox">
            <input className="modal-checkbox" type="checkbox" required />
            <span className="checkbox-custom">
              <svg className="checkbox-icon" width="18" height="18">
                <use href="/images/sprite.svg#icon-checkmark"></use>
              </svg>
            </span>

            <span className="checkbox__text">
              Погоджуюся з розсилкою та приймаю
            </span>
            <a
              className="form__agreement-link"
              href="https://www.instagram.com/"
            >
              Умови договору
            </a>
          </label>
          {/* <!-- Submit button --> */}
          <button className="form__submit-button" type="submit">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
