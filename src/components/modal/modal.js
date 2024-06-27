import React, { useEffect } from "react";
import './modal.css';

function Modal({ isOpen, setModalOpen, descInstrucoes, funcao1, funcao2, funcao3, funcao4, funcao5, funcao6, funcao7, funcao8, }) {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                setModalOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
        } else {
            window.removeEventListener("keydown", handleEsc);
        }

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, setModalOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-background" onClick={() => setModalOpen(false)}>
            <div className="modal-main" onClick={(e) => e.stopPropagation()}>
                <div className="modal-cabecalho">
                    <h3 className="titulo-modal">Instruções do exercício</h3>
                    <button className="btn-fechar-modal" onClick={() => setModalOpen(false)}>X</button>
                </div>
                
                <ul className="lista-instrucoes">
                    {descInstrucoes.map((instrucao, index) => (
                        <li className="item-instrucao" key={index}>
                            {instrucao}
                        </li>
                    ))}
                </ul>
                <ul className="lista-instrucoes">
                    {funcao2.map((instrucao, index) => (
                        <li className="item-instrucao" key={index}>
                            {instrucao}
                        </li>
                    ))}
                </ul>
                <ul className="lista-instrucoes">
                    {funcao3.map((instrucao, index) => (
                        <li className="item-instrucao" key={index}>
                            {instrucao}
                        </li>
                    ))}
                </ul>
                <ul className="lista-instrucoes">
                    {funcao4.map((instrucao, index) => (
                        <li className="item-instrucao" key={index}>
                            {instrucao}
                        </li>
                    ))}
                </ul>
                <ul className="lista-instrucoes">
                    {funcao5.map((instrucao, index) => (
                        <li className="item-instrucao" key={index}>
                            {instrucao}
                        </li>
                    ))}
                </ul>
                <ul className="lista-instrucoes">
                    {funcao6.map((instrucao, index) => (
                        <li className="item-instrucao" key={index}>
                            {instrucao}
                        </li>
                    ))}
                </ul>
                <ul className="lista-instrucoes">
                    {funcao7.map((instrucao, index) => (
                        <li className="item-instrucao" key={index}>
                            {instrucao}
                        </li>
                    ))}
                </ul>
                <ul className="lista-instrucoes">
                    {funcao8.map((instrucao, index) => (
                        <li className="item-instrucao" key={index}>
                            {instrucao}
                        </li>
                    ))}
                </ul>
              
                
            </div>
        </div>
    );
}

export default Modal;
