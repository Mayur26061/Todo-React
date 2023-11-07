const InputBox = ({setter}) => {
  
    return ( 
        <div className="inputbox">
        <input type="text" id="inp"/>
        <button onClick={(ev)=>{
            let input = document.querySelector('#inp')
            if (input.value.trim()){
                setter(ev,input.value.trim());
            }
            input.value = ''

    }}>Add</button>
        </div>
    );
}

export default InputBox;