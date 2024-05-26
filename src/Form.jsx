import { useState } from "react";
import styles from './styles.css';

function Form(props) {
    
    let [text, setText] = useState(props.text);

    const onChange = (e) => {
		setText(e.target.value);
	}

    const sayHello = (e) => {
        e.preventDefault();
        if(text) {
            alert("HI, " + text.toUpperCase());
        } else {
            alert("Введите ваше имя");
        }
    }

    return (
        <form onSubmit={sayHello}>
            <input onChange={onChange} value={text} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form;
