import React,{useRef,useState} from 'react';
import FileBase64 from 'react-file-base64';
import classes from '../styles/form.module.css';

const Form = () => {
    const inputTitleref = useRef();
    const inputImageref = useRef();
    const inputSubTitleref = useRef();
    const inputDescref = useRef();
    const inputdateref = useRef();
const [img,setImg] = useState()
    
const handler = (e) =>{
  setImg(e.target.value)
}
    const onSubmitHandeler= (e) =>{
        e.preventDefault();
        
        const titleTargetVal = inputTitleref.current.value;
        // const imageTargetVal = inputImageref.current.files[0];
        const subTitleVal = inputSubTitleref.current.value;
        const descVal = inputDescref.current.value;
        const dateVal = inputdateref.current.value;

      

        const data = {
            title: titleTargetVal,
            image: img,
            subTitle: subTitleVal,
            desc: descVal,
            date: dateVal
        }
        console.log(data);
    }
  return (
    <div className={classes.form_con}>
    <h1>Add Post</h1>
        <form onSubmit={onSubmitHandeler}>
            <div className={classes.box_1}>
                <input type="text" name="First" id="" placeholder='title' ref={inputTitleref} />
            </div>
            <div className={classes.box_2}>
                <input type="file" src="image" onChange={handler}  alt=""  ref={inputImageref} />
                {/* <FileBase64
                    multiple={ true }
                     onDone={ ({base64}) =>setImg(base64)} /> */}
            </div>
            <div className={classes.box_3}>
                <input type="text" name="sub_desc" id="" placeholder='sub_title' ref={inputSubTitleref} />
            </div>
            <div className={classes.box_4}>
                <textarea name="desc" id="" cols="47" rows="20" placeholder='description' ref={inputDescref}></textarea>
            </div>
            <div className={classes.box_5}>
                <input type="date" name="date" id="" ref={inputdateref} />
            </div>
            <input type="submit" value="send" />
        </form>
    </div>
  )
}


export default Form

