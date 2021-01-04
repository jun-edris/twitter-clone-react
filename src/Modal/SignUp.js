import React from 'react'
import { FaTwitter } from "react-icons/fa";
const SignUp = props => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <FaTwitter/>
                    <button>Next</button>
                </div>
                <div className="modal-body">
                    <span>Create your account</span>
                    <div className="editName">
                        <div className="editName_info">
                            <span>Name</span>
                        </div>
                        <input type="text"/>
                    </div>
                    <div className="editEmail">
                        <div className="editEmail_info">
                            <span>Name</span>
                        </div>
                        <input type="email"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
