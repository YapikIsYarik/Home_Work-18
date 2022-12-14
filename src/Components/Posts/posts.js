import React, {Component} from 'react';
import './posts.css'
import ANAKIN_IMAGE from "../../assets/Anakin.jpg";

function Posts  ({data}) {

    const {id, author, content, image, date} = data
    const {name, photo, nickname} = author
    console.log()
        return (
            <div>
                <div className="post">
                    <div className="post__body">
                        <img className = 'user__img' src={photo} alt="ANAKIN_IMAGE"/>
                        <div className="post__item">
                            <div className="user__info">
                                <div className="user__name">{name}</div>
                                <div className="user__nickname">{nickname}</div>
                                <div className="post__date">{date}</div>
                            </div>
                            <div className="post__content">{content}</div>
                            <img className = 'content__img' src={image} alt="RAY_IMAGE"/>
                        </div>

                    </div>
                </div>

            </div>
        );

}

export default Posts;