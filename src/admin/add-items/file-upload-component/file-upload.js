import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import './file-upload.css'


const FileUpload = (props) => {

    // Клик на поле добавления картинки
    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click()
    }

    // Отображение названия картинки
    const [imgName, setImgName] = useState('image.jpg')

    return (
        <>
            <label htmlFor="file">Изображение: <span className='img-uploaded'>{imgName}</span></label>
            <button className='img-upload-button' type="button" onClick={handleClick}><FontAwesomeIcon className='upload-icon' icon={faUpload} /></button>
            <input className='img-uploader' type='file' name='file' ref={hiddenFileInput} onChange={(event) => {
                setImgName(event.target.files[0].name);
                // setFieldValue из пропс формика для установки значения. 
                // URL.createObjectURL таким способом отображать картинку товара на странице товара в <img src=''/>
                props.formProps.setFieldValue('file', URL.createObjectURL(event.target.files[0]))
            }} style={{ display: 'none' }}></input>
        </>
    );
}

export default FileUpload;