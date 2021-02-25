let conversion = (data) => {
    console.log("a".toUpperCase());
    let str = data.split("");
    let flag=0;
    let convert = str.map((character) => {
        if((character>="a") && (character<="z")||(character>="A") && (character<="Z")){
            if(flag==1){
                flag=0;
                return character.toUpperCase();
            }
            else{
                return character;
            }
        }
        else{
            flag=1;
            return "";
        }
    });
    return convert.join("");
}