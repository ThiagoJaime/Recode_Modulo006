import React from 'react'

function contato() {
    return (
        <section className="get-in-touch">
            <h1 className="title">Contate-nos</h1>
            <form className="contact-form row">
                <div className="form-field col-lg-6">
                    <input
                        id="name"
                        className="input-text js-input"
                        type="text"
                        required=""
                    />
                    <label className="label" htmlFor="name">
                        Nome
                    </label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input
                        id="email"
                        className="input-text js-input"
                        type="email"
                        required=""
                    />
                    <label className="label" htmlFor="email">
                        E-mail
                    </label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input
                        id="company"
                        className="input-text js-input"
                        type="text"
                        required=""
                    />
                    <label className="label" htmlFor="company">
                        Nome da Empresa
                    </label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input
                        id="phone"
                        className="input-text js-input"
                        type="text"
                        required=""
                    />
                    <label className="label" htmlFor="phone">
                        Número de Contato
                    </label>
                </div>
                <div className="form-field col-lg-12">
                    <input
                        id="message"
                        className="input-text js-input"
                        type="text"
                        required=""
                    />
                    <label className="label" htmlFor="message">
                        Mensagem
                    </label>
                </div>
                <div className="form-field col-lg-12 d-flex justify-content-center">
                    <input className="submit-btn" type="submit" defaultValue="Envie" />
                </div>
            </form>
        </section>

    )
}

export default contato