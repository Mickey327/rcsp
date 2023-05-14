import React from 'react';
import {Col} from "react-bootstrap";
import "./CommentSection.css"

const CommentSection = ({comment}) => {
    return (
            <Col sm={12}>
                <div className="bg-light text-black comment-section">
                    <div className="d-flex flex-column ml-2"><span
                        className="name font-weight-bold">От: {comment.user_email}</span><span>Отправлено: {comment.updated_at}</span>
                    </div>
                    <div className="mt-2 p-2">
                        <p className="fs-5">{comment.message}</p>
                    </div>
                </div>
            </Col>
    );
};

export default CommentSection;